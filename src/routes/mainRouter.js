const path=require('path');
const express = require('express');
const mainController = require('../controllers/mainController');
const router =express.Router();

//RUTAS
router.get('/',mainController.index); //ruta home
router.get('/detalle-producto/:id',mainController.detalleProducto);
router.get('/ayuda', mainController.ayuda);
router.get('/carrito', mainController.carrito);
router.get('/login', mainController.login);
router.get('/registro', mainController.registro);
router.get('/newProduct',mainController.newProduct);




//Exportamos modulo
module.exports = router;
