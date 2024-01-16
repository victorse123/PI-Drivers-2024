/* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";
// import PATHROUTES from "../../helpers/PathRoutes.helper";
// import styles from "./NavBar.module.css";

// const NavBar = ({ onSearch }) => {
//   const addRandomCharacter = () => {
//     const randomId = Math.floor(Math.random() * 508) + 1; // Genera un ID aleatorio entre 1 y 508
//     onSearch(randomId.toString()); // Llama a onSearch con el ID aleatorio como cadena
//   };
//   return (
//     <div className={styles.navBar}>
//       <div className={styles.nav}>
      
//         <Link to={PATHROUTES.HOME}>Home</Link>
//         <Link to={PATHROUTES.ABOUT}>About</Link>
//         <Link to={PATHROUTES.FAVORITES}>Favorites</Link>
//         <button onClick={addRandomCharacter}>Random</button>
//       </div>
//       <div className={styles.search}>
//         <SearchBar onSearch={onSearch} />
//       </div>
//       <div className={styles.cer}>
//       <button>Cerrar Sesión</button>
//       </div>
//     </div>
//   );
// };

// export default NavBar;



// import React from "react";
// import SearchBar from "../SearchBar/SearchBar";
// import { NavLink} from "react-router-dom";
// import styles from "./NavBar.module.css"

// export default function NavBar(props){
// const {onSearch, handlePageChange} = props;


//     return (
//         <div className={styles.container}>
// <NavLink className={styles.navLink} to={"/create"} ><button className={`${styles.button}`}>Create a new driver</button></NavLink>
// <SearchBar className={styles.navLink} onSearch={onSearch} handlePageChange={handlePageChange}  />
//         </div>
//     )
// } 