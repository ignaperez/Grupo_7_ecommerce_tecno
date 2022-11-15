//Requires
const express = require("express");
const userController = require("../controllers/usersController");
const router = express.Router();
const path = require("path");
const multer = require('multer');
const {body} = require("express-validator");
const userLoggedMiddleware = require("../middlewares/userLoggedMiddleware")
const userNotLoggedMiddleware = require("../middlewares/userNotLoggedMiddleware");

const fs = require("fs");
const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

//Validaciones de Ruta para el registro
const userValidations = [
    body("firstname").notEmpty().withMessage("Tienes que escribir un nombre"),
    body("lastname").notEmpty().withMessage("Tienes que escribir un apellido"),
    body("email").notEmpty().withMessage("Tienes que escribir un correo electrónico").bail()
    .isEmail().withMessage("Tienes que escribir un correo válido").bail()
    .custom((valor, {req}) => {
        let userInDB = users.find(usuario => usuario.email == req.body.email);
        if(userInDB){throw new Error("Este email ya esta registrado")}
    }),
    body("telefono").notEmpty().withMessage("Tienes que escribir un telefono"),
    body("username").notEmpty().withMessage("Tienes que escribir un nombre de usuario"),
    body("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
    body("imagenPerfil").custom((valor, {req}) => {
        let file = req.file;
        let extensions = [".jpg", ".png", ".gif", ".jpeg"];

        if (!file) { throw new Error("Tienes que cargar una imagen")
            
        }else{
            let fileExtension = path.extname(file.originalname);
            if (!extensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${extensions.join(", ")}`)
            }
        }
        return true
    })
]
//Validaciones de Ruta para el login
const loginValidations = []
//configuración de multer//
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/img/users')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

//RUTAS
router.get("/login", userLoggedMiddleware, userController.login);
router.post("/login", userController.loginPost);

router.get("/registro", userLoggedMiddleware, userController.registro)
router.post("/registro", upload.single("imagenPerfil"), userValidations, userController.logicRegister)

router.get("/profile",userNotLoggedMiddleware, userController.vistaPerfil)

module.exports = router;

