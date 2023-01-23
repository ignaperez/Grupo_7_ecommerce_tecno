const path = require("path");
const fs = require("fs")
const {body} = require("express-validator");
const db = require('../database/models')

module.exports = [
    body("nombre").notEmpty().withMessage("Tienes que escribir un nombre"),
    body("apellido").notEmpty().withMessage("Tienes que escribir un apellido"),
    body("email").notEmpty().withMessage("Tienes que escribir un correo electrónico").bail()
    .isEmail().withMessage("Tienes que escribir un correo válido").bail(),
    body("telefono").notEmpty().withMessage("Tienes que escribir un telefono")
]