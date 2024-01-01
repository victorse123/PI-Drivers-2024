import { container, leftPanel, midPanel, profileImg, wrapper, subTitleBox, subTitle, title, weightText, mainBtn } from './breedCard.module.css';
import placeholderImg from '../../../images/profileHolder.png'
import { Link } from "react-router-dom";

const BreedCard = ({ breed }) => {
  // Extraer las primeras tres temperamentos o definir 'Gentle' si no hay datos
  let firstTemps = breed.temperament ? breed.temperament.replace(' ', '').split(',') : 'Gentle';

  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={leftPanel}>
          {/* Usar una imagen predeterminada si la URL de la imagen está 'undefined' */}
          <img src={breed.img.includes('undefine') ? placeholderImg : breed.img} alt="" className={profileImg} />
        </div>
        <div className={midPanel}>
          <div className={subTitleBox}>
            {/* Mostrar los primeros tres temperamentos o 'Gentle' */}
            <h5 className={subTitle}>
              {firstTemps === 'Gentle' ?
                'Gentle' :
                `${firstTemps[0]}, ${firstTemps[1]}, ${firstTemps[2]}`
              }
            </h5>
          </div>
          <div>
            {/* Mostrar el nombre de la raza */}
            <h2 className={title}>{breed.name}</h2>
          </div>
          <div>
            {/* Mostrar el peso de la raza */}
            <h2 className={weightText}>({breed.weight}kg.)</h2>
          </div>
          <div>
            {/* Enlace para aprender más sobre la raza, redirige a la página de detalles */}
            <Link to={`/breed/${breed.id}`} className={mainBtn}>LEARN MORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreedCard;