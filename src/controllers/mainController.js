const productos = require('./productController');
const mainController =
{
    index: (req,res) =>
    {
        res.render ('index', {productos});
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
    ayuda:(req,res)=>
    {
        res.render ('ayuda');
    },
    carrito:(req,res)=>
    {
        res.render ('carrito');

    },
    login:(req,res)=> {
        res.render ('login');

    },
    registro:(req,res)=>{
        res.render ('registro');

    },

    
}
module.exports = mainController;