const productos = require('./productControllerOK');
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
        
        res.render('detalle-producto',{producto});
    }
    
}
module.exports = mainController;