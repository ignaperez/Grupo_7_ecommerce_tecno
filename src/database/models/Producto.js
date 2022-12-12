module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING
        },
        categoria: {
            type: dataTypes.INTEGER
        },
        precio: {
            type: dataTypes.DECIMAL(8,0)
        },
        garantia: {
            type: dataTypes.INTEGER
        },
        descripcion1: {
            type: dataTypes.TEXT('tiny')
        },
        descripcion2: {
            type: dataTypes.TEXT('tiny')
        },
        descripcion3: {
            type: dataTypes.TEXT('tiny')
        },
        imagen1: {
            type: dataTypes.STRING
        },
        imagen2: {
            type: dataTypes.STRING
        },
        imagen3: {
            type: dataTypes.STRING
        }
       
    };
    let config = {
        tableName: 'productos',
        timestamps: false
    };
    const Producto = sequelize.define(alias, cols, config)

    return Producto
}