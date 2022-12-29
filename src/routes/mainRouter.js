const fs = require("fs")
const path =require('path');
const express = require('express');
const mainController = require('../controllers/mainController');
const userNotLoggedMiddleware = require("../middlewares/userNotLoggedMiddleware");
const router =express.Router();
const nodemailer = require('nodemailer');
const { sendEmail } = require("../email/email");

//RUTAS
router.get('/',mainController.index); //ruta home
router.get('/ayuda', mainController.ayuda);
router.get('/logout',mainController.logout);//logout Cualquier sesion
router.get('/search', mainController.search)
router.post('/send-email', mainController.mandaEmail)







//Exportamos modulo
module.exports = router;
