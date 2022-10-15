const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get('/carrito', productController.carrito);
router.get('/detalle-producto/:id',productController.detalleProducto);
router.get('/newproduct',productController.newProduct);
router.get('/editproduct',productController.editProduct);

module.exports = router