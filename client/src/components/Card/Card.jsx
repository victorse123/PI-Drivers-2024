/* eslint-disable react/no-unknown-property */
//import React from 'react';
import imageDriverDefault from '..//..//images/F1-3.jpg'
import './Card.css';

function Card({ image, name, lastname, teams  }) {
  //Renderiza una tarjeta que muestra información sobre el driver.....

  return (
    <div className='card'>
      {/* Contenedor de la imagen */}
      <div className='div_image_card'>
        {/* Imagen del driver , si no se proporciona, se muestra una imagen predeterminada */}
        <img className='card_image_driver' src={image ? image : imageDriverDefault} alt={name} />
      </div>
      {/* Contenedor de la información */}
      <div className='div_info_card'>
        {/* Nombre del driver */}
        <span className='card_name_driver'>{name}</span>
        <div>
          {/* Apellido del driver */}
          <span className='card_lastname_driver'>{lastname}</span>
        </div>
        {/* Nombre del teams */}
        <span className='card_teams_driver'>{teams}</span>
        <div></div>
        
      </div>
    </div>
  );
}

export default Card;

