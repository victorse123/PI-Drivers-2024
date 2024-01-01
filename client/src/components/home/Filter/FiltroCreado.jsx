/* eslint-disable no-unused-vars */
import { filterCreated } from "../../../Redux/actions/actions";
import { useDispatch } from 'react-redux';

function FiltroCreado({ currentPage, setCurrentPage }) {
  const dispatch = useDispatch();

  // Función para manejar el cambio en el selector
  function handleSelect(e) {
    const value = e.target.value;
    setCurrentPage(1); // Restablece la página actual a 1 cuando se cambia la selección
    dispatch(filterCreated(value)); // Llama a la acción de filtrar según el valor seleccionado
  }

  // Componente que muestra un selector de opciones
  return (
    <div>
      <select onChange={handleSelect}>
        {/* Opción predeterminada deshabilitada */}
        <option selected disabled>Selecciona uno</option>
        {/* Opciones disponibles */}
        <option value="All">Todos</option>
        <option value="Api">API</option>
        <option value="creados">Base de datos</option>
      </select>
    </div>
  )
}

export default FiltroCreado;