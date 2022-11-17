//Requires
const fs = require("fs");
const path = require("path");
const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const bcryptjs = require('bcryptjs');
const {validationResult} = require("express-validator")
/* const productos = JSON.parse(fs.readFileSync(userFilePath, 'utf-8')); */

const multer = require('multer');
const session = require("express-session");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/users')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({ storage: storage })




const userController = {
    login: (req, res) => {
        res.render('login');

    },

    registro: (req, res) => {
        res.render('registro');

    },

    logicRegister: (req, res) => {
        const resultValidation = validationResult(req);
        const userInDB = users.find(usuario => usuario.email == req.body.email)
            
            
            if(resultValidation.errors.length > 0){
                return res.render("registro", {
                    errors: resultValidation.mapped(), 
                    oldData: req.body
                }); 
            } else {
                
                let image
                
                if (req.file != undefined) {
                    
                    image = req.file.filename
                } else {
                    image = 'generic.jpg'
                }
                
                let newUser = {
                    
                    id: users[users.length - 1].id + 1,
                    ...req.body,
                    //Encripto password 
                    password: bcryptjs.hashSync(req.body.password, 10),
                    categoria: "user",
                    image: image
                }
                
                users.push(newUser);
                fs.writeFileSync(userFilePath, JSON.stringify(users, null, ' '));
                res.redirect('/');
            }

    },
            
    loginPost: (req, res) => {
        let emailUsuario = req.body.email;
        let user = users.find(usuario => usuario.email == emailUsuario);
        
        //Login compara password encriptada
        if (user && bcryptjs.compare(req.body.password, user.password)) {
            delete user.password
            req.session.user = user;
            if (user.categoria == "admin") {
                res.redirect('/product/dashboard');
            } else {
               res.redirect('/');
            }
        } else {
            let errors = "Las credenciales son invalidas, prueba nuevamente"
            res.render("login", {
                error:  errors
            })
        }
    },
    vistaPerfil: (req, res) => {
        res.render("perfilUsuario", {
            user: req.session.user
        })
        
    }

}

module.exports = userController;