const fs = require("fs");
const path = require("path");
const multer = require("multer");
const db = require('../database/models');
const op = db.Sequelize.Op;
const { DefaultDeserializer } = require("v8");
const { validationResult } = require("express-validator")


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/img/productos");
    },
    
    filename: (req, file, cb) => {
        cb = (null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
})

var upload = multer({storage});

//const productsFilePath = path.join(__dirname, '../data/productData.json');
//const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const productController = {
    carrito:(req,res)=>
    {
        res.render ('carrito');

    },
    detalleProducto: async (req,res)=>
    {
        try {
            let idProducto= req.params.id;
        const producto = await db.Producto.findByPk(idProducto, {include: [{association:"categoria"}]}); 
        //{include: [{association:"categoria"}]} / include para usar la asociación entre categoria y producto
        const productos = await db.Producto.findAll();  
        //let producto = productos.find(producto => producto.id == idProducto);
        if (producto.imagen2 == '')
        producto.imagen2=producto.imagen1;
        res.render('detalle-producto',{productos, producto});
            
        } catch (error) {
            console.log(error)
        } 

        
    },
    newProduct: (req,res) => {
        res.render('newProduct')
    },
    editProduct: async (req, res) => {
        
        ///let productoAEditar = productos.find(producto => producto.id == id);
       try {
            let {id} = req.params
             const producto = await db.Producto.findByPk(id)
             console.log(id)
          res.render("editProduct",{producto});
       } catch (error) {
        
       }
        
    },
    editar: async (req, res) => {
        let {id} = req.params;
        
        try {
            //let productoAEditar = productos.find(producto => producto.id == id)
            let product = await db.Producto.findByPk(id)
            let imagen 
            (req.files[0] != undefined)
                ? imagen = req.files[0].filename
                : imagen = product.imagen1
           const productoAEditar = {
                ...req.body,
                imagen1: imagen,
            } 
            // let nuevoProducto = productos.map(producto => {
            //     if(producto.id == productoAEditar.id) {
            //         return producto = {...productoAEditar};
            //     }

           //     return producto
           // })
          //  fs.writeFileSync(productsFilePath, JSON.stringify(nuevoProducto, null, " "));
            await db.Producto.update(productoAEditar,{where:{id}})
            res.redirect("/product/dashboard")
        }  
        catch (error) {
            res.render(error)
        }
       
    },
    create: async (req,res)=>{
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0) {
            return res.render("newProduct", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } else {
        try {
            
        let image
        (req.files[0] != undefined) 
            ? image = req.files[0].filename 
            : image = "logo-img.png"
        let image2 
        (req.files[1] != undefined) 
            ? image2 = req.files[1].filename 
            : image2 = "logo-img.png"
        let image3
        (req.files[2] != undefined) 
            ? image3 = req.files[2].filename 
            : image3 = "logo-img.png" 
        
        let newProduct = {
			...req.body,
            imagen1: image,
            imagen2: image2,
            imagen3: image3
		};
		await db.Producto.create(newProduct)
		//fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '));
		//res.redirect('/');
        res.redirect('/product/dashboard');
            
        } catch (error) {
            
        }
        }
    },
    dashboard: async  (req, res) => {
        try {
            
            let productos1 = await db.Producto.findAll(
                {
                    where:{activo:1}
                }
            );
        res.render("admin-producto", {productos: productos1})
            
        } catch (error) {
            
        }
        
    },
    // borrar: (req, res) => {
    //     let id = req.params.id;
    //     let nuevosProductos = productos.filter(producto => producto.id != id);
    //     let productosFinales = nuevosProductos.map(producto => {
    //         if(producto.id > id){
    //             producto.id = producto.id - 1;
    //         }
    //         return producto
    //     })
       
    //     fs.writeFileSync(productsFilePath, JSON.stringify(productosFinales, null, " "))
    //     res.render("/product/dashboard");
    // },
    searchAdmin: async (req, res) => {
        let search = req.query.keywords;
        try {
            //let productoABuscar = productos.filter(producto => producto.titulo.toLowerCase().includes(search));
            let productos = await db.Producto.findAll({
                    where: {titulo: {[op.like]:"%"+ search +"%"}}
                })
                console.log(productos)
            res.render("admin-producto", {productos})    
        } catch (error) {
            
        }
        
       /*  await MyDataSequelizeAccess.findAll({
            where: {
              name: {
                $like: `%Bob%`
              }
            }
          }); */


    },
    borrar: async (req, res) => {

        const { id } = req.params;
        // console.log("este es el id: " + id)


        try {

            await db.Producto.update(
                { activo: 0 }, { where: { id } }
            )
            console.log("deberia estar en 0")
            res.redirect('/product/dashboard')

        } catch (error) {
            res.render(error)
        }

    },
}
module.exports = productController;
