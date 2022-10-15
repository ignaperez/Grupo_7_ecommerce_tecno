const fs = require("fs");
const path = require("path");
const userFilePath = path.join(__dirname, '../data/users.json');
const productos = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/img/users");
    },
    
    filename: (req, file, cb) => {
        cb = (null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
})

var upload = multer({storage});
const userController = {
    login:(req,res)=> {
        res.render ('login');

    },
    registro:(req,res)=>{
        res.render ('registro');

    },
}

module.exports = userController