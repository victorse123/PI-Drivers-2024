/* eslint-disable no-fallthrough */
/* eslint-disable no-case-declarations */
/* eslint-disable no-case-declarations */
import {
  GET_DRIVERS,
  GET_DETAILS,
  GET_TEAM,
  DRIVER_POST,
  FILTER_DRIVER,
  FILTER_CREATED,
  DRIVER_WANTED,
  ORDER_BY_NAME,
  ORDER_BY_TEAM,
} from "../actions/actions";

const initialState = {
  drivers: [],
  allDriversFilter: [],
  details: [],
  teams: [],
  driversHome: []
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DRIVERS:
      // Actualiza la lista de drivers y la lista filtrada con todos los drivers
      return {
        ...state,
        drivers: payload,
        allDriversFilter: payload,
        driversHome: payload
      };
    case GET_DETAILS:
      // Actualiza los detalles de un driver específico
      return {
        ...state,
        details: payload
      };
    case DRIVER_POST:
      // Indica que se ha agregado un driver exitosamente
      return {
        ...state
      };
    case GET_TEAM:
      // Actualiza la lista de teams disponibles
      return {
        ...state,
        teams: payload
      };
    case FILTER_DRIVER:
      // Filtra la lista de driver según el team seleccionado
      const allDrivers = state.allDriversFilter;
      const filteredDrivers = payload === 'All' ? allDrivers : allDrivers.filter(e => e.team && e.team.includes(payload));
      return {
        ...state,
        dogs: filteredDrivers
      };
    case FILTER_CREATED:
      // Filtra los drivers creados o no creados en la base de datos
      const allDriversFilter = state.allDriversFilter;
      const createdFilter = payload === 'creados' ? allDriversFilter.filter(d => d.creadoEnDB) : allDriversFilter.filter(d => !d.creadoEnDB);
      return {
        ...state,
        drivers: payload === "All" ? allDriversFilter : createdFilter
      };
    case DRIVER_WANTED:
      // Actualiza la lista de drivers en la página principal
      return {
        ...state,
        driversHome: payload
      };
    case ORDER_BY_NAME:
      // Ordena la lista de drivers por nombre (ascendente o descendente)
      const orderDriversName = payload === 'name_asc' ?
        state.drivers.slice().sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1) :
        state.drivers.slice().sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1);
      return {
        ...state,
        drivers: orderDriversName
      };
    case ORDER_BY_TEAM:
        // Ordena la lista de teams por nombre (ascendente o descendente)
        const orderDriversTeam = payload === 'team_asc' ?
          state.drivers.slice().sort((a, b) => a.team.toLowerCase() < b.team.toLowerCase() ? -1 : 1) :
          state.drivers.slice().sort((a, b) => a.team.toLowerCase() > b.team.toLowerCase() ? -1 : 1);
        return {
          ...state,
          drivers: orderDriversTeam
        };
    
    default:
      return state;
  }
};

export default rootReducer;




