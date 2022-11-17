const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productData.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
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
    logout:(req,res)=>{
        req.session.destroy();
        //req.cookies.destroy();
        res.redirect('/');
    }
    
    

    
}
module.exports = mainController;