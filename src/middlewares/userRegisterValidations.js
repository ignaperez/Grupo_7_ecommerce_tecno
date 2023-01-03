const path = require("path");
const fs = require("fs")
//const userFilePath = path.join(__dirname, '../data/users.json');
//const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const {body} = require("express-validator");
const db = require('../database/models')
//const op = db.Sequelize.Op;
// const emailsInDB = () => {
//     try {
//         const emailUser = req.body.email
//             db.Usuario.findAll({
//              where: {
//                  email: emailUser
//              }})} catch (error) {
//                 console.log(error);
//              }
// }
// console.log(emailsInDB);
// const emailExiste = async (email)=>{

//     try {
//         const emailBuscado = await db.Usuario.findAll(
//             {
//                 where:{ email: email}
//             }
//         )
//         console.log(emailBuscado)
//     } catch (error) {
        
//     }
// }
module.exports = [
    body("nombre").notEmpty().withMessage("Tienes que escribir un nombre"),
    body("apellido").notEmpty().withMessage("Tienes que escribir un apellido"),
    body("email").notEmpty().withMessage("Tienes que escribir un correo electrónico").bail()
    .isEmail().withMessage("Tienes que escribir un correo válido").bail()
    .custom(async (valor,{req}) => { 
    let emailNuevo = req.body.email;
    // console.log("email por body: " + emailNuevo)           
    const {count, row} = await  db.Usuario.findAndCountAll({
        where:{
            email:emailNuevo
        }
    }) 
   
    if(count>0)
    {
        // console.log(count)
        throw new Error('El email ya esta registrado')
    }
    return true    

       
     }),
    body("telefono").notEmpty().withMessage("Tienes que escribir un telefono"),
    body("username").notEmpty().withMessage("Tienes que escribir un nombre de usuario").bail()
    .custom(async (valor,{req})=>{

        let nombreUsuario = req.body.username;
        const {count,row} = await db.Usuario.findAndCountAll({
            where:{ username:nombreUsuario}
        })
        if(count!=0)
        throw new Error('El usuario ya esta registrado')
    }),

    body("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
    body("image").custom((valor, {req}) => {
        let file = req.file;
        let extensions = [".jpg", ".png", ".gif", ".jpeg"];

        if (!file) { throw new Error("Tienes que cargar una imagen")
            
        }else{
            let fileExtension = path.extname(file.originalname);
            if (!extensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${extensions.join(", ")}`)
            }
        }
        return true
    })
]