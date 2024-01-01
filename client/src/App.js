import { Route, Switch } from 'react-router-dom';
import LandingPage from './/components/LandingPage/LandingPage';
import Home from './/components/home/Home';
import About from './/components/About/about';
import NewDog from './/components/NewDog/NewDog';
import Filtros from './components/home/Filter/Filtros';
import FiltroTemperamento from './components/home/Filter/FiltroTemperamento';
import SearchBar from './components/Header/SearchBar/SearchBar';
import Details from './/components/Details/Details';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {  getDogs, getTemperament } from './Redux/actions/actions';

function App() {
  const dispatch = useDispatch();
 

  // Despues de que el componente esta cargado se realiza un dispath para  mostrar los primeros perros
  useEffect(() => {
    dispatch( getDogs());
    dispatch(getTemperament());
  }, [dispatch]);
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/new" component={NewDog} />
        <Route exact path="/searchBar" component={SearchBar} />
        <Route exact path="/filtro" component={Filtros} />
        <Route exact path="/filtrotemperamento" component={FiltroTemperamento} />
        <Route exact path="/home/:id" component={Details} />
      </Switch>
    </div>
  );
}

export default App;