const fs = require("fs")
const path =require('path');
const express = require('express');
const mainController = require('../controllers/mainController');
const userNotLoggedMiddleware = require("../middlewares/userNotLoggedMiddleware");
const router =express.Router();

//RUTAS
router.get('/',mainController.index); //ruta home
router.get('/ayuda', mainController.ayuda);
router.get('/logout',mainController.logout);//logout Cualquier sesion








//Exportamos modulo
module.exports = router;
