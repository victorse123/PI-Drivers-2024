import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDrivers } from '../../../Redux/actions/actions';
import Card from './Card/Card';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Pagination from '..//Pagination/Pagination';
import './AllCards.css';

function AllCards({ currentPage, setCurrentPage, driversPerPage, indexOfFirstDriver, indexOfLastDriver }) {
  const dispatch = useDispatch();
  const drivers = useSelector(state => state.drivers);
  
  // Obtiene los drivers al cargar el componente
  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  // Función para manejar el cambio de página
  const paginate = (page) => {
    setCurrentPage(page);
  };

  // Genera las tarjetas para mostrar los drivers
  function generateCards() {
    return (
      // Mapea los drivers actuales y crea una tarjeta para cada uno
      drivers.slice(indexOfFirstDriver, indexOfLastDriver).map((driver, i) => (
        <Link to={`/home/${driver.id}`} key={i} className="link_all_cards">
          <Card 
            image={driver.image} 
            name={driver.name} 
            lastname={driver.lastname} 
          /> 
        </Link>
      ))
    );
  }

  // Renderiza las tarjetas o muestra un loader si no hay datos
  return (
    <div className='AllCards_component'>
      <div className='AllCards'>
        {drivers.length !== 0 ? generateCards() : <Loader />}
      </div>
      <Pagination 
        driversPerPage={driversPerPage} 
        totalPosts={drivers.length} 
        paginate={paginate} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default AllCards;