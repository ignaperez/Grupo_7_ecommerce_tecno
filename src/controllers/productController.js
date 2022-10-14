const fs = require("fs");
const path = require("path");
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
        //let datos = req.body;
        // let datos = {
		// 	id: 5,
		// 	...req.body,
			
		// };
        let datos = req.body;
        
        console.log("esto estoy leyendo: ")
        console.log(datos);
        
        res.redirect('/product/newProduct');
    }
}
module.exports = productController;
