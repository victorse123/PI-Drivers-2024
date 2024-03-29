/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchDrivers } from "..//..//Redux/actions/actions.js";
import search_icon from "..//..//images/icons/Search.png";
import './SearchBar.css';
import { Link } from "react-router-dom";


function SearchBar() {
  const dispatch = useDispatch();
  const [nameDriver, setNameDriver] = useState('');
  const driversHome = useSelector(state => state.driversHome);

  // Función para manejar cambios en el input de búsqueda
  function handleChange(e) {
    e.preventDefault()
    setNameDriver(e.target.value);
    // Realiza la búsqueda solo si hay un nombre escrito
    
  }

  // Función para limpiar el campo de búsqueda
  function onSearch(e) {
    e.preventDefault()
    if (nameDriver) {
      dispatch(searchDrivers(nameDriver));
    }
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
          onClick={(e) => onSearch(e)}
        >
          Search
        </button>
      </div>

      {/* Mostrar resultados de la búsqueda */}
      {/* <div className={nameDriver.length !== 0 ? "divSearchBar_Results active" : "divSearchBar_Results"}>
        <div className="div_nameResult">
      
          {nameDriver && driversHome.slice(0, 10).map((d) => (
            <div key={d.id}> */}
              {/* Enlaces de los resultados de búsqueda */}
              {/* <Link className="results" to={`/home/${d.id}`}>{d.name}</Link>
            </div> */}
          {/* ))} */}
        {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default SearchBar;


// import React from "react";
// import { useState } from "react";
// import styles from "..//SearchBar/SearchBar.css"



// export default function SearchBar(props){
//    const { handlePageChange, onSearch} = props; 
// const [name, setName] = useState("");


// const handleChange = (event) => {
// setName(event.target.value)
// handlePageChange(1)
// }

//   const clearInput = () => {
//     setName('');
//   };

// return (
//     <div className={`${styles.inputWrapper} ${styles.inputWrapper}`}>
//     <div  className={`${styles.inputContainer} ${styles.inputContainer}`}>
//       <input
//        className={`${styles.inputBox} ${styles.inputBox}`} 
//         onChange={handleChange}
//         type="text"
//         placeholder="Driver's name..."
//         value={name}
//       />
//       {name && (
//         <div className={styles.clearButton} onClick={clearInput}>
//           ✕
//         </div>
//       )}
//     </div>
//     <button className={styles.button} onClick={() => onSearch(name)}>
//       Search
//     </button>
//   </div>
// )
// }