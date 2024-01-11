// const { Team } = require("../db");
// //const URL = "http://localhost:5000/drivers";
// const axios = require("axios");
// const dotenv = require("dotenv");
// dotenv.config();

// const URL = process.env.URL_API;

// const getAllTeams = async () => {
//   const teamCount = await Team.count();
//   if (teamCount === 0) {
//     try { 
//       const { data:teamsFromAPI } = await axios.get(`${URL}/teams`);
//         await Promise.all(
//           teamsFromAPI.map(async (team) => {
//             await Team.create({
//               id: team.id,
//               name: team.name,
//             });
//           })
//         );
//     const teamsApi = [];
//     data.forEach((driver) => {
//       if (driver && driver.teams) {
//         //hay 508 drivers y hay 4 que no tienen la propiedad "teams"
//         if (!driver.teams.includes(",")) {
//           teamsApi.push(driver.teams);
//         } else {
//           const teamsArray = driver.teams.split(",").map((team) => team.trim());
//           teamsApi.push(...teamsArray);
//         }
//       }
//     });
//     // Remover duplicados si es necesario
//     const uniqueTeams = [...new Set(teamsApi)];
//     // Crea instancias de Team
//     for (const team of uniqueTeams) {
//       await Team.create({
//         name: team,
//       });
//     }
//   }
//      catch (error) { 
//      console.error("Error al obtener lso equipos de la API:", error);
//      throw error;
//      }
// } else {
//   return await Team.findAll();
// }
  
// };

// module.exports = { getAllTeams };


const { Team } = require("../db");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const URL = process.env.URL_API;
// Obtener todos los equipos, sincronizando con la API si la base de datos está vacía
const getAllTeams = async () => {
  try {
    // Contar la cantidad de equipos en la base de datos
    const teamCount = await Team.count();
// Si no hay equipos en la base de datos, sincronizar con la API
    if (teamCount === 0) {
      // Obtener equipos desde la API
      const { data: teamsFromAPI } = await axios.get(`${URL}/teams`);
      await Promise.all(
        teamsFromAPI.map(async (team) => {
          await Team.create({
            id: team.id,
            name: team.name,
          });
        })
      );
    }

    const teamsBDD = await Team.findAll();
    return teamsBDD;
  } catch (error) {
    console.error("Error al obtener los equipos de la API:", error);
    throw error;
  }
};

module.exports = { getAllTeams };


//Este controlador se encarga de obtener todos los equipos de la base de datos local y, en caso de que no haya equipos, los recopila de la API externa y los guarda en la base de datos local. Veamos algunos puntos relevantes:

//Método getAllTeams:
//Verifica si hay equipos en la base de datos local.
//Si no hay equipos, realiza una solicitud a la API externa para obtener datos de conductores.
//Filtra y procesa la información obtenida de la API, extrayendo los equipos de los conductores.
//Elimina duplicados y crea instancias de Team en la base de datos local.