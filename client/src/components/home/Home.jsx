import { useState } from 'react';
import Header from '../Header/Header';
import AllCards from './AllCards/AllCards';
//import SearchBar from '../Header/SearchBar/SearchBar';
import ButtonCreateDog from './ButtonCreateDog/ButtonCreateDog';
import Filtros from './Filter/Filtros';
import Footer from '../Footer/Footer';
import { useDispatch } from 'react-redux';
import { orderByName, orderByWeight } from '../../Redux/actions/actions';
import {} from './Home.css';

function Home() {
  const dispatch = useDispatch();

  // Maneja el cambio en el selector de ordenamiento
  function handleChange(e) {
    const value = e.target.value;
    // Envía acciones de ordenamiento basadas en la opción seleccionada
    if (value === 'name_asc' || value === 'name_des') {
      dispatch(orderByName(value));
    } 
    if (value === 'peso_asc' || value === 'peso_des') {
      dispatch(orderByWeight(value));
    }
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  
  return (
    <div className="home">
      <Header />
      <div className='home_options'>
        {/* Botón para crear un nuevo perro */}
        <ButtonCreateDog />
        <div className='div_filtro_ordernamineto'>
          {/* Componente para filtrar y ordenar */}
          <Filtros currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <div className='div_ordernamiento'>
            {/* Selector de ordenamiento */}
            <span className='ordenar_text'>Ordernar por :</span>
            <select className='select_ordernamiento' onChange={handleChange}>
              <option className='option_name' value="name_asc">Nombre (a-z)</option>
              <option className='option_name' value="name_des">Nombre (z-a)</option>
              <option className='option_name' value="peso_asc">Peso (-/+)</option>
              <option className='option_name' value="peso_des">Peso (+/-)</option>
            </select>
          </div>
        </div>
      </div>
      {/* Componente que muestra las cartas de los perros */}
      <AllCards 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        dogsPerPage={dogsPerPage} 
        indexOfFirstDog={indexOfFirstDog} 
        indexOfLastDog={indexOfLastDog}
      />
      <Footer />
     
    </div>
    
  )
}

export default Home;