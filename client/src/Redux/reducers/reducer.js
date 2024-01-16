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
      const filteredDrivers = payload === 'All' ? allDrivers : allDrivers.filter(e => e.team.includes(payload));
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
    
    default:
      return state;
  }
};

export default rootReducer;




// import {
//   GET_DRIVERS,
//   GET_BY_NAME,
//   GET_BY_ID,
//   ORDER,
//   GET_TEAMS,
//   CLEAR,
//   ORIGIN,
//   FILTER_TEAM,
//   ADD_FAV,
//   REMOVE_FAV,
// } from "..//actions/actions";

// const initialState = {
//   allDrivers: [],
//   allDriversCopy: [],
//   allTeams: [],
//   driversByName: [],
//   driverById: {},
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_DRIVERS:
//       return {
//         ...state,
//         allDrivers: action.payload,
//         allDriversCopy: action.payload,
//       };

//     case GET_BY_NAME:
//       return {
//         ...state,
//         driversByName: action.payload,
//         allDriversCopy: action.payload,
//       };

//     case GET_BY_ID:
//       return { ...state, driverById: action.payload };

//     case ORDER:
//       let driversOrdenados;
//       if (action.payload === "A") {
//         driversOrdenados = state.allDriversCopy
//           .slice()
//           .sort((a, b) => a.name.localeCompare(b.name));
//       } else if (action.payload === "B") {
//         driversOrdenados = state.allDriversCopy
//           .slice()
//           .sort((a, b) => b.name.localeCompare(a.name));
//       } else if (action.payload === "A2") {
//         driversOrdenados = state.allDriversCopy
//           .slice()
//           .sort((a, b) => new Date(a.dob) - new Date(b.dob));
//       } else if (action.payload === "B2") {
//         driversOrdenados = state.allDriversCopy
//           .slice()
//           .sort((a, b) => new Date(b.dob) - new Date(a.dob));
//       } else {
//         driversOrdenados = state.allDriversCopy.slice();
//       }
//       return {
//         ...state,
//         allDriversCopy: driversOrdenados,
//       };

//     case ORIGIN:
//       if (action.payload === "API") {
//         let originSelectedAPI = state.allDrivers.filter(
//           (driver) => driver.source === "API"
//         );
//         return { ...state, allDriversCopy: originSelectedAPI };
//       } else if (action.payload === "BDD") {
//         let originSelectedBDD = state.allDrivers.filter(
//           (driver) => driver.source === "BDD"
//         );
//         return { ...state, allDriversCopy: originSelectedBDD };
//       }

//     case GET_TEAMS:
//       return {
//         ...state,
//         allTeams: action.payload,
//       };

//     case CLEAR:
//       return {
//         ...state,
//         allDriversCopy: state.allDrivers,
//       };

//     case FILTER_TEAM:
//       let matches = state.allDriversCopy.filter((driver) => {
//         if (driver.teams) {
//           const teamsArray = driver.teams.split(",").map((team) => team.trim());
//           return teamsArray.includes(action.payload);
//         }
//       });
//       return {
//         ...state,
//         allDriversCopy: matches,
//       };

//     case ADD_FAV:
//       return {
//         ...state,
//         myFavorites: action.payload,
//         allDriversCopy: action.payload,
//       };

//     case REMOVE_FAV:
//       return { ...state, myFavorites: action.payload };

//     // case ORDER_BY_NAME:
//     //   return {
//     //     ...state,
//     //     alphabeticalOrder: action.payload,
//     //   };

//     // case ORDER_BY_DOB:
//     //   return {
//     //     ...state,
//     //     dobOrder: action.payload,
//     //   };

//     default:
//       return state;
//   }
// };

// export default rootReducer;