/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import style from './Error.module.css'
import errorImg from "..//..//images/F1-6.jpg";
import { Link } from "react-router-dom";
import styles from "../Form/Form.css"
export default function Error() {

    return(
        <div className={style.container}>
            <div className={style.text}>

            
        <h1 class="overlay-text">Error 404</h1>
        <h1 class="overlay-text">This site doesn't exist...</h1>
        </div>
        <div className={style.image}>
        <img class='imagen' src={errorImg}/>
        </div>
        <Link to={`/home`}>
    <button className={`${styles.btn}`} >Home</button>
    </Link>
    </div>
        
    )
}