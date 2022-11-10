const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();
const path = require("path");
const multer = require('multer');
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/img/productos')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

router.get('/carrito', productController.carrito);
router.get('/detalle-producto/:id',productController.detalleProducto);
router.get('/newProduct',productController.newProduct);
router.post('/newProduct',upload.any() ,productController.create);

router.get('/editProduct/:id',productController.editProduct);
router.put("/editProduct/:id", upload.any(), productController.editar)

router.get("/dashboard", productController.dashboard);

router.delete("/dashboard/:id", productController.borrar)
router.get("/dashboard/search", productController.searchAdmin)
module.exports = router