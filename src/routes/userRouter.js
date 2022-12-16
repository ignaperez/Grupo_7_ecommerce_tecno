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
const adminAccsessMiddelware = require("../middlewares/adminAccessMiddleware")


const fs = require("fs");
//const userFilePath = path.join(__dirname, '../data/users.json');
//const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

//Validaciones de Ruta para el registro
const userValidations = require("../middlewares/userRegisterValidations-1")
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
//router.post("/login", userController.loginPost);
router.post("/login", userController.loginPostMysql);

router.get("/registro", userLoggedMiddleware, userController.registro)
router.post("/registro", upload.single("image"), userValidations, userController.logicRegister)
// sin express validator
//router.post("/registro", upload.single("image"), userController.logicRegister)
router.get("/profile",userNotLoggedMiddleware, userController.vistaPerfil)

router.get("/listar-usuarios",userNotLoggedMiddleware,adminAccsessMiddelware, userController.listarUsuarios);
router.get('/detalle-usuario/:id',adminAccsessMiddelware,userController.detalleUsuario);
router.get('/editar-usuario/:id',userController.editarUsuario);
router.put('/editar-usuario/:id',upload.any() , userController.actualizarUsuario);
router.get('/borrar/:id',userController.borrar)

router.get("/agregar-usuario", userController.agregarUsuario)
router.post("/agregar-usuario",upload.single("image") ,userValidations ,adminAccsessMiddelware, userController.logicaAniadirUsuario)
router.get("/listar-usuarios/search",adminAccsessMiddelware, userController.searchAdmin)

module.exports = router;

