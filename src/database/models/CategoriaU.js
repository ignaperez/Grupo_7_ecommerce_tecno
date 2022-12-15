module.exports = (sequelize, dataTypes) => {
     let alias = "Categoriau";
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
         tableName: "categorias_usuarios",
         timestamps: false,
         underscored: true

     }
     const Categoria = sequelize.define(alias, cols, config)
     
     Categoria.associate = (models) => {
         Categoria.hasMany(models.Usuario, {
             as: "usuarios", 
             foreignKey:"categoria_id"
         })
     }
     return Categoria
 }