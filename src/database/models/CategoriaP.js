module.exports = (sequelize, dataTypes) => {
    let alias = "Categoriap";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoImcrement: true,
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        tableName: "categorias_productos",
        timestamps: false,
        underscored: true

    }
    const Categoria = sequelize.define(alias, cols, config)

    Categoria.associate = (models) => {
        Categoria.hasMany(models.Producto, {
            as: "productos", 
            foreignKey:"categoria_id"
        })
    }
   
    return Categoria
}