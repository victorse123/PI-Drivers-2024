// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getDrivers } from '../../Redux/actions/actions';
// import Card from '../Card/Card';
// import { Link } from 'react-router-dom';
// import Loader from '../home/Loader/Loader';
// import Pagination from '../home/Pagination/Pagination';
// import './Cards.css';

// function AllCards({ currentPage, setCurrentPage, driversPerPage, indexOfFirstDriver, indexOfLastDriver }) {
//   const dispatch = useDispatch();
//   const drivers = useSelector(state => state.drivers);
  
//   // Obtiene los drivers al cargar el componente
//   useEffect(() => {
//     dispatch(getDrivers());
//   }, [dispatch]);

//   // Función para manejar el cambio de página
//   const paginate = (page) => {
//     setCurrentPage(page);
//   };

//   // Genera las tarjetas para mostrar los drivers
//   function generateCards() {
//     return (
//       // Mapea los drivers actuales y crea una tarjeta para cada uno
//       drivers.slice(indexOfFirstDriver, indexOfLastDriver).map((driver, i) => (
//         <Link to={`/home/${driver.id}`} key={i} className="link_all_cards">
//           <Card 
//             image={driver.image} 
//             name={driver.name} 
//             lastname={driver.lastname} 
//           /> 
//         </Link>
//       ))
//     );
//   }

//   // Renderiza las tarjetas o muestra un loader si no hay datos
//   return (
//     <div className='AllCards_component'>
//       <div className='AllCards'>
//         {drivers.length !== 0 ? generateCards() : <Loader />}
//       </div>
//       <Pagination 
//         driversPerPage={driversPerPage} 
//         totalPosts={drivers.length} 
//         paginate={paginate} 
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />
//     </div>
//   );
// }

// export default AllCards;


import Card from "..//Card/Card";
import defaultImage from '..//..//images/F1-3.jpg';
import styles from "./Cards.css"
import { useSelector } from "react-redux";


function Cards({ onClose, currentPage, itemsPerPage, handlePageChange, setCurrentPage }) {
  const indexOfLastDriver = currentPage * itemsPerPage;
  const indexOfFirstDriver = indexOfLastDriver - itemsPerPage;
  const allDriversCopy = useSelector((state) => state.allDriversCopy)
  const currentDrivers = allDriversCopy;
  const pageDrivers = currentDrivers.slice(indexOfFirstDriver, indexOfLastDriver);

  const handlePageInput = (e) => {
    const newPage = parseInt(e.target.value, 10);
    if (!isNaN(newPage)) {
      // Si el valor es un número válido, actualiza el estado
      setCurrentPage(newPage);
    }
  };
  return (
    <div > 
<div className={styles.pagination}>
        <button className={styles.button} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <div className={styles.inputWrapper}>
      <input
        type="number"
        className={styles.inputBox}
      value={currentPage}
        onChange={handlePageInput}
      /> 
      <span className={styles.underline}></span>
      </div>
             <button className={styles.button} 
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastDriver >= currentDrivers.length}
        >
          Next
        </button>
      </div>
      <div className={styles.cardContainer}> 
       {pageDrivers.map((driver) => (
         <Card
           key={driver.id}
           id={driver.id}
           name={driver.name}
           lastname={driver.surname || driver.lastname}
           image={driver.image === '' ? defaultImage : driver.image}
           teams={driver.teams}
           onClose={onClose}
         />
       ))}
     </div>
    </div>
   
  );
}

export default Cards;