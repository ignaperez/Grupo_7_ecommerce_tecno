//Requires
const express = require("express");
const userController = require("../controllers/usersController");
const router = express.Router();
const path = require("path");
const multer = require('multer');
const {body} = require("express-validator");

//Middlewares de ruta
const userLoggedMiddleware = require("../middlewares/userLoggedMiddleware")
const userNotLoggedMiddleware = require("../middlewares/userNotLoggedMiddleware");


const fs = require("fs");
const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

//Validaciones de Ruta para el registro
const userValidations = require("../middlewares/userRegisterValidations")
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

router.get("/listar-usuarios",userNotLoggedMiddleware, userController.listarUsuarios);
router.get('/detalle-usuario/:id',userController.detalleUsuario);

module.exports = router;

