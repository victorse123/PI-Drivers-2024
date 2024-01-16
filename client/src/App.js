/* eslint-disable no-unused-vars */
// import { Route, Switch } from 'react-router-dom';
// import LandingPage from './/components/LandingPage/LandingPage';
// import Home from './/components/home/Home';
// import About from './/components/About/about';
// import NewDriver from './/components/NewDriver/NewDriver';
// import Filtros from './components/home/Filter/Filtros';
// import FiltroTeam from './components/home/Filter/FiltroTeam';
// import SearchBar from './components/Header/SearchBar/SearchBar';
// import Details from './/components/Details/Details';
// import './App.css';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import {  getDrivers, getTeam } from './Redux/actions/actions';

// function App() {
//   const dispatch = useDispatch();
 

//   // Despues de que el componente esta cargado se realiza un dispath para  mostrar los primeros drivers
//   useEffect(() => {
//     dispatch( getDrivers());
//     dispatch(getTeam());
//   }, [dispatch]);
  
//   return (
//     <div className="App">
//       <Switch>
//         <Route exact path="/" component={LandingPage} />
//         <Route exact path="/home" component={Home} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/new" component={NewDriver} />
//         <Route exact path="/searchBar" component={SearchBar} />
//         <Route exact path="/filtro" component={Filtros} />
//         <Route exact path="/filtroteam" component={FiltroTeam} />
//         <Route exact path="/home/:id" component={Details} />
//       </Switch>
//     </div>
//   );
// }

// export default App;


import  React from "react";
import { Route, Switch } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage"
import FormPage from "./components/Form/Form"
import Home from "./components/home/Home"
import Detail from './components/Details/Details';
import Error from "./components/Error/Error";


function App() { 
  return (
    <div>
 <Switch>
        <Route exact path="/" element={<LandingPage/>} />
        <Route  path='/home' element={<Home/>}/>
        <Route  path='/detail/:id' element={<Detail/>}/>
        
        <Route  path="/create" element={<FormPage/>}/>
        <Route path="*" element={<Error />} />
</Switch>
    </div>
  );
}


export default App