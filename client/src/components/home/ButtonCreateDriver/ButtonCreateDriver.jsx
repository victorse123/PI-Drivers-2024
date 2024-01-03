//import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonCreateDriver.css';
import driverButton from '../../../images/Dog1.png';

// Componente que representa un botón para crear un nuevo driver
function ButtonCreateDriver() {
  return (
    // Redirige al usuario a la ruta "/new" al hacer clic en el botón
    <Link to="/new" className='button_crear_driver'>
      {/* Texto del botón para crear un driver */}
      <p className='text_button'>Crea un nuevo <span className='text_button_naranja'>driver</span></p>
      {/* Imagen del botón, que muestra una representación visual de un driver */}
      <img className='driver_button_create' src={driverButton} alt="create driver" />
    </Link>
  );
}

export default ButtonCreateDriver;