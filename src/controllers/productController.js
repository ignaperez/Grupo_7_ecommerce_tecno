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
        let id = req.params.id;
        let productoAEditar = productos.find(producto => producto.id == id);
        res.render("editProduct",{producto: productoAEditar});
    },
    editar: (req, res) => {
        let id = req.params.id;
        let productoAEditar = productos.find(producto => producto.id == id)
        let imagen 
        (req.files[0] != undefined)
            ? imagen = req.files[0].filename
            : imagen = productoAEditar.imagen1
        productoAEditar = {
            id: productoAEditar.id,
            ...req.body,
            imagen1: imagen,
        } 
        let nuevoProducto = productos.map(producto => {
            if(producto.id == productoAEditar.id) {
                return producto = {...productoAEditar};
            }
            return producto
        })
        fs.writeFileSync(productsFilePath, JSON.stringify(nuevoProducto, null, " "));
        res.redirect("/product/dashboard")
    },
    create:(req,res)=>{
        let image
        (req.files[0] != undefined) 
            ? image = req.files[0].filename 
            : image = "logo-img.png"
        let newProduct = {
			id: productos[productos.length - 1].id + 1,
			...req.body,
            imagen1: image
		};
		productos.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '));
		//res.redirect('/');
        res.redirect('/product/dashboard');
    },
    dashboard: (req, res) => {
        res.render("admin-producto", {productos})
    },
    borrar: (req, res) => {
        let id = req.params.id;
        let nuevosProductos = productos.filter(producto => producto.id != id);
        let productosFinales = nuevosProductos.map(producto => {
            if(producto.id > id){
                producto.id = producto.id - 1;
            }
            return producto
        })
       
        fs.writeFileSync(productsFilePath, JSON.stringify(productosFinales, null, " "))
        res.redirect("/product/dashboard");
    },
    searchAdmin: (req, res) => {
        let search = req.query.keywords;
        let productoABuscar = productos.filter(producto => producto.titulo.toLowerCase().includes(search));
        res.render("admin-producto", {
            productos : productoABuscar
        })

    }
}
module.exports = productController;
