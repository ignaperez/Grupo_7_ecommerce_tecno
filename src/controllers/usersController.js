//Requires
const fs = require("fs");
const path = require("path");
const bcryptjs = require('bcryptjs');
//const userFilePath = path.join(__dirname, '../data/users.json');
//const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const { validationResult } = require("express-validator")
const db = require('../database/models')
const op = db.Sequelize.Op;

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

    logicRegister: async (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("registro", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } else {
            try {
                let image

                if (req.file != undefined) {

                    image = req.file.filename
                } else {
                    image = 'generic.jpg'
                }

                let newUser = {
                    ...req.body,
                    //Encripto password 
                    password: bcryptjs.hashSync(req.body.password, 10),
                    categoria_id: 2,
                    image: image,
                    activo: 1
                }
                await db.Usuario.create(newUser);
                res.redirect('/');
            } catch (error) {
                console.log(error)
            }
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
            if (result) {
                if (bcryptjs.compareSync(req.body.password, result.password)) {
                    req.session.user = result;
                    console.log(result);
                    if (req.body.recordar_usuario) {

                        res.cookie("cookieEmail", result.email, { maxAge: 60000 * 15 });
                    }

                    if (result.categoria_id == 1) {
                        res.redirect('/users/listar-usuarios');
                    } else {
                        res.redirect("/");
                    }
                } else {
                    let errors = "Las credenciales son invalidas, prueba nuevamente"
                    res.render("login", {
                        error: errors
                    })
                }
            } else {
                let errors = "Las credenciales son invalidas, prueba nuevamente"
                res.render("login", {
                    error: errors
                })

            }

        } catch (error) {
            return console.log(error)
        }
    },




    vistaPerfil: (req, res) => {
        res.render("perfilUsuario", {
            user: req.session.user

        })

    },
    listarUsuarios: (req, res) => {
        db.Usuario.findAll({
            where: {
                activo: 1
            }, include: [{ association: "categoria" }]
        })
            .then(users => {
                res.render('listadoU', { users })
            })


    },
    detalleUsuario: (req, res) => {
        let idUser = req.params.id;
        db.Usuario.findByPk(idUser, { include: [{ association: "categoria" }] })
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
    actualizarUsuario: async (req, res) => {
        const resultValidation = validationResult(req);
        userId = req.params.id;
        if (resultValidation.errors.length > 0) {
            return res.render("editarUsuarioValidaciones",{
                userId,
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } else {

        try {
            const { id } = req.params;
            //console.log("aca llego 1")
            let image;
            if (req.files[0] != undefined) {
                image = req.files[0].filename
                //console.log("imagen: "+image)
            }
            else {

                image = 'generic.jpg'
                //console.log("generica: "+image)
            }


            //console.log("aca llego 2")
            let usuarioToEdit = {
                ...req.body,
                image
            };
            //console.log("ESTO ES USUARIO EDIT"+req.body.nombre)
            await db.Usuario.update(usuarioToEdit, {
                where: { id }
            })

            res.redirect('/users/listar-usuarios')

        } catch (error) {

        }


    }
},
    agregarUsuario: (req, res) => {
        res.render("agregar-usuario")
    },
    logicaAniadirUsuario: async (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("registro", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } else {
            try {

                let image

                if (req.file != undefined) {

                    image = req.file.filename
                } else {
                    image = 'generic.jpg'
                }

                let newUser = {
                    ...req.body,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    activo: 1,
                    image: image
                }
                await db.Usuario.create(newUser);
                res.redirect('/users/listar-usuarios');
            } catch (error) {
                console.log(error)
            }}
        },
        borrar: async (req, res) => {

            const { id } = req.params;

            try {

                await db.Usuario.update(
                    { activo: 0 }, { where: { id } }
                )

                res.redirect('/users/listar-usuarios')
            } catch (error) {
                res.render(error)
            }
        },

            searchAdmin: async (req, res) => {
                let search = req.query.keywords;
                try {

                    let users = await db.Usuario.findAll({
                        where: { email: { [op.like]: "%" + search + "%" } }
                        , include: [{ association: "categoria" }]
                    })
                    console.log(users)
                    res.render("listadoU", { users })
                } catch (error) {
                    console.log(error)
                }


            },



}



module.exports = userController;