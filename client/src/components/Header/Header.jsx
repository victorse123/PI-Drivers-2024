import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import './Header.css';
import menu from '../../images/Menu.png';

function Header() {
  // Estado para controlar la visibilidad del menú
  const [menuHo, setMenuHo] = useState(false);

  // Función para alternar la visibilidad del menú
  function handleClick() {
    setMenuHo(!menuHo);
  }
  return (
    <div className="header">
      <div className="header_cont">
        {/* Encabezado para la versión responsive */}
        <div className='div_responsive_header'>
          <Link to="/home" className="logo"><h1 className="logo">DOGS</h1></Link>
          <button className='button_header_menu' onClick={handleClick}>
            <img className='menu' src={menu} alt="menu" />
          </button>
        </div>
        {/* Menú oculto para la versión responsive */}
        <div className={menuHo ? "menu_hiden active" : "menu_hiden"}>
          {/* Enlace a tu perfil de GitHub */}
          <a href="https://github.com/victorse123" target="_balck" className="about_responsive">GitHub</a>
        </div>

        {/* Menú de navegación principal */}
        <div className="nav">
          {/* Enlace a tu perfil de GitHub */}
          <a href="https://github.com/victorse123" target="_balck" className="about">GitHub</a>
          {/* Componente de barra de búsqueda */}
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Header;