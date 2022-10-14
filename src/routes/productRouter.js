const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get('/carrito', productController.carrito);
router.get('/detalle-producto/:id',productController.detalleProducto);
router.get('/newProduct',productController.newProduct);
router.get('/editProduct',productController.editProduct);

module.exports = router