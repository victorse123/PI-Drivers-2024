import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/reducer'; // Importa el reducer raíz combinado
import thunk from 'redux-thunk';

// Configura las herramientas de desarrollo Redux y aplica el middleware
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// Crea la tienda Redux con el rootReducer y el middleware thunk
const store = createStore(
  rootReducer, // El rootReducer combina todos los reducers
  composeEnhancers(applyMiddleware(thunk)) // Aplica el middleware thunk
);

export default store; // Exporta la tienda Redux para su uso en la aplicación