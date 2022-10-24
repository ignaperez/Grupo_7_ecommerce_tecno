const express = require("express");
const userController = require("../controllers/usersController");
const router = express.Router();
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'public/img/users');
    },
    
    filename: (req, file, cb) => {
        cb = (null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
})

var upload = multer({storage: storage});


router.get("/login", userController.login);

router.get("/registro", userController.registro)
router.post("/registro", upload.any(), userController.logicRegister)


module.exports = router;

