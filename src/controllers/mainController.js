const fs = require('fs');
const path = require('path');
//const productsFilePath = path.join(__dirname, '../data/productData.json');
//const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../database/models");
const mainController =
{
    index: async (req, res) => {
        try {
            const productos =await db.Producto.findAll();
            res.render('index', { productos });

        } catch (error) {

        }

    },
    detalleProducto: (req, res) => {
        let idProducto = req.params.id;
        let producto = productos.find(producto => producto.id == idProducto);
        if (producto.imagen2 == '')
            producto.imagen2 = producto.imagen1;
        let miniListado = productos;
        res.render('detalle-producto', { productos, producto });
    },
    ayuda: (req, res) => {
        res.render('ayuda');
    },
    logout: (req, res) => {
        res.clearCookie("cookieEmail")
        req.session.destroy();
        res.redirect('/');
    }




}
module.exports = mainController;