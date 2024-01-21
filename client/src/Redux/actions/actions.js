// Importación de módulos y librerías necesarias
import axios from 'axios';

// Definición de constantes para tipos de acciones
export const GET_DRIVERS = 'GET_DRIVERS';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_TEAM = 'GET_TEAM';
export const DRIVER_POST = 'DRIVER_POST';
export const FILTER_DRIVER = 'FILTER_DRIVER';
export const FILTER_CREATED = 'FILTER_CREATED';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_TEAM =  'ORDER_BY_TEAM';
export const DRIVER_WANTED = 'DRIVER_WANTED';

// Función asíncrona para obtener la lista de perros
export const getDrivers = () => {
  return async function(dispatch) {
    try {
      let drivers = (await axios("http://localhost:3001/drivers")).data;
      return dispatch({
        type: GET_DRIVERS,
        payload: drivers
      });
    } catch(error) {
      console.log(error);
    }
  };
};

// Función asíncrona para obtener los detalles de un driver específico
export const getDetail = (id) => {
  return async function(dispatch) {
    try {
      let details = (await axios(`http://localhost:3001/drivers/${id}`)).data;
      return dispatch({
        type: GET_DETAILS,
        payload: details
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// Función asíncrona para crear un nuevo driver
export const driverPost = (payload) => {
  return async function(dispatch) {
    try {
      await axios.post("http://localhost:3001/drivers", payload);
      alert("Driver creado correctamente");
      return dispatch({
        type: DRIVER_POST
      });
    } catch (error) {
      console.log(error);
      alert("Error al crear el driver");
    }
  };
};

// Función asíncrona para obtener los team de los drivers
export const getTeam = () => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get("http://localhost:3001/teams");
      
      console.log(data)
      return dispatch({
        type: GET_TEAM,
        payload: data
      });
      
    } catch (error) {
      console.log(error);
    }
  };
};



// Función asíncrona para buscar drivers 
export const searchDrivers = (team) => {
  return async function(dispatch) {
    try {
      let driversWanted = (await axios(`http://localhost:3001/search?name=${team}`)).data;
      return dispatch({
        type: DRIVER_WANTED,
        payload: driversWanted
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// Funciones síncronas para acciones de filtrado y ordenamiento
export const filterDriver = (payload) => {
  return {
    type: FILTER_DRIVER,
    payload
  };
};

export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload
  };
};

export const orderByTeam = (payload) => {
  return {
    type: ORDER_BY_TEAM,
    payload
  };
};





// import axios from "axios";
// export const GET_DRIVERS = "GET_DRIVERS";
// export const GET_BY_NAME = "GET_BY_NAME";
// export const GET_BY_ID = "GET_BY_ID";
// export const ORDER_BY_DOB = "ORDER_BY_DOB";
// export const ORDER_BY_NAME = "ORDER_BY_NAME";
// export const FILTER_TEAM = "FILTER_TEAM";
// export const ORDER = "ORDER";
// export const GET_TEAMS = "GET_TEAMS";
// export const CLEAR = "CLEAR";
// export const ORIGIN = "ORIGIN";
// export const ADD_FAV = "ADD_FAV";
// export const REMOVE_FAV = "REMOVE_FAV";
// const URL = import.meta.env;

// export const getDrivers = () => {
//   const endpoint = `${URL}/drivers`;
//   return async (dispatch) => {
//     try {
//       const { data } = await axios(endpoint);
//       return dispatch({
//         type: GET_DRIVERS,
//         payload: data,
//       });
//     } catch (error) {
//       console.log({ error: error.message });
//     }
//   };
// };

// export const getDriverByName = (name) => {
//   const endpoint = `${URL}/drivers?name=${name}`;
//   return async (dispatch) => {
//     try {
//       const { data } = await axios(endpoint);
//       return dispatch({
//         type: GET_BY_NAME,
//         payload: data,
//       });
//     } catch (error) {
//       alert("Oh, oh... Driver not found!");
//     }
//   };
// };

// export const getDriverByID = (id) => {
//   return async (dispatch) => {
//     try {
//       const endpoint = `${URL}/drivers/${id}`;

//       const response = await axios.get(endpoint);

//       const data = response.data;
//       return dispatch({
//         type: GET_BY_ID,
//         payload: data,
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

// export const order = (order) => {
//   return {
//     type: ORDER,
//     payload: order,
//   };
// };

// export const filterByTeam = (team) => {
//   return {
//     type: FILTER_TEAM,
//     payload: team,
//   };
// };

// export const getTeams = () => {
//   //const endpoint = "http://localhost:3001/teams";
//   const endpoint = `${URL}/teams`;
//   return async (dispatch) => {
//     try {
//       const { data } = await axios(endpoint);
//       return dispatch({
//         type: GET_TEAMS,
//         payload: data,
//       });
//     } catch (error) {
//       console.log({ error: error.message });
//     }
//   };
// };

// export const filterOrigin = (origin) => {
//   return {
//     type: ORIGIN,
//     payload: origin,
//   };
// };

// export const clearFilters = () => {
//   return {
//     type: CLEAR,
//   };
// };