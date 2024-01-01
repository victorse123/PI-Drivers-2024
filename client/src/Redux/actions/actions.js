// Importación de módulos y librerías necesarias
import axios from 'axios';

// Definición de constantes para tipos de acciones
export const GET_DOGS = 'GET_DOGS';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT';
export const DOG_POST = 'DOG_POST';
export const FILTER_DOG = 'FILTER_DOG';
export const FILTER_CREATED = 'FILTER_CREATED';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT';
export const DOG_WANTED = 'DOG_WANTED';

// Función asíncrona para obtener la lista de perros
export const getDogs = () => {
  return async function(dispatch) {
    try {
      let dogs = (await axios("http://localhost:3001/dogs")).data;
      return dispatch({
        type: GET_DOGS,
        payload: dogs
      });
    } catch(error) {
      console.log(error);
    }
  };
};

// Función asíncrona para obtener los detalles de un perro específico
export const getDetail = (id) => {
  return async function(dispatch) {
    try {
      let details = (await axios(`http://localhost:3001/dogs/${id}`)).data;
      return dispatch({
        type: GET_DETAILS,
        payload: details
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// Función asíncrona para crear un nuevo perro
export const dogPost = (payload) => {
  return async function(dispatch) {
    try {
      await axios.post("http://localhost:3001/dogs", payload);
      alert("Perro creado correctamente");
      return dispatch({
        type: DOG_POST
      });
    } catch (error) {
      console.log(error);
      alert("Error al crear el perro");
    }
  };
};

// Función asíncrona para obtener los temperamentos de los perros
export const getTemperament = () => {
  return async function(dispatch) {
    try {
      const temperaments = (await axios.get("http://localhost:3001/temperaments")).data;
      
      
      return dispatch({
        type: GET_TEMPERAMENT,
        payload: temperaments
      });
    } catch (error) {
      console.log(error);
    }
  };
};



// Función asíncrona para buscar perros por raza
export const searchDogs = (raza) => {
  return async function(dispatch) {
    try {
      let dogsWanted = (await axios(`http://localhost:3001/search?name=${raza}`)).data;
      return dispatch({
        type: DOG_WANTED,
        payload: dogsWanted
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// Funciones síncronas para acciones de filtrado y ordenamiento
export const filterDog = (payload) => {
  return {
    type: FILTER_DOG,
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

export const orderByWeight = (payload) => {
  return {
    type: ORDER_BY_WEIGHT,
    payload
  };
};