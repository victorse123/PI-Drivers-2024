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

// const { DataTypes } = require("sequelize");: Importa el objeto DataTypes de Sequelize para definir los tipos de datos de los campos en el modelo.

// module.exports = (sequelize) => { ... };: Exporta una función que define el modelo del equipo y toma como parámetro la instancia de Sequelize.

// sequelize.define("Team", { ... }, { timestamps: false });: Define el modelo "Team" con sus atributos y opciones. timestamps: false desactiva la creación automática de campos createdAt y updatedAt.

// id: { ... }: Define el campo id como un entero no nulo, clave primaria y autoincremental.

// name: { ... }: Define el campo name como una cadena de texto no nula.

// { timestamps: false }: Opción que desactiva la creación automática de campos createdAt y updatedAt.