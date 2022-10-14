const productos = require('../data/productData')
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
    }
}
module.exports = productController;
