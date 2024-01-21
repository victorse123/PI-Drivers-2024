const { Router } = require("express");
const router = Router();
const {
  postDriverHandler,
  getDriversHandler,
  getDetailDriverHandler,
} = require("..//handlers/driversHandlers");

const { getAllTeamsHandler, createTeamHandler } = require("../handlers/teamHandlers");
// Ruta para obtener todos los conductores o conductores por nombre
router.get("/drivers", getDriversHandler);
// Ruta para obtener detalles de un conductor por ID
router.get("/drivers/:id", getDetailDriverHandler);
// Ruta para crear un nuevo conductor
router.post("/drivers", postDriverHandler);
// Ruta para obtener todos los equipos
router.get("/teams", getAllTeamsHandler);

router.post("/teams", createTeamHandler);

module.exports = router;

// const { Router } = require("express");: Importa el objeto Router de Express para definir rutas.

// const router = Router();: Crea una instancia del enrutador de Express.

// const { postDriverHandler, getDriversHandler, getDetailDriverHandler } = require("..//handlers/driversHandlers");: Importa los controladores necesarios para manejar las operaciones relacionadas con los conductores.

// const { getAllTeamsHandler } = require("../handlers/teamHandlers");: Importa el controlador necesario para manejar la obtención de todos los equipos.

// router.get("/drivers", getDriversHandler);: Ruta GET para obtener todos los conductores o conductores por nombre.

// router.get("/drivers/:id", getDetailDriverHandler);: Ruta GET para obtener detalles de un conductor por ID.

// router.post("/drivers", postDriverHandler);: Ruta POST para crear un nuevo conductor.

// router.get("/teams", getAllTeamsHandler);: Ruta GET para obtener todos los equipos.

// module.exports = router;: Exporta el enrutador para que pueda ser utilizado por la aplicación principal.