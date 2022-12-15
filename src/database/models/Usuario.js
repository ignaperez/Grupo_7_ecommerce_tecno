module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        telefono: {
            type: dataTypes.STRING
        },
        username: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        activo:{
            type:dataTypes.INTEGER
        },
       
    };
    let config = {
        tableName: 'usuarios',
        timestamps: false,
        underscored: true
    };
    const Usuario = sequelize.define(alias, cols, config)

     Usuario.associate = (models) => {
         Usuario.belongsTo(models.Categoriau, {
             as:"categoria", 
             foreignKey: "categoria_id"
         })
     }

    return Usuario
}