/* eslint-disable no-unused-vars */
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Header from '../Header/Header';
// import DriverDetail from './DriversDetail/DriversDetail';
// import { GET_DETAILS, getDetail } from '../../Redux/actions/actions';
// import Footer from '../Footer/Footer';
// import './Details.css';

// function Details(props) {
//   // Obtiene el dispatch de Redux
//   const dispatch = useDispatch();

//   // Obtiene la información del estado utilizando useSelector
//   const driver = useSelector(state => state.details);

//   // Obtiene el ID de los parámetros de la URL
//   const id = props.match.params.id;

//   // Dispara la acción para obtener detalles del perro al montar o actualizar el componente
//   useEffect(() => {

//     dispatch(getDetail(id))
//     return () => {
//       dispatch({
//         type: GET_DETAILS,
//         payload: []
//       })
//     }
//   }, [dispatch, id])

//   return (
//     <div className='details_component'>
//       {/* Componente del encabezado */}
//       <Header />

//       {/* Componente de detalles del driver */}
//       {/* Pasa el driver específico del estado al componente DriverDetail */}
//       <DriverDetail driver={driver[0]} />

//       {/* Componente del pie de página */}
//       <Footer />
//     </div>
//   )
// }

// export default Details;



import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from "..//Details/Details.css";
import defaultImage from '..//..//images/f1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getDriverByID } from '../../redux/actions';
import style from "../Cards/cards.module.css"

const Detail = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState({}); // Modificación 1
  const dispatch = useDispatch();
  const driverById = useSelector((state) => state.driverById);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getDriverByID(id));
      
      } catch (error) {
     console.log(error.message)
       
      }
    };
    fetchData();
  }, [dispatch, id]);

  useEffect(() => {
    setDriver(driverById);
  }, [driverById]);

  let content;

  if (driver.name !== undefined && driver.name !== "") { 
    content = (
      <div className={styles.imageAndDescription}>
        <img src={driver.image === "" ? defaultImage : driver.image} alt={`Image of ${driver.name}`} />
        <div className={styles.card}>
          <h1>{driver.name} {driver.surname || driver.lastname}</h1>
          <p className={styles.title}>ID: </p> <p>{driver.id}</p>
          <p className={styles.title}>Nationality:</p> <p>{driver.nationality}</p>
              <p className={styles.title}>Date of birth:</p><p>{driver.dob.split('T')[0]}</p>

          <p className={styles.title}>Description:</p><p>{driver.description}</p>
          <p className={styles.title}>Teams:</p> <p> {Array.isArray(driver.teams) ? driver.teams.join(', ') : driver.teams}</p>
        </div>
        <Link to={`/home`}>
          <button className={style.button}>Back</button>
        </Link>
      </div>
    );
  } else {
    content = <p>No data found for the driver.</p>;
  }

  return (
    <>
      {content}
    </>
  );
};

export default Detail;