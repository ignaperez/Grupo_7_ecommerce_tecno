const fs = require('fs');
const path = require('path');
//const productsFilePath = path.join(__dirname, '../data/productData.json');
//const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../database/models");
const op = db.Sequelize.Op;
const nodemailer = require("nodemailer");


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

        const { id } = req.params;
        //let producto = productos.find(producto => producto.id == idProducto);
        try {
            const producto = await db.Producto.finByPk(id);
            const productos = await db.Producto.findAll();
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
                where: { titulo: { [op.like]: "%" + search + "%" } }
            })
            console.log(productos)
            res.render("resultados", { productos })
        } catch (error) {
            console.log(error)
        }
    },
    mandaEmail: (req, res) => {
        let mail = req.body.email;
        let nombre = req.body.nombre;
        let comentarios = req.body.comentarios;
        let emailEnviado= "Su email fue enviado correctamente";

        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
           // let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: "phericsone@gmail.com", // generated ethereal user
                    pass: "rgfcsfjmwzpamtvc", // generated ethereal password gmail rgfcsfjmwzpamtvc
                },
                tls: {
                    rejectUnauthorized: false
                  }
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: mail, // sender address
                to: "phericsone@gmail.com", // list of receivers
                subject: "Hola, nuevo contacto desde la web, de " + nombre, // Subject line
                text: comentarios, // plain text body
                html: "<b>"+comentarios+"</b>", // html body
            });

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }

        main().catch(console.error);
        res.redirect("/")

    }




}
module.exports = mainController;