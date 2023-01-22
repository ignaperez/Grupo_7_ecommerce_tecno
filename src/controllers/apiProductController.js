const DB = require('../database/models');

const Op = DB.Sequelize.Op;

module.exports = {

    list: async (req, res) => {

        DB.Producto
            .findAll({ include: [{ association: "categoria" }], where: {activo: 1} })
            .then(productos => {
                 let auriculares = 0;
                 let teclados = 0;
                 let mouse = 0;
                 let joystick = 0;
                 let monitores = 0;
                 let mousepads = 0;
                 for (let i = 0; i < productos.length; i++) {
                     if (productos[i].categoria_id == 1) {
                         auriculares += 1
                     } else if(productos[i].categoria_id == 2) {
                         teclados += 1
                     } else if(productos[i].categoria_id == 3) {
                         mouse += 1
                     } else if(productos[i].categoria_id == 4) {
                         joystick += 1
                     } else if(productos[i].categoria_id == 5) {
                         monitores += 1
                     } else {
                         mousepads += 1}
                } 
            for (let i = 0; i < productos.length; i++) {
                productos[i].setDataValue(
                    "detail",
                 `http://localhost:3001/apiProduct/${productos[i].id}`);
                productos[i].setDataValue(
                    "pathImage_1",
                 `http://localhost:3001/img/users/${productos[i].imagen1}`);
                productos[i].setDataValue(
                    "pathImage_2",
                 `http://localhost:3001/img/users/${productos[i].imagen2}`);
            }  
                let respuesta = {
                     status: 200,
                     count: productos.length,
                     countByCategory: [
                         {
                             categoria: "Auriculares",
                             total: auriculares
                         },
                         {
                            categoria: "Teclados",
                            total: teclados
                         },
                         {
                            categoria: "Mouse",
                            total: mouse
                         },
                         {
                            categoria: "Joystick",
                            total: joystick
                         },
                         {
                            categoria: "Monitores",
                            total: monitores
                         },
                         {
                            categoria: "Mousepads",
                            total: mousepads
                         },
                     ],
                      data: productos,
                 };
                 return res.json(respuesta)
            }).catch((err) => res.json(err))
    },

    show: (req, res) => {
        DB.Producto
            .findByPk(req.params.id,{ include: [{ association: "categoria" }] })
            .then(producto => {
                if(producto)
                producto.setDataValue(
                    "pathImage_1",
                 `http://localhost:3001/img/users/${producto.imagen1}`);
                producto.setDataValue(
                    "pathImage_2",
                 `http://localhost:3001/img/users/${producto.imagen2}`);
                res.json({
                    status: 200,
                    data: producto
                })
            })
    }
}