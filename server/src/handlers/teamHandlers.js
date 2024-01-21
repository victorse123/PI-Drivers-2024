const { getAllTeams, createTeamController } = require("../controllers/teamController");
// Controlador para obtener todos los equipos
async function getAllTeamsHandler(req, res) {
  try {
    // Obtener todos los equipos utilizando la función getAllTeams del controlador
    const allTeams = await getAllTeams();
    return res.status(200).json(allTeams);
  } catch (error) {
    // Manejar errores y devolver un estado 400 (Bad Request) con un mensaje de error
    return res.status(400).json({ error: error.message });
  }
}

async function createTeamHandler(req, res) {
  try {
    const {name}=req.body
    const response= await createTeamController(name)
    return res.status(200).json(response)
  }
  catch (error) {
    return res.status(400).json({error: error.message});
  }
}

module.exports = {
  getAllTeamsHandler, createTeamHandler
};

// const { getAllTeams } = require("../controllers/teamController");: Importa la función getAllTeams del controlador teamController.

// async function getAllTeamsHandler(req, res) {: Define una función asíncrona llamada getAllTeamsHandler que manejará la solicitud HTTP.

// try { ... }: Inicia un bloque try para manejar operaciones que podrían generar errores.

// const allTeams = await getAllTeams();: Llama a la función getAllTeams para obtener todos los equipos de la base de datos.

// return res.status(200).json(allTeams);: Devuelve los equipos en la respuesta con un estado HTTP 200 (OK).

// } catch (error) { ... }: Captura cualquier error que ocurra dentro del bloque try.

// return res.status(400).json({ error: error.message });: Devuelve un estado HTTP 400 (Bad Request) con un mensaje de error en caso de que ocurra un error.

// module.exports = { getAllTeamsHandler };: Exporta la función getAllTeamsHandler para que pueda ser utilizada en otras partes del código.