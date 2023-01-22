/* Tiene que tener dos metodos  / endpoints. Uno tiene que devolver la 
cantidad de usuarios en la base de datos y todos los usuarios. ese seria el método list dentro del controllador
y el otro método devuelve un usuario en especifico, pero en este usas el parámetro "id"
 */

const DB = require('../database/models');

const Op = DB.Sequelize.Op;

module.exports = {

    list: (req, res) => {

        DB.Usuario
            .findAll({ include: [{ association: "categoria" }], where: {activo: 1} }
            )
            .then(usuarios => {
                for (let i = 0; i < usuarios.length; i++) {
                    usuarios[i].setDataValue("detail", `http://localhost:3001/apiUser/${usuarios[i].id}`)
                    usuarios[i].setDataValue("pathImage", `http://localhost:3001/img/users/${usuarios[i].image}`)
                }
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
            usuario.setDataValue("pathImage", `http://localhost:3001/img/users/${usuario.image}`)  
                return res.json({
                    data: usuario,
                    status: 200
                })
            })
    }
}