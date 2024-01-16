/* eslint-disable no-unused-vars */
import { Route, Switch } from 'react-router-dom';
import LandingPage from './/components/LandingPage/LandingPage';
import Home from './/components/home/Home';
import About from './/components/About/about';
import NewDriver from './components/NewDriver/NewDriver';
import Filtros from './components/home/Filter/Filtros';
import FiltroTeam from './components/home/Filter/FiltroTeam';
import SearchBar from './components/SearchBar/SearchBar';
import Details from './/components/Details/Details';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {  getDrivers, getTeam } from './Redux/actions/actions';

function App() {
  const dispatch = useDispatch();
 

  // Despues de que el componente esta cargado se realiza un dispath para  mostrar los primeros drivers
  useEffect(() => {
    dispatch( getDrivers());
    dispatch(getTeam());
  }, [dispatch]);
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/new" component={NewDriver} />
        <Route exact path="/searchBar" component={SearchBar} />
        <Route exact path="/filtro" component={Filtros} />
        <Route exact path="/filtroteam" component={FiltroTeam} />
        <Route exact path="/home/:id" component={Details} />
      </Switch>
    </div>
  );
}

export default App;

