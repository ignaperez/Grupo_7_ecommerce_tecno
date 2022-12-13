//Requires
const fs = require("fs");
const path = require("path");
const bcryptjs = require('bcryptjs');
const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const { validationResult } = require("express-validator")
const db = require('../database/models')

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

    logicRegister:async (req, res) => {
        const resultValidation = validationResult(req);
        //const userInDB = users.find(usuario => usuario.email == req.body.email)
        const {email} =req.body
        try {
            const userInDB = await db.Usuario.findOne({
                where:{email:{email}}
            })
            
        } catch (error) {
            console.log(error)
        }
        
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
    loginPostMysql: async (req, res) => {

        try {


            let emailUsuario = req.body.email;
            const result = await db.Usuario.findOne({
                where: {
                    email: emailUsuario
                }
            })

            // console.log("este es el resulatdo "+result.password)


            if (bcryptjs.compare(req.body.password, result.password)) {
                req.session.user = result;
                //console.log("Este es el dato :  " + req.session.user.categoria)

                if (req.body.recordar_usuario) {

                    res.cookie("cookieEmail", result.email, { maxAge: 60000 * 5 });
                }
                else {
                  //  console.log("ACA LLEGO - no recuerdo cookie");

                }


                if (result.categoria == 1) {
                    res.redirect('/users/listar-usuarios');
                } else {
                    res.redirect("/");
                }

            }
            else {
                //console.log("no coinciden credenciales y llego")
                let errors = "Las credenciales son invalidas, prueba nuevamente"
                res.render("login", {
                    error: errors
                })

            }

        }

        catch (error) {
            return res.send(error)
        }


    },




    vistaPerfil: (req, res) => {
        res.render("perfilUsuario", {
            user: req.session.user

        })

    },
    listarUsuarios: (req, res) => {
        db.Usuario.findAll({
            where:{
                activo:1
            }
        })
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
    editarUsuario: async (req, res) => {
        try {
            let idUser = req.params.id;
            const verUsuario = await db.Usuario.findOne({
                where: {
                    id: idUser
                }
            })

            res.render('editarUsuario', { verUsuario })

        }
        catch (error) {
            res.render(error)
        }
    }
    ,
    actualizarUsuario: async(req, res) =>  {
       

       try {
        const {id} = req.params;
           console.log("aca llego 1")
            let image;
             if(req.files[0] !=undefined)
             {
                 image =req.files[0].filename
                 //console.log("imagen: "+image)
             }
             else
             {

                 image='generic.jpg'
                 //console.log("generica: "+image)
             }
            
            
            //console.log("aca llego 2")
            let usuarioToEdit = {
                ...req.body,
                image
            };
            //console.log("ESTO ES USUARIO EDIT"+req.body.nombre)
            await db.Usuario.update(usuarioToEdit,{
                where:{id}
            })
            
            res.redirect('/users/listar-usuarios')

        } catch (error) {
            
        }
       
       
    },
    borrar: async (req,res)=>{
        
        const {id} = req.params;
        console.log("este es el id: "+id)
        
        
        try {
            
            await db.Usuario.update(
                {activo:0},{where:{id}}
            )
            console.log("deberia estar en 0")
            res.redirect('/users/listar-usuarios')
            
        } catch (error) {
            res.render(error)
        }

    },
    listar: (req, res) => {
        db.Usuario.findAll()
            .then(usuarios => {
                res.send({ usuarios })
            })

    }


}

module.exports = userController;