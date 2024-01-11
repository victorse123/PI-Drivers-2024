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
      // Crear registros de equipos en la base de datos utilizando Promise.all
      await Promise.all(
        teamsFromAPI.map(async (team) => {
          await Team.create({
            id: team.id,
            name: team.name,
          });
        })
      );
    }
// Obtener todos los equipos desde la base de datos
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

// const { Team } = require("../db");: Importa el modelo Team de tu base de datos.

// const axios = require("axios");: Importa la librería Axios para realizar solicitudes HTTP.

// const dotenv = require("dotenv"); dotenv.config();: Importa y configura el módulo dotenv para cargar variables de entorno desde un archivo .env.

// const URL = process.env.URL_API;: Obtiene la URL de la API desde las variables de entorno.

// const getAllTeams = async () => {: Define la función getAllTeams como una función asíncrona.

// const teamCount = await Team.count();: Cuenta la cantidad de equipos en la base de datos.

// if (teamCount === 0) { ... }: Verifica si no hay equipos en la base de datos.

// const { data: teamsFromAPI } = await axios.get(${URL}/teams);: Obtiene los equipos desde la API.

// await Promise.all(...);: Utiliza Promise.all para ejecutar de forma asíncrona la creación de registros de equipos en la base de datos.

// const teamsBDD = await Team.findAll();: Obtiene todos los equipos desde la base de datos después de la sincronización.

// return teamsBDD;: Devuelve los equipos obtenidos desde la base de datos.

// } catch (error) { ... }: Manejo de errores en caso de falla al obtener equipos de la API o al interactuar con la base de datos.