//Requires
const fs = require("fs");
const path = require("path");
const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const bcryptjs = require('bcryptjs');
const db = require('../database/models')
const { validationResult } = require("express-validator")
/* const productos = JSON.parse(fs.readFileSync(userFilePath, 'utf-8')); */

const multer = require('multer');
const session = require("express-session");
const { brotliDecompress } = require("zlib");
const { DefaultDeserializer } = require("v8");
const { createDiffieHellmanGroup } = require("crypto");
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


        if (resultValidation.errors.length > 0) {
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

    // loginPost: (req, res) => {
    //     let emailUsuario = req.body.email;
    //     let user = users.find(usuario => usuario.email == emailUsuario);
      
    //     //Login compara password encriptada
        
    //     if (user && bcryptjs.compare(req.body.password, user.password)) {
    //         //delete user.password;

    //         req.session.user = user;
    //         if (req.body.recordar_usuario) {

    //             res.cookie("cookieEmail", user.email, { maxAge: 60000 * 5 });
    //         }
    //         else {
    //             console.log("ACA LLEGO - no recuerdo cookie");

    //         }


    //         if (user.categoria == "admin") {
    //             res.redirect('/users/listar-usuarios');
    //         } else {
    //             res.redirect("/");
    //         }
    //     }
    //     else {
    //         console.log("no coinciden credenciales y llego")
    //         let errors = "Las credenciales son invalidas, prueba nuevamente"
    //         res.render("login", {
    //             error: errors
    //         })
    //     }
    // },
//Login con Mysql
//inicio
loginPostMysql: async (req, res) => {

    try{

    
    let emailUsuario = req.body.email;
     const result = await db.Usuario.findOne({
       where:{
        email: emailUsuario
       } 
     })
   
   // console.log("este es el resulatdo "+result.password)
    
       
        if (bcryptjs.compare(req.body.password, result.password ))
        {
            req.session.user = result;
            console.log("Este es el dato :  "+req.session.user.categoria)
          
            if (req.body.recordar_usuario) {

                res.cookie("cookieEmail", result.email, { maxAge: 60000 * 5 });
            }
            else {
                console.log("ACA LLEGO - no recuerdo cookie");
    
            }
    
    
            if (result.categoria == 1) {
                res.redirect('/users/listar-usuarios');
            } else {
                res.redirect("/");
            }

        }
        else
        {
            console.log("no coinciden credenciales y llego")
        let errors = "Las credenciales son invalidas, prueba nuevamente"
        res.render("login", {
            error: errors
        })

        }

    }
    
     catch(error){
        return res.send(error)
     }
  

},
//fin


    vistaPerfil: (req, res) => {
        res.render("perfilUsuario", {
            user: req.session.user

        })

    },
    listarUsuarios: (req, res) => {
        db.Usuario.findAll()
            .then(users => {
                //console.log(users)
                res.render('listadoU', { users })
            })


    },
    detalleUsuario: (req, res) => {
        let idUser = req.params.id;
        
        db.Usuario.findByPk(idUser)
        .then(verUsuario =>
            res.render('detalleUsuario', { verUsuario }))
       
    },
    editarUsuario: (req, res) => {
        let idUser = req.params.id;
        //let verUsuario = users.find(usuario => usuario.id == idUser);
        db.Usuario.findByPk(idUser)

            .then(verUsuario =>
                res.render('editarUsuario', { verUsuario }))
       


    },
    actualizarUsuario: (req, res) => {
        let id = req.params.id;
        let usuarioActualizado = users.find(usuario => usuario.id == id)
        let imagen
        (req.files[0] != undefined)
            ? imagen = req.files[0].filename
            : imagen = usuarioActualizado.image
        usuarioActualizado = {
            id: usuarioActualizado.id,
            ...req.body,
            image: imagen,
        }
        let nuevoUsuario = users.map(usuario => {
            if (usuario.id == usuarioActualizado.id) {
                return usuario = { ...usuarioActualizado };
            }
            return usuario
        })

        fs.writeFileSync(userFilePath, JSON.stringify(nuevoUsuario, null, " "));
        res.redirect("/users/listar-usuarios")
    },
    listar: (req, res) => {
        db.Usuario.findAll()
            .then(usuarios => {
                res.send({ usuarios })
            })

    }


}

module.exports = userController;