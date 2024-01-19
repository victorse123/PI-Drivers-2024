// const { Team } = require("../db");
// const axios = require("axios");
// const dotenv = require("dotenv");
// dotenv.config();

// const URL = process.env.URL_API;
// // Obtener todos los equipos, sincronizando con la API si la base de datos está vacía
// const getAllTeams = async () => {
//   try {
//     // Contar la cantidad de equipos en la base de datos
//    // const teamCount = await Team.count();
// // Si no hay equipos en la base de datos, sincronizar con la API
//     //if (teamCount === 0) {
//       // Obtener equipos desde la API
//       const { data: teamsFromAPI } = await axios.get(`${URL}`);

//       const allTeams = teamsFromAPI.map(driver => driver.teams?.split(",").map(team => team.trim()) ?? []).flat()

//       // Crear registros de equipos en la base de datos utilizando Promise.all
//       await Promise.all(
//         allTeams.map(async (team) => {
//           try {
//             await Team.findOrCreate({ where: { name: team } });
//           } catch (error) {
//             console.error("Error al crear equipo:", error);
//             throw error;
//           }
//         })
//       );

//       const teamresul =  Promise.all(
//         allTeams.map(async (team) => {
//           await Team.findOrCreate({where:{name:team}
            
          
//           });
//         })
//       );
//       // for(let i=0; i<allTeams.length; i++) 
//       // {
//       //   try {
//       //     await Team.findOrCreate({ where: { name: allTeams[i] } });
//       //   } catch (error) {
//       //     console.error("Error al crear equipo:", error);
//       //     throw error;
        
//         // await Team.findOrCreate({where: {name: allTeams[i]}, 
//         // defaults: {}
//       //})
      
   
    
// // Obtener todos los equipos desde la base de datos
//     const teamsBDD = await Team.findAll();

//     return teamsBDD;
//   } catch (error) {
//     console.error("Error al obtener los equipos de la API:",{error: error.message});
//     throw error;
//   }
// };

// module.exports = { getAllTeams };

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
const { Team } = require("../db");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const URL = process.env.URL_API;

// Función para obtener el nombre del equipo, maneja casos donde team.name no es una cadena de texto
const getTeamName = (team) => {
  if (team && team.name) {
    if (typeof team.name === 'string') {
      return team.name;
    } else if (Array.isArray(team.name)) {
      return team.name.join(', ');
    } else if (typeof team.name === 'object') {
      if (team.name.value) {
        return team.name.value;
      } else if (team.name.text) {
        return team.name.text;
      }
    }
  }
  return "Invalid Team Name";
};

// Obtener todos los equipos, sincronizando con la API si la base de datos está vacía
const getAllTeams = async () => {
  try {
    // Obtener equipos desde la API
    const { data: teamsFromAPI } = await axios.get(`${URL}`);

    // Crear array de nombres de equipos, manejando casos donde el nombre es un objeto
    const allTeams = teamsFromAPI.map(driver => {
      if (driver.teams) {
        return getTeamName({ name: driver.teams });
      } else {
        return getTeamName(driver);
      }
    });

    console.log("All Teams from API:", allTeams);

    // Crear registros de equipos en la base de datos utilizando Promise.all
    await Promise.all(
      allTeams.map(async (team) => {
        try {
          await Team.findOrCreate({ where: { name: team } });
        } catch (error) {
          console.error("Error al crear equipo:", error);
          throw error;
        }
      })
    );

    // Obtener todos los equipos desde la base de datos
    const teamsBDD = await Team.findAll();

    console.log("All Teams from Database:", teamsBDD.map(team => team.name));

    return teamsBDD;
  } catch (error) {
    console.error("Error al obtener los equipos de la API:", { error: error.message });
    throw error;
  }
};
    // Obtener todos los equipos desde la base de datos
const teamsBDD = await Team.findAll();

console.log("All Teams from Database:", teamsBDD.map(team => {
  if (team && typeof team === 'object') {
    // Imprimir más información sobre el objeto si es un objeto
    return {
      id: team.id,
      name: team.name,
      toJSON: team.toJSON()
    };
  } else {
    // Imprimir el valor si no es un objeto
    return team;
  }
}));

module.exports = { getAllTeams };