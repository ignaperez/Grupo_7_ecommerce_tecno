const path=require('path');
const express = require('express');
const mainController = require('../controllers/mainControllerOK');
const router =express.Router();

//RUTAS
router.get('/',mainController.index); //ruta home
router.get('/detalle-producto/:id',mainController.detalleProducto);

//Exportamos modulo
module.exports = router;
