//import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonCreateDog.css';
import dogButton from '../../../images/Dog1.png';

// Componente que representa un botón para crear un nuevo perro
function ButtonCreateDog() {
  return (
    // Redirige al usuario a la ruta "/new" al hacer clic en el botón
    <Link to="/new" className='button_crear_perro'>
      {/* Texto del botón para crear un perro */}
      <p className='text_button'>Crea un nuevo <span className='text_button_naranja'>perro</span></p>
      {/* Imagen del botón, que muestra una representación visual de un perro */}
      <img className='dog_button_create' src={dogButton} alt="create dog" />
    </Link>
  );
}

export default ButtonCreateDog;