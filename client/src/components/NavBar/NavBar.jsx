/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import PATHROUTES from "../../helpers/PathRoutes.helper";
import styles from "./NavBar.module.css";

const NavBar = ({ onSearch }) => {
  const addRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1; // Genera un ID aleatorio entre 1 y 826
    onSearch(randomId.toString()); // Llama a onSearch con el ID aleatorio como cadena
  };
  return (
    <div className={styles.navBar}>
      <div className={styles.nav}>
      
        <Link to={PATHROUTES.HOME}>Home</Link>
        <Link to={PATHROUTES.ABOUT}>About</Link>
        <Link to={PATHROUTES.FAVORITES}>Favorites</Link>
        <button onClick={addRandomCharacter}>Random</button>
      </div>
      <div className={styles.search}>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className={styles.cer}>
      <button>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default NavBar;