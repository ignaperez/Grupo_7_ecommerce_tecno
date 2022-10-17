const fs = require("fs");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/img/productos");
    },
    
    filename: (req, file, cb) => {
        cb = (null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
})

var upload = multer({storage});

const productsFilePath = path.join(__dirname, '../data/productData.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const productController = {
    carrito:(req,res)=>
    {
        res.render ('carrito');

    },
    detalleProducto: (req,res)=>
    {
        let idProducto= req.params.id;
        let producto = productos.find(producto => producto.id == idProducto);
        if (producto.imagen2 == '')
        producto.imagen2=producto.imagen1;
        let miniListado = productos;
        res.render('detalle-producto',{productos, producto});
    },
    newProduct: (req,res) => {
        res.render('newProduct')
    },
    editProduct: (req, res) => {
        
        res.render("editProduct")
    },
    create:(req,res)=>{
        let image
        (req.files[0] != undefined) 
            ? image = req.files[0].filename 
            : image = "logo-img.png"
        let newProduct = {
			id: productos[productos.length - 1].id + 1,
			...req.body,
            image: image
		};
		productos.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '));
		res.redirect('/');
       
        
        res.redirect('/product/newProduct');
    },
    dashboard: (req, res) => {
        res.render("admin-producto", {productos})
    }
}
module.exports = productController;
