const DB = require('../database/models');

const Op = DB.Sequelize.Op;

module.exports = {

    list: (req, res) => {

        DB.Producto
            .findAll()
            .then(productos => {
                return res.json({
                    total: productos.length,
                    data: productos,
                    status: 200
                })
            })
    },

    show: (req, res) => {
        DB.Producto
            .findByPk(req.params.id)
            .then(producto => {
                return res.json({
                    data: producto,
                    status: 200
                })
            })
    }
}