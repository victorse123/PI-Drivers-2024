import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchDrivers } from "../../../Redux/actions/actions";
import search_icon from "../../../images/Search.png";
import './SearchBar.css';
import { Link } from "react-router-dom";


function SearchBar() {
  const dispatch = useDispatch();
  const [nameDriver, setNameDriver] = useState('');
  const driversHome = useSelector(state => state.driversHome);

  // Función para manejar cambios en el input de búsqueda
  function handleChange(e) {
    const name = e.target.value;
    setNameDriver(name);
    // Realiza la búsqueda solo si hay un nombre escrito
    if (name) {
      dispatch(searchDrivers(name));
    }
  }

  // Función para limpiar el campo de búsqueda
  function onSearch() {
    setNameDriver('');
  }

  return (
    <div className="searchBar_Container">
      {/* Input y botón para la búsqueda */}
      <div className="divInput_SearchBar">
        <div className="div_button_search">
          <img className="searchIcon" src={search_icon} alt="search" />
        </div>
        <input
          className="searchBar"
          type="text"
          placeholder="Buscar"
          onChange={handleChange}
          value={nameDriver}
        />
        {/* Botón para limpiar el campo de búsqueda */}
        <button
          className={nameDriver.length > 0 ? "cleaner active" : "cleaner"}
          onClick={() => onSearch()}
        >
          x
        </button>
      </div>

      {/* Mostrar resultados de la búsqueda */}
      <div className={nameDriver.length !== 0 ? "divSearchBar_Results active" : "divSearchBar_Results"}>
        <div className="div_nameResult">
      
          {nameDriver && driversHome.slice(0, 10).map((d) => (
            <div key={d.id}>
              {/* Enlaces de los resultados de búsqueda */}
              <Link className="results" to={`/home/${d.id}`}>{d.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;