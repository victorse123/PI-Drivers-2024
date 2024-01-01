//import React from 'react';
import imageDogDefault from '../../../../images/image-dog-default.jpg'
import './Card.css';

function Card({ image, name, temperament, weight_min, weight_max }) {
  // Renderiza una tarjeta que muestra información sobre un perro

  return (
    <div className='card'>
      {/* Contenedor de la imagen */}
      <div className='div_image_card'>
        {/* Imagen del perro, si no se proporciona, se muestra una imagen predeterminada */}
        <img className='card_image_dog' src={image ? image : imageDogDefault} alt={name} />
      </div>
      {/* Contenedor de la información */}
      <div className='div_info_card'>
        {/* Nombre del perro */}
        <span className='card_name_dog'>{name}</span>
        <div>
          {/* Rango de peso del perro */}
          <span className='card_weight_dog'>{weight_min} - {weight_max} KG</span>
        </div>
        <div>
          {/* Temperamento del perro */}
          <p className='card_temperament_dog'>
            {temperament}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;