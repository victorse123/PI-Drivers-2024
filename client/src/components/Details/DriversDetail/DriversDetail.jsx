// // Importar las imágenes y estilos necesarios
// import banner from '../../../images/F1.jpg';
// import './DriversDetail.css';

// // Componente funcional DriverDetail que recibe un objeto 'driver' como prop
// function DriverDetail({ driver }) {

//   return (
//     <div className="driverDetail">
//       {/* Sección izquierda */}
//       <div className="left">
//         <div className="profile">
//           {/* Imagen y nombre del driver */}
//           <div className="div_driver_profile">
//             <img className='card_image_driver' src={image ? image : imageDriverDefault} alt={name} />
//           </div>
//           <div className="div_driver_name">
//             <h2 className="name_driver">{driver?.name}</h2>
//             <span className="sobre_driver">SOBRE MI</span>
//           </div>
//         </div>

//         {/* Tabla de características del driver */}
//         <div className="table_container">
//           <table>
//             <tbody>
//               <tr>
//                 <th className="encabezado_tabla">CARACTERISTICAS</th>
//                 <th className="encabezado_tabla">MIN</th>
//                 <th className="encabezado_tabla">MAX</th>
//               </tr>
//               <tr>
//                 <td className="table_caracteristicas">ALTURA</td>
//                 <td className="table_datos">{driver?.height_min}</td>
//                 <td className="table_datos">{driver?.height_max} Cm</td>
//               </tr>
//               {/* Resto de características */}
//               {/* ... */}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Sección derecha - Banner o imagen */}
//       <div className="right">
//         <div className="div_banner">
//           <img className="banner" src={banner} alt="banner" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DriverDetail;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import { useParams } from "react-router-dom";
import s from "..//Details.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setSearched } from '../..//..//Redux/actions/actions.js';

function Detail() {
  const { id } = useParams();
  const [driver, setDriver] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [nationalityFlag, setNationalityFlag] = useState("")

  const dispatch = useDispatch()

  async function getNationalityFlag(id) {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/drivers/flag/${id}`
        );

        return setNationalityFlag(data)
      } catch (error) {
        console.error(error);
      }
  }
  
  useEffect(() => {
    const fetchDriverData = () => {

      setIsLoading(true)
      
      getNationalityFlag(id)
        .then(() => {
          return axios.get(`http://localhost:3001/drivers/${id}`);
        })
        .then((response) => {
          setDriver(response.data);
          setIsLoading(false)
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false)
        })
    }

    fetchDriverData();
    
    return () => {
      setNationalityFlag("");
    };
  }, [id]);

  const DBteamsToString = () => {

    if (driver.createdInDB === true) {
      return driver.Teams.map((team) => team.name).join(', ');
    }
    
    if (driver.createdInDB === false) {
      return driver.teams
    }
  }

  function handleCloseDetail () {
    dispatch(setSearched(false))
  } 
  
  return (
    <div className={s.MainContainer}>
      <div className={s.DetailContainer}>
        <NavLink to="/home" className={s.closeButton} onClick={handleCloseDetail}>
          X
        </NavLink>
        

        {isLoading
          ? <img className={ s.loadingGIF } src="/loading.gif" alt="loadingGIF" />
          : (
          <>
            <div className={s.leftColumn}>
              <img src={driver?.image} alt={driver?.forename} />
            </div>
            <div className={s.rightColumn}>
              <h2 className={s.driverName}>{`${driver?.forename} ${driver?.surname}`}</h2>
              {nationalityFlag && (
                <img
                  className={s.flag}
                  src={nationalityFlag}
                  alt={driver?.nationality}
                />
              )}
              <span className={s.nationalityName}>{driver.nationality}</span>
              <p className={s.infoTitle}>Nacimiento</p>
              <p>{driver?.dob}</p>
              <p className={s.infoTitle}>Escuderías</p>
              <p>{DBteamsToString()}</p>
              <p className={s.infoTitle}>Información</p>
              <p className={s.driverDescription}>{driver?.description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Detail;