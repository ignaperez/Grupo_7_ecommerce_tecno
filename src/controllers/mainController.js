const fs = require('fs');
const path = require('path');
//const productsFilePath = path.join(__dirname, '../data/productData.json');
//const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../database/models");
const op = db.Sequelize.Op;

const mainController =
{
    index: async (req, res) => {
        try {
            const productos = await db.Producto.findAll();
            res.render('index', { productos });

        } catch (error) {
            console.log(error)
        }

    },
    detalleProducto: async (req, res) => {
        
        const {id} = req.params;
        //let producto = productos.find(producto => producto.id == idProducto);
        try {
            const producto = await db.Producto.finByPk(id);
            const productos =await db.Producto.findAll();
            if (producto.imagen2 == '')
            producto.imagen2 = producto.imagen1;
        
        res.render('detalle-producto', { productos, producto });
            
        } catch (error) {
            
        }
        
    },
    ayuda: (req, res) => {
        res.render('ayuda');
    },
    logout: (req, res) => {
        res.clearCookie("cookieEmail")
        req.session.destroy();
        res.redirect('/');
    },
    search: async (req, res) => {
        try {
            let search = req.query.keywords;
             let productos = await db.Producto.findAll({
                 where: {titulo: {[op.like]:"%"+ search +"%"}}
             })
            console.log(productos)    
            res.render("resultados", {productos})    
        } catch (error) {
            console.log(error)
        }
    },
    mandaEmail: (req,res)=>{
        
        res.send('email enviado')
    
    }




}
module.exports = mainController;