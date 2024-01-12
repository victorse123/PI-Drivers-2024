const { getAllTeams } = require("../controllers/teamController");
// Controlador para obtener todos los equipos
async function getAllTeamsHandler(req, res) {
  try {
    // Obtener todos los equipos utilizando la función getAllTeams del controlador
    const allTeams = await getAllTeams();
    return res.status(200).json(allTeams);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getAllTeamsHandler,
};