const fs = require("fs");
const path = require("path");
const userFilePath = path.join(__dirname, '../data/users.json');
const productos = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const userController = {
    login:(req,res)=> {
        res.render ('login');

    },
    registro:(req,res)=>{
        res.render ('registro');

    },
}

module.exports = userController