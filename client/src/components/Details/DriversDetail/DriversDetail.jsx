// Importar las imágenes y estilos necesarios
import banner from '../../../images/banner.jpg';
import './DriversDetail.css';

// Componente funcional DogDetail que recibe un objeto 'dog' como prop
function DriverDetail({ driver }) {

  return (
    <div className="driverDetail">
      {/* Sección izquierda */}
      <div className="left">
        <div className="profile">
          {/* Imagen y nombre del perro */}
          <div className="div_driver_profile">
            <img className="image_driver_profile" src={driver?.image} alt="driver" />
          </div>
          <div className="div_driver_name">
            <h2 className="name_driver">{driver?.name}</h2>
            <span className="sobre_driver">SOBRE MI</span>
          </div>
        </div>

        {/* Tabla de características del driver */}
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
                <td className="table_datos">{driver?.height_min}</td>
                <td className="table_datos">{driver?.height_max} Cm</td>
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

export default DriverDetail;