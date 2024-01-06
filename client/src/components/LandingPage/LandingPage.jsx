/* eslint-disable react/jsx-no-undef */
//import React from "react";
import s from "./LandingPage.module.css";

import {Link} from "react-router-dom";
import PATHROUTES from "..//..//helpers/pathRoutes.helper";
import Drivers from "../../images/F1-13.jpg";
import hero_desktop_responsive from "../../images/F1-14.jpg";
import hero_mobile from "../../images/F1-15.jpg";
import Footer from "../Footer/Footer";

// ----- icons -----
import icon3 from "../../images/icons/Dog3.png";
import icon4 from "../../images/icons/Huellas.png";
import icon5 from "../../images/icons/Correa.png";

function LandingPage() {
 
  return(
    <div>
      {/* --- header --- */}
      <header>
        <nav>
          <span className={s.logo}>Drivers</span>
          
          
          <Link to="/home" className={s.acceder}>Ingresar</Link>
          
        </nav>
      </header>
      {/* --- main --- */}
      <main>
        <div className={s.main_left}>
          <h1 className={s.titulo}>Un mundo, una pasion, un sentimiento <span className={s.titulo_perro}>F1</span></h1>
          <p className={s.sub_titulo}>Una app creada para conocer aspectos importantes de nuestros Drivers favoritos.</p>
        </div>

        <div className={s.main_right}>
          <div className={s.div_hero}>
            <img className={s.hero} src={Drivers} alt="Drivers" />
            <img className={s.hero_responsive} src={hero_desktop_responsive} alt="hero" />
            <img className={s.hero_mobile} src={hero_mobile} alt="hero" />
          </div>
        </div>
      </main>

        <div className={s.div_functions}>
        
        <div className={s.funciones}>
          <img className={s.icon} src={icon4} alt="icon" />
          <Link to={PATHROUTES.HOME}><p className={s.funcion_desc}>Drivers <br /> en el mundo</p></Link>
          </div>

        <div className={s.funciones}>
          <img className={s.icon} src={icon3} alt="icon" />
          <Link to ={PATHROUTES.AGREGALO}><p className={s.funcion_desc}>Agregalo</p></Link>
        </div>

        <div className={s.funciones}>
          <img className={s.icon} src={icon5} alt="icon" />
          <Link to={PATHROUTES.ABOUT}><p className={s.funcion_desc}>Acerca de mí</p></Link>
          </div>

      </div>
      <Footer />
      
    </div>
  )
}
  
export default LandingPage;




















{/* <div className={s.funciones}>
          <img className={s.icon} src={icon1} alt="icon" />
          <Link to ={PATHROUTES.BUSCALO}><p className={s.funcion_desc}>Buscalo</p></Link>
        </div> */}
