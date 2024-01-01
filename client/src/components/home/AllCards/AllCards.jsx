import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDogs } from '../../../Redux/actions/actions';
import Card from './Card/Card';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Pagination from '..//Pagination/Pagination';
import './AllCards.css';

function AllCards({ currentPage, setCurrentPage, dogsPerPage, indexOfFirstDog, indexOfLastDog }) {
  const dispatch = useDispatch();
  const dogs = useSelector(state => state.dogs);
  
  // Obtiene los perros al cargar el componente
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  // Función para manejar el cambio de página
  const paginate = (page) => {
    setCurrentPage(page);
  };

  // Genera las tarjetas para mostrar los perros
  function generateCards() {
    return (
      // Mapea los perros actuales y crea una tarjeta para cada uno
      dogs.slice(indexOfFirstDog, indexOfLastDog).map((dog, i) => (
        <Link to={`/home/${dog.id}`} key={i} className="link_all_cards">
          <Card 
            image={dog.image} 
            name={dog.name} 
            weight_min={dog.weight_min}
            weight_max={dog.weight_max}
            temperament={dog.temperament} 
          /> 
        </Link>
      ))
    );
  }

  // Renderiza las tarjetas o muestra un loader si no hay datos
  return (
    <div className='AllCards_component'>
      <div className='AllCards'>
        {dogs.length !== 0 ? generateCards() : <Loader />}
      </div>
      <Pagination 
        dogsPerPage={dogsPerPage} 
        totalPosts={dogs.length} 
        paginate={paginate} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default AllCards;