/* Tiene que tener dos metodos  / endpoints. Uno tiene que devolver la 
cantidad de usuarios en la base de datos y todos los usuarios. ese seria el método list dentro del controllador
y el otro método devuelve un usuario en especifico, pero en este usas el parámetro "id"
 */

const DB = require('../database/models');

const Op = DB.Sequelize.Op;

module.exports = {

    list: (req, res) => {

        DB.Usuario
            .findAll()
            .then(usuarios => {
                return res.json({
                    total: usuarios.length,
                    data: usuarios,
                    status: 200
                })
            })
    },

    show: (req, res) => {
        DB.Usuario
            .findByPk(req.params.id)
            .then(usuario => {
                return res.json({
                    data: usuario,
                    status: 200
                })
            })
    }
}