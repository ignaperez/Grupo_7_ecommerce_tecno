const fs = require("fs");
const path = require("path");
const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const bcryptjs = require('bcryptjs');
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
        let image

        if (req.files[0] != undefined) {

            image = req.files[0].filename
        } else {
            image = 'generic.jpg'
        }

        let newUser = {

            id: users[users.length - 1].id + 1,
            ...req.body,
            're-password': null,
            //Encripto password 
            password: bcryptjs.hashSync(req.body.password, 10),
            categoria: "user",
            image: image
        }

        users.push(newUser);
        fs.writeFileSync(userFilePath, JSON.stringify(users, null, ''));
        res.redirect('/');
    },
    loginPost: (req, res) => {
        let nombreUsuario = req.body.name;
        let user = users.find(usuario => usuario.username == nombreUsuario);
        //Login compara pass encriptado
        if (user && bcryptjs.compare(req.body.password, user.password)) {
            //console.log(user.categoria);
            if (user.categoria == "admin") {
                req.session.nombre = user.firstname;
                console.log(req.session.nombre);
                res.redirect('/product/dashboard');
                
            }
            else 
            {
                res.redirect('/product/carrito');
            }
        }
        else


            console.log("no existe");

    


}

}

module.exports = userController;