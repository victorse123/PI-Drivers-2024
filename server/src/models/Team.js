const { DataTypes } = require("sequelize");
// Exportamos una función que define el modelo del equipo
module.exports = (sequelize) => {
  // Definimos el modelo "Team"
  sequelize.define(
    "Team",
    {
      // ID del equipo, tipo entero, no nulo, clave primaria, autoincremental
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // Nombre del equipo, tipo cadena de texto, no nulo
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false } // Desactiva la creación automática de campos createdAt y updatedAt
    
  );
};