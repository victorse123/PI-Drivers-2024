const { Team } = require("../db");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const URL = process.env.URL_API;
// Obtener todos los equipos, sincronizando con la API si la base de datos está vacía

const createTeamController = async (name) => {
  try {
    const newteam = await Team.create({name})
    return newteam;
  } catch (error) {
    console.error(error.message)
  }
}

const getAllTeams = async () => {
  try {
    // Contar la cantidad de equipos en la base de datos
   
      // Obtener equipos desde la API
      const { data } = await axios.get(URL);
      
      let arrayTeams = []
    
      data.map((driver) => {
        let newTeams = driver.teams ? driver.teams : null
        if (newTeams)
        arrayTeams = [...arrayTeams, ...newTeams.trim().split(/,| y /) || [] ]
      })
     const setTeams  = new Set (arrayTeams)
      arrayTeams = Array.from(setTeams)

      
    
// // Obtener todos los equipos desde la base de datos
    const teamsBDD = await Team.findAll();

    return arrayTeams;
  } catch (error) {
    console.error("Error al obtener los equipos de la API:",{error: error.message});
    throw error;
  }
};

module.exports = { getAllTeams, createTeamController };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const { Team } = require("../db");
// const axios = require("axios");
// const dotenv = require("dotenv");
// dotenv.config();

// const URL = process.env.URL_API;

// // Función para obtener el nombre del equipo, maneja casos donde team.name no es una cadena de texto
// const getTeamName = (team) => {
//   console.log("Team Object:", team);

//   if (team && team.name) {
//     let teamName = team.name;

//     // Si teamName es un objeto, intenta obtener el nombre de nuevo
//     if (typeof teamName === 'object') {
//       // Verifica si el objeto tiene una propiedad 'name'
//       if (teamName.name) {
//         teamName = teamName.name;
//       } else {
//         // Si no tiene 'name', convierte el objeto a cadena
//         teamName = JSON.stringify(teamName);
//       }
//     }

//     // Ahora, teamName debería ser una cadena de texto o un array
//     if (typeof teamName === 'string') {
//       return teamName;
//     } else if (Array.isArray(teamName)) {
//       return teamName.join(', ');
//     }
//   }

//   return "Invalid Team Name";
// };

// // Obtener todos los equipos, sincronizando con la API si la base de datos está vacía
// const getAllTeams = async () => {
//   try {
//     // Obtener equipos desde la API
//     const { data: teamsFromAPI } = await axios.get(`${URL}`);

//     // Crear array de nombres de equipos, manejando casos donde el nombre es un objeto
//     const allTeams = teamsFromAPI.map(driver => {
//       if (driver.teams) {
//         return getTeamName({ name: driver.teams });
//       } else {
//         return getTeamName(driver);
//       }
//     });

//     console.log("All Teams from API:", allTeams);

//     // Crear registros de equipos en la base de datos utilizando Promise.all
//     await Promise.all(
//       allTeams.map(async (team) => {
//         try {
//           await Team.findOrCreate({ where: { name: team } });
//         } catch (error) {
//           console.error("Error al crear equipo:", error);
//           throw error;
//         }
//       })
//     );

//     // Obtener todos los equipos desde la base de datos
//     const teamsBDD = await Team.findAll();

//     console.log("All Teams from Database:", teamsBDD.map(team => team.name));
//     teamsBDD.forEach(team => {
//       console.log("Team Name: ", team.name);
//       console.log("Team ID: ", team.id);
//       // ... otras propiedades del equipo que desees mostrar
//   });
  
  
//     return teamsBDD;
//   } catch (error) {
//     console.error("Error al obtener los equipos de la API:", { error: error.message });
//     throw error;
//   }
// };

// module.exports = { getAllTeams };