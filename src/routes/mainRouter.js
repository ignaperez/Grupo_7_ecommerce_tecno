const fs = require("fs")
const path =require('path');
const express = require('express');
const mainController = require('../controllers/mainController');
const router =express.Router();

//RUTAS
router.get('/',mainController.index); //ruta home
router.get('/ayuda', mainController.ayuda);







//Exportamos modulo
module.exports = router;
