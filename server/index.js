// configuracion del servidor y sincronizacion con la base de datos

// Importar el servidor y la conexión a la base de datos
const server = require("./src/server");
const { conn } = require("./src/db.js");

// Importar dotenv para cargar variables de entorno desde un archivo .env
const dotenv = require("dotenv");
dotenv.config();

// Obtener el puerto del entorno o establecerlo en 3001 si no está definido
const PORT = process.env.PORT || 3001;

conn
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));