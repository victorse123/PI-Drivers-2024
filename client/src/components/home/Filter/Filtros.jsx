import { useState } from "react";
import FiltroTemperamento from "./FiltroTemperamento";
import FiltroCreado from "./FiltroCreado";
import './Filtros.css';
import icon from '../../../images/Icon Filter.png';

function Filtros({ currentPage, setCurrentPage }) {

  // Estado para controlar la visibilidad de los filtros
  const [open, setOpen] = useState(false);

  // Función para manejar el click en el botón de filtro
  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="filtro">
      {/* Botón para abrir y cerrar los filtros */}
      <div className="div_button_filter">
        <button className="button_filter" onClick={handleClick}>
          <img className="icon_filtro" src={icon} alt="filter" />Filtros
        </button>
      </div>

      {/* Mostrar los filtros si 'open' es verdadero */}
      {open && (
        <div className="div_filtros_relative">
          <div className="div_filtros">
            {/* Filtro por fecha de creación */}
            <div className="div_fil">
              <span className="filtro_name">Creado en</span>
              <FiltroCreado currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>

            {/* Filtro por temperamentos */}
            <div className="div_fil">
              <span className="filtro_name">Temperamentos</span>
              <FiltroTemperamento currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Filtros;