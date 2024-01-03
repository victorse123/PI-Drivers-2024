/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { filterDog, getTemperament } from '../../../Redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

function FiltroTemperamento({ setCurrentPage }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch (getTemperament())
  },[] )
  // Disparar la acción para obtener los temperamentos al montar el componente
  // useEffect(() => {
  //   temp?.map(getTemperament());
  // }, [dispatch]);

  // Obtener los temperamentos del estado global utilizando useSelector
  const temp = useSelector(state => state.temperaments) 

  // Manejar el evento onChange del select para filtrar los perros por temperamento
  function handleFilter() {   
    setCurrentPage(1); // Reiniciar la página actual al cambiar el filtro
    dispatch(filterDog(event.target.value)); // Filtrar perros por temperamento
  }
  return (
    <div>
      <select onChange={handleFilter} defaultValue="">
      <option value=""disabled>Selecciona uno</option>
      <option value="All">All Temperaments</option>
        {temp.map((t, i) => (
          <option value={t} key={i}>
            {t}
          </option>
    ))}
</select>
    </div>
  );
}

export default FiltroTemperamento;