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
      const teams = (await axios.get("http://localhost:3001/teams")).data;
      
      
      return dispatch({
        type: GET_TEAM,
        payload: teams
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

