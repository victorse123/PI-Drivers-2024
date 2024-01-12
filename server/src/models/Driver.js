const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Driver",
    {
      // ID del conductor, generado automáticamente como UUID
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,

        defaultValue: DataTypes.UUIDV4,
      },
      // Nombre del conductor, tipo cadena de texto, no nulo
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Apellido del conductor, tipo cadena de texto, no nulo
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Descripción del conductor, tipo cadena de texto, no nulo
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // URL de la imagen del conductor, tipo cadena de texto con límite de 500 caracteres, valor por defecto vacío
      image: {
        type: DataTypes.STRING(500),
        defaultValue: "",
      },
      // Nacionalidad del conductor, tipo cadena de texto
      nationality: {
        type: DataTypes.STRING,
      },
      // Fecha de nacimiento del conductor, tipo fecha, no nulo
      dob: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    { timestamps: false } // Desactiva la creación automática de campos createdAt y updatedAt
  );
};

/* 📍 MODELO 1 | Drivers

ID (deben ser distintos a los que vienen de la API). *
Nombre. *
Apellido. *
Descripción. *
Imagen. *
Nacionalidad. *
Fecha de Nacimiento. *



*/

// const { DataTypes } = require("sequelize");: Importa el objeto DataTypes de Sequelize para definir los tipos de datos de los campos en el modelo.

// module.exports = (sequelize) => { ... };: Exporta una función que define el modelo del conductor y toma como parámetro la instancia de Sequelize.

// sequelize.define("Driver", { ... }, { timestamps: false });: Define el modelo "Driver" con sus atributos y opciones. timestamps: false desactiva la creación automática de campos createdAt y updatedAt.

// id: { ... }: Define el campo id como un UUID no nulo y con un valor predeterminado generado automáticamente.

// name: { ... }: Define el campo name como una cadena de texto no nula.

// lastname: { ... }: Define el campo lastname como una cadena de texto no nula.

// description: { ... }: Define el campo description como una cadena de texto no nula.

// image: { ... }: Define el campo image como una cadena de texto con un límite de 500 caracteres y un valor predeterminado vacío.

// nationality: { ... }: Define el campo nationality como una cadena de texto.

// dob: { ... }: Define el campo dob como una fecha no nula.

// { timestamps: false }: Opción que desactiva la creación automática de campos createdAt y updatedAt.