const fs = require("fs");
const path = require("path");
const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
/* const productos = JSON.parse(fs.readFileSync(userFilePath, 'utf-8')); */
 const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/img/users");
    },
    
    filename: (req, file, cb) => {
        cb = (null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
})

var upload = multer({storage: storage}); 

const userController = {
    login:(req,res)=> {
        res.render ('login');

    },

    registro:(req,res)=>{
        res.render ('registro');

    },

    logicRegister:(req,res) => {
        console.log(req.files[0])
        
        let newUser = {
            id : users[users.length - 1].id + 1,
            're-password': null,
            ...req.body,
            categoria: "user",
        }
        users.push(newUser);
        fs.writeFileSync(userFilePath, JSON.stringify(users,null,''));
        res.redirect('/');
    }
}

module.exports = userController;