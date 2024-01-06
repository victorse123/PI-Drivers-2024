// Importaciones necesarias
//import React from 'react';
import Header from '../Header/Header';
import Form from './Form/Form';
import Footer from '../Footer/Footer';
import './NewDriver.module.css'; // Estilos del componente

function NewDriver() {
  // Estructura del componente NewDriver
  return (
    <div className='new_driver'> {/* Contenedor principal */}
      <Header /> {/* Componente del encabezado */}
      <Form /> {/* Componente del formulario */}
      <Footer /> {/* Componente del pie de página */}
    </div>
  );
}

export default NewDriver; // Exportación del componente NewDog