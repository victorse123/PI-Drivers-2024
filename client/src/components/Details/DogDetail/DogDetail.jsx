// Importar las imágenes y estilos necesarios
import banner from '../../../images/banner.jpg';
import './DogDetail.css';

// Componente funcional DogDetail que recibe un objeto 'dog' como prop
function DogDetail({ dog }) {

  return (
    <div className="dogDetail">
      {/* Sección izquierda */}
      <div className="left">
        <div className="profile">
          {/* Imagen y nombre del perro */}
          <div className="div_dog_profile">
            <img className="image_dog_profile" src={dog?.image} alt="dog" />
          </div>
          <div className="div_dog_name">
            <h2 className="name_dog">{dog?.name}</h2>
            <span className="sobre_dog">SOBRE MI</span>
          </div>
        </div>

        {/* Tabla de características del perro */}
        <div className="table_container">
          <table>
            <tbody>
              <tr>
                <th className="encabezado_tabla">CARACTERISTICAS</th>
                <th className="encabezado_tabla">MIN</th>
                <th className="encabezado_tabla">MAX</th>
              </tr>
              <tr>
                <td className="table_caracteristicas">ALTURA</td>
                <td className="table_datos">{dog?.height_min}</td>
                <td className="table_datos">{dog?.height_max} Cm</td>
              </tr>
              {/* Resto de características */}
              {/* ... */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sección derecha - Banner o imagen */}
      <div className="right">
        <div className="div_banner">
          <img className="banner" src={banner} alt="banner" />
        </div>
      </div>
    </div>
  )
}

export default DogDetail;