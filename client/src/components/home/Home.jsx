/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// import { useState } from 'react';
// import Header from '../Header/Header';
// import AllCards from '../Cards/Cards';
// //import SearchBar from '../Header/SearchBar/SearchBar';
// import ButtonCreateDriver from './ButtonCreateDriver/ButtonCreateDriver';
// import Filtros from './Filter/Filtros';
// import Footer from '../Footer/Footer';
// import { useDispatch } from 'react-redux';
// import { orderByName } from '../../Redux/actions/actions';
// import {} from './Home.css';

// function Home() {
//   const dispatch = useDispatch();

//   // Maneja el cambio en el selector de ordenamiento
//   function handleChange(e) {
//     const value = e.target.value;
//     // Envía acciones de ordenamiento basadas en la opción seleccionada
//     if (value === 'name_asc' || value === 'name_des') {
//       dispatch(orderByName(value));
//     } 
//   }

//   const [currentPage, setCurrentPage] = useState(1);
//   const [driversPerPage] = useState(8);

//   const indexOfLastDriver = currentPage * driversPerPage;
//   const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  
//   return (
//     <div className="home">
//       <Header />
//       <div className='home_options'>
//         {/* Botón para crear un nuevo driver */}
//         <ButtonCreateDriver />
//         <div className='div_filtro_ordernamineto'>
//           {/* Componente para filtrar y ordenar */}
//           <Filtros currentPage={currentPage} setCurrentPage={setCurrentPage} />
//           <div className='div_ordernamiento'>
//             {/* Selector de ordenamiento */}
//             <span className='ordenar_text'>Ordernar por :</span>
//             <select className='select_ordernamiento' onChange={handleChange}>
//               <option className='option_name' value="name_asc">Nombre (a-z)</option>
//               <option className='option_name' value="name_des">Nombre (z-a)</option>
//               <option className='option_name' value="peso_asc">Peso (-/+)</option>
//               <option className='option_name' value="peso_des">Peso (+/-)</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       {/* Componente que muestra las cartas de los drivers */}
//       <AllCards 
//         currentPage={currentPage} 
//         setCurrentPage={setCurrentPage} 
//         driversPerPage={driversPerPage} 
//         indexOfFirstDriver={indexOfFirstDriver} 
//         indexOfLastDriver={indexOfLastDriver}
//       />
//       <Footer />
     
//     </div>
    
//   )
// }

// export default Home;



// import { useState,useEffect } from 'react'
// import  React from "react";
// import NavBar from "../NavBar/NavBar"
// import Cards from "../Cards/Cards"
// import { useDispatch, useSelector } from "react-redux";
// import {getDrivers, getDriverByName,order, getTeams, clearFilters, filterOrigin, filterByTeam} from "..//..//Redux/actions/actions";
// import styles from "./Home.css"


// const Home = () => {
//     const dispatch = useDispatch();
//     const allTeams = useSelector((state) => state.allTeams)
//     const [isLoading, setIsLoading] = useState(true);
// const [currentPage, setCurrentPage] = useState(1)

// const itemsPerPage = 9;
// const[teams, setTeams] = useState([])
// const [filterName, setFilterName] = useState("")
// const [filterDob, setFilterDob] = useState("")
// const [filterTeam, setFilterTeam] = useState("")
// const [originOption, setOriginOption] = useState("")


// useEffect(() => {
//   const fetchData = () => {
//     dispatch(getTeams());
//      dispatch(getDrivers());
   
//   };
//   fetchData();
// }, []);


// useEffect(() => {
//       setIsLoading(false)
//       }, [allTeams]);


// //filtro por origen
//  const handleOrigin = (e) => {
//   setCurrentPage(1);
// dispatch(filterOrigin(e.target.value))
// setFilterDob("")
// setFilterName("")
// setOriginOption(e.target.value)
//  }

// //filtro por nombre y dob:
// const handleOrder = (e) => {
//   dispatch(order(e.target.value))

//   if(e.target.value === "A" || e.target.value === "B"){
//     setFilterDob("")
//     setFilterTeam("")
//     setFilterName(e.target.value)
//   }
  
//   if(e.target.value === "A2" || e.target.value === "B2"){
//     setFilterName("")
//     setFilterTeam("")
//     setFilterDob(e.target.value)
//   }
//   setCurrentPage(1);
// }


//   const filterTeams = (e) => {
//     dispatch(filterByTeam(e.target.value))
//     setCurrentPage(1);
//     setFilterDob("")
//     setFilterTeam("")
//   }

//     //Busqueda por nombre
//     const onSearch =  (name) => {
//     dispatch(getDriverByName(name))
//     setFilterName("")
//     setFilterTeam("")
//     setFilterDob("")
//     setOriginOption("")
//       };

//       // limpia filtros
//       const handleClean=()=>{
//         dispatch(clearFilters())
//         setFilterName("")
//         setFilterTeam("")
//         setFilterDob("")
//         setCurrentPage(1);       
//       }

//     //paginado
//     const handlePageChange = (page) => {
//       setCurrentPage(page);
//     };

    
//     let content;
//     if (isLoading) {
//       content = <div className={styles.honeycomb}>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//     </div>
//     } else{
//       content =  (<div className={styles.container}>
     
//       <NavBar handlePageChange={handlePageChange} onSearch={onSearch} /> 
//       <div  className={styles.selectContainer}>

//       <select className={styles.select} onChange={handleOrder} value={filterName} defaultValue="">
//   <option value="" disabled>Order by name</option>
//   <option value='A'>Ascendente</option>
//   <option value='B'>Descendente</option>
// </select>

// <select  className={styles.select} onChange={handleOrder} value={filterDob} >
//   <option    value="" disabled>Order by age</option>
//   <option    value='A2'>Ascendente</option>
//   <option  value='B2'>Descendente</option>
// </select>

// <select  className={styles.select}  onChange={handleOrigin} value={originOption} >
//   <option   value="" disabled>Select origin</option>
//   <option    value='BDD'>Data base</option>
//   <option  value='API'>API</option>
// </select>

// <select  className={styles.select}  onChange={filterTeams} value={filterTeam}  >
//   <option value="" disabled>Select Team</option>
//   {allTeams.map((team) => (
//               <option key={team.id} value={team.name}>
//                 {team.name}
//               </option>
//             ))}
// </select>
// <button className={styles.button} onClick={handleClean} >Clean Filters</button>

// </div >
//       <Cards  currentPage={currentPage}
//             itemsPerPage={itemsPerPage}   
//             handlePageChange={handlePageChange} 
//             setCurrentPage={setCurrentPage}/>
//           </div> )
//     }
   
//     return <div >
//       {content}
//       </div>;
  
// }

// export default Home