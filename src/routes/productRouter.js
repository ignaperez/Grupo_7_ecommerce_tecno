const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();
const path = require("path");
const multer = require('multer');
const {body} = require("express-validator");

//Middlewares de ruta
const userNotLoggedMiddleware = require("../middlewares/userNotLoggedMiddleware");
const adminAccessMiddleware = require("../middlewares/adminAccessMiddleware");

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/img/productos')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

router.get('/carrito', userNotLoggedMiddleware , productController.carrito);
router.get('/detalle-producto/:id',productController.detalleProducto);
router.get('/newProduct',adminAccessMiddleware, productController.newProduct);
router.post('/newProduct', upload.any() ,productController.create);

router.get('/editProduct/:id', adminAccessMiddleware, productController.editProduct);
router.put("/editProduct/:id", upload.any(),adminAccessMiddleware ,productController.editar)

router.get("/dashboard", adminAccessMiddleware, productController.dashboard);
router.get("/dashboard/search", productController.searchAdmin)
router.post("/dashboard/:id",productController.borrar)
module.exports = router