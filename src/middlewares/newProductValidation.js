const path = require("path");
const fs = require("fs")
//const userFilePath = path.join(__dirname, '../data/users.json');
//const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const {body} = require("express-validator");

module.exports = [
    body("titulo").notEmpty().withMessage("Tienes que escribir un nombre"),
    body("precio").notEmpty().withMessage("Tienes que escribir un precio"),
    body("descripcion1").notEmpty().withMessage("Tienes que escribir por lo menos una descripcion"),
    body("imagen1").custom((valor, {req}) => {
        let file = req.files[0];
        let extensions = [".jpg", ".png", ".gif", ".jpeg"];

        if (!file) { throw new Error("Tienes que cargar por lo menos una imágen.")
            
        }else{
            let fileExtension = path.extname(file.originalname);
            if (!extensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${extensions.join(", ")}`)
            }
        }
        return true
    })
]