const express = require("express");
const userController = require("../controllers/usersController");
const router = express.Router();


router.get("/login", userController.login);
router.get("/registro", userController.registro)


module.exports = router