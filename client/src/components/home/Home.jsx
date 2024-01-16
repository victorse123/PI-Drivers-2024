import { useState } from 'react';
import Header from '../Header/Header';
import AllCards from '../Cards/AllCards';
//import SearchBar from '../Header/SearchBar/SearchBar';
import ButtonCreateDriver from './ButtonCreateDriver/ButtonCreateDriver';
import Filtros from './Filter/Filtros';
import Footer from '../Footer/Footer';
import { useDispatch } from 'react-redux';
import { orderByName } from '../../Redux/actions/actions';
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
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [driversPerPage] = useState(8);

  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  
  return (
    <div className="home">
      <Header />
      <div className='home_options'>
        {/* Botón para crear un nuevo driver */}
        <ButtonCreateDriver />
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
      {/* Componente que muestra las cartas de los drivers */}
      <AllCards 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        driversPerPage={driversPerPage} 
        indexOfFirstDriver={indexOfFirstDriver} 
        indexOfLastDriver={indexOfLastDriver}
      />
      <Footer />
     
    </div>
    
  )
}

export default Home;