/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { filterDriver, getTeam } from '../../../Redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

function FiltroTeam({ setCurrentPage }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch (getTeam())
  },[] )
  // Disparar la acción para obtener los teams al montar el componente
  // useEffect(() => {
  //   temp?.map(getTemperament());
  // }, [dispatch]);

  // Obtener los teams del estado global utilizando useSelector
  const temp = useSelector(state => state.teams) 

  // Manejar el evento onChange del select para filtrar los drivers por team
  function handleFilter(event) {   
    setCurrentPage(1); // Reiniciar la página actual al cambiar el filtro
    dispatch(filterDriver(event.target.value)); // Filtrar drivers por team
  }
  return (
    <div>
      <select onChange={handleFilter} defaultValue="">
      <option value=""disabled>
        Selecciona uno
        </option>
      <option value="All">All Teams</option>
      {Array.isArray(temp) && temp.map((t, i) => (
        <option value={String(t)} key={i}>
          {String(t)}
          </option>
    ))}
</select>
    </div>
  );
}

export default FiltroTeam;