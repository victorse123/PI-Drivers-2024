import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/Header';
import DriverDetail from './DriversDetail/DriversDetail';
import { GET_DETAILS, getDetail } from '../../Redux/actions/actions';
import Footer from '../Footer/Footer';
import './Details.css';

function Details(props) {
  // Obtiene el dispatch de Redux
  const dispatch = useDispatch();

  // Obtiene la información del estado utilizando useSelector
  const driver = useSelector(state => state.details);

  // Obtiene el ID de los parámetros de la URL
  const id = props.match.params.id;

  // Dispara la acción para obtener detalles del perro al montar o actualizar el componente
  useEffect(() => {

    dispatch(getDetail(id))
    return () => {
      dispatch({
        type: GET_DETAILS,
        payload: []
      })
    }
  }, [dispatch, id])

  return (
    <div className='details_component'>
      {/* Componente del encabezado */}
      <Header />

      {/* Componente de detalles del driver */}
      {/* Pasa el driver específico del estado al componente DriverDetail */}
      <DriverDetail driver={driver[0]} />

      {/* Componente del pie de página */}
      <Footer />
    </div>
  )
}

export default Details;