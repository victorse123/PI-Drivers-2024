/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { driverPost, getTeams } from '../../Redux/actions/actions';
import './Form.css';

// Función para validar los campos del formulario
function validar(input) {
  let errors = {};

  // Validación del nombre
  if (!input.name) {
    errors.name = '¡Debes ponerle un nombre!';
  } else if (!/[A-Z]+$/i.test(input.name)) {
    errors.name = 'El nombre solo puede contener letras';
  } else if (parseInt(input.name.length) >= 25) {
    errors.name = 'El nombre debe tener menos de 25 caracteres';
  }
  // /^[A-Z]+$/i

// Validación del apellido
if (!input.lastname) {
  errors.lastname = '¡Debes ponerle un apellido!';
} else if (!/[A-Z]+$/i.test(input.lastname)) {
  errors.lastname = 'El apellido solo puede contener letras';
} else if (parseInt(input.lastname.length) >= 50) {
  errors.lastname = 'El apellido debe tener menos de 50 caracteres';
}
// /^[A-Z]+$/i

  //agregar a los otros inputs

// Descripcion
if (!input.description) {
  errors.description = '¡Debes ponerle una descripcion!';
} else if (!/[A-Z]+$/i.test(input.description)) {
  errors.description = 'La descripcion solo puede contener letras';
} else if (parseInt(input.description.length) <= 50) {
  errors.description = 'La descripcion debe tener al menos de 50 caracteres';
}
// /^[A-Z]+$/i

// Validación del pais
if (!input.nationality) {
  errors.nationality = '¡Debes ponerle un pais!';
} else if (!/[A-Z]+$/i.test(input.nationality)) {
  errors.nationality = 'El pais solo puede contener letras';
} else if (parseInt(input.nationality.length) >= 25) {
  errors.nationality = 'El pais debe tener menos de 25 caracteres';
}
// /^[A-Z]+$/i

// Validación de la fecha de nacimiento
if (!input.birthdate) {
  errors.birtdate = '¡Debes ponerle una fecha de nacimiento!';
} else if (!/[0-9]+$/i.test(input.birthdate)) {
  errors.birthdate = 'La fecha de nacimiento solo puede contener numeros';
} else if (parseInt(input.birthdate.length) >= 25) {
  errors.birthdate = 'La fecha de nacimiento debe tener menos de 25 caracteres';
}
// /^[A-Z]+$/i

 // Validación de la escuderia
 if (!input.team) {
  errors.team = '¡Debes ponerle un nombre!';
} else if (!/[A-Z]+$/i.test(input.team)) {
  errors.team = 'La escuderia solo puede contener letras';
} else if (parseInt(input.team.length) >= 25) {
  errors.team = 'La escuderia debe tener menos de 25 caracteres';
}
// /^[A-Z]+$/i

  return errors;
}


function Form() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams()); // Obtener la lista de las escuderias
  }, [dispatch]);

  const team = useSelector((state) => state.teams);

  const [errors, setErrors] = useState({}); // Estado para almacenar errores
  const [input, setInput] = useState({ // Estado para los datos del formulario
    image:"",
    name: "",
    lastname: "",
    description: "",
    nationality: "",
    birthdate: "",
    team: []
  });

  const [selectNameState, setSelectNameState] = useState([])
  
 
// Función para manejar cambios en los inputs del formulario
  function handleChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validar({
      ...input,
      [e.target.name]: e.target.value
    }))
  }
// Función para manejar la selección de temperamentos en el formulario
function handleSelect(e) {

    if(input.team.includes(e.target.value)) return

    setInput({
      ...input,
      team: [...input.team, e.target.value]
    })

    const selectName = e.target.value;
    if(selectName === "default") return;
    setInput({...input , team:[...input.team, selectName]})
    setSelectNameState([...selectNameState, team.find(e => e.id === parseInt(selectName))])
  }

  // Función para manejar el envío del formulario
  function handleSubmit(e) {
    e.preventDefault();
    // Comprobar si hay errores antes de enviar los datos
    if (!errors.name && !errors.lastname && !errors.description && !errors.nationality && !errors.birthdate) {
      try {
        dispatch(driverPost(input)); // Enviar los datos del driver al servidor
        setInput({ // Restablecer los valores de los campos del formulario
          image:"",
          name: "",
          lastname: "",
          description: "",
          nationality: "",
          birthdate: "",
          team: []
        })
        setSelectNameState([])
      } catch (error) {
        console.log(error)
      }
    } 
  }


 // Función para eliminar un team seleccionado
 function handleDelete(e) {
    
    const selectedValue = parseInt(e.target.value);
  
    if (!isNaN(selectedValue)) {
      setInput({
        ...input,
        team: input.team.filter(t => t !== e.target.value)
      });
  
      setSelectNameState(prevState => prevState.filter(t => t.id !== selectedValue));
    } else {
      console.error("Invalid value for deletion.");
    }
  }


  return(
    <div className='Form_container'>
      <h2 className='form_title'>AGREGA LOS DATOS DE TU <span className='form_title_naranja'>DRIVER</span></h2>
      <p className='datos_obligatorios'>Datos con * obligatorios</p>

      <form className='form' action="" onSubmit={handleSubmit}>

        {/* ---- INPUT IMAGE ---- */}
        <div>
          <label>Imagen</label>
          <div className= "div_input">
            <input className='form_input' placeholder='Url de la imagen' onChange={handleChange} name="image" value={input.image}/>
          </div>
        </div>

        {/* ---- INPUT NAME ---- */}
        <div>
          <div>
            <label>Nombre *</label>
            <div className={errors.name ? "div_input error" : "div_input"}>
              <input className='form_input' placeholder='Eje: Victor' onChange={handleChange} name="name" value={input.name}/>
            </div>
            {errors.name && (<span className='dato_incorrecto'>{errors.name}</span>)}
          </div>
        </div>

        {/* ---- INPUT LASTNAME ---- */}
        <div>
          <div>
            <label>Apellido *</label>
            <div className={errors.lastname ? "div_input error" : "div_input"}>
              <input className='form_input' placeholder='Eje: Sepulveda' onChange={handleChange} name="lastname" value={input.lastname}/>
            </div>
            {errors.lastname && (<span className='dato_incorrecto'>{errors.lastname}</span>)}
          </div>
        </div>

        {/* ---- INPUT DESCRIPTION ---- */}
        <div>
          <div>
            <label>Descripcion *</label>
            <div className={errors.Description ? "div_input error" : "div_input"}>
              <input className='form_input' placeholder='Eje: El mejor' onChange={handleChange} name="description" value={input.description}/>
            </div>
            {errors.description && (<span className='dato_incorrecto'>{errors.description}</span>)}
          </div>
        </div>
        
        {/* ---- INPUT NATIONALITY ---- */}
        <div>
          <div>
            <label>Pais *</label>
            <div className={errors.Nationality ? "div_input error" : "div_input"}>
              <input className='form_input' placeholder='Eje: Colombia' onChange={handleChange} name="nationality" value={input.nationality}/>
            </div>
            {errors.nationality && (<span className='dato_incorrecto'>{errors.nationality}</span>)}
          </div>
        </div>

        {/* ---- INPUT BIRTHDATE ---- */}
        <div>
          <div>
            <label>Fecha de Nacimiento *</label>
            <div className={errors.Birthdate ? "div_input error" : "div_input"}>
              <input className='form_input' placeholder='Eje: 14/01/1985' onChange={handleChange} name="birthdate" value={input.birthdate}/>
            </div>
            {errors.birthdate && (<span className='dato_incorrecto'>{errors.Birthdate}</span>)}
          </div>
        </div>

        {/* ---- INPUT TEAM ---- */}
        <div>
          <label>Escuderia </label>
          <div className="div_input">
            <select className='select_form' name="escuderias" onChange={handleSelect}>
              {team.map((t, i) => {
                return(
                  <option className='option_form' key={i} value={t.id}>{t}</option>
                )
              })}
            </select>
          </div>
          <div className='div_form_final_teams'>
  <ul className='ul_team'>
    {selectNameState.map((e, i) => {
      const driverName = e && e.name ? e.name : '';
      const driverId = e && e.id ? e.id : '';

      return (
        <li className='li_temp' key={i}>
          {driverName}
          <button className='delete_team' type='button' value={driverId} onClick={handleDelete}>x</button>
        </li>
                )
              })}
            </ul>
          </div>
        </div>

        <input className={errors.name || errors.lastname || errors.description || errors.nationality || errors.birthdate ? "submit none" : "submit"} type="submit" value="crear"/>

      </form>
    </div>
  )
}

export default Form


// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import styles from "..//Form/Form.css"
// import { Link } from "react-router-dom";
// import validation from "../..//Redux/Validation/validation";
// import { useDispatch, useSelector } from "react-redux";
// import { getTeams } from "../..//Redux/actions/actions";

// export default function FormPage(){
// const[teams, setTeams] = useState([])
// const dispatch = useDispatch();
// const allTeams = useSelector((state) => state.allTeams)
// const [selectedTeams, setSelectedTeams] = useState([]);
// const [showOptions, setShowOptions] = useState(false);
// const [errors, setErrors] = useState({})
// const [formData, setFormData] = useState({
//     name: '',
//     lastname: '',
//     description: '', 
//     nationality: '',
//     dob: '',
//     image: '',
//    teams: []
// })

// useEffect(()=> {
// dispatch(getTeams())
// setTeams(allTeams)
// }, [])

// useEffect(()=> {
// setTeams(allTeams)
// }, [allTeams])


// const handleTeamChange = (event) => {
//   const { value } = event.target;
//   if (selectedTeams.includes(value)) {
//     setSelectedTeams(selectedTeams.filter((team) => team !== value));
//   } else {
//     setSelectedTeams([...selectedTeams, value]);
//   }
// };
//     const selectedTeamIds = [];
//     teams.forEach((team) => {
//       if (selectedTeams.includes(team.name)) {
//         selectedTeamIds.push(team.id);
//       }
//     });

// const handleChange = (e) => {
//     const {name, value} = e.target;
//     setFormData({...formData, [name]: value})
// }

// const handleSubmit = async (e) => {
//   e.preventDefault(); 
//   const validationErrors = validation(formData);
//   setErrors(validationErrors);
//   try {
//     const response = await fetch('http://localhost:3001/drivers', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name: formData.name,
//         lastname: formData.lastname,
//         description: formData.description,
//         nationality: formData.nationality,
//         dob: formData.dob,
//         image: formData.image,
//         teams: selectedTeamIds 
//       })
//      });
//     if (response.ok) {
//       const data = await response.json();
//       setFormData({
//         name: '',
//         lastname: '',
//         description: '', 
//         nationality: '',
//         dob: '',
//         image: '',
//     })
//     setSelectedTeams([])
//      window.alert(`Driver ${data.driver.name} ${data.driver.lastname} created successfully`);
//     } else {
//       const errorData = await response.json();
//       console.error('Request error:', errorData);
//   }
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// };
    
// return (
//   <div className={styles.container}>
//    <Link to={`/home`}>
//     <button className={`${styles.btn} ${styles.back}`} >Back</button>
//     </Link>
//     <div className={styles.create}>
//     <div>
//     <form onSubmit={handleSubmit}> 
// <h1 className={`${styles.h1} ${styles.new}`}>New driver</h1>
// <label >
//         * Name:
//       </label>
//       <input 
//         type="text"
//         name="name"
//         placeholder="Name..."
//         value={formData.name}
//         onChange={handleChange}
//         className={styles.space}
//       />
//       {errors.name && <p className={styles.error}>{errors.name}</p>}

//          <label className={styles.space}>
//         * Lastname:
//       </label>
//        <input 
//         type="text"
//         name="lastname"
//         placeholder="Lastname...."
//         value={formData.lastname}
//         onChange={handleChange}
//         className={styles.space}
//       />
//      {errors.lastname && <p className={styles.error}>{errors.lastname}</p>}
      
//        <label className={styles.space}>
//        * Description:
//       </label>
//        <input
//         type="text"
//         name="description"
//         placeholder="Description...."
//         value={formData.description}
//         onChange={handleChange}
//         className={styles.space}
//       />
//              {errors.description && <p className={styles.error}>{errors.description}</p>}

//          <label className={styles.space}>
//        Nacionality:
//       </label>
//       <input
//         type="text"
//         name="nationality"
//         placeholder="Nationality"
//         value={formData.nationality}
//         onChange={handleChange}
//         className={styles.space}
//       />  
//           <label className={styles.space}>
//          * Date of birth:
//       </label>
//        <input
//         type="date"
//         name="dob"
//         placeholder="Date"
//         value={formData.dob}
//         onChange={handleChange}
//         className={styles.space}
//       />
//         {errors.dob && <p className={styles.error}>{errors.dob}</p>}

//       <label className={styles.space}>
//         Image URL:
//       </label>
//         <input type='text' 
//           id="image" 
//           name="image" 
//             value={formData.image}
//         onChange={handleChange}
//         className={styles.space}/>
//   <button type="button" className={`${styles.btn} ${styles.space} `} onClick={() => setShowOptions(!showOptions)}>
//             Team selector:
//           </button>
//           {showOptions && (
//             <select
//             multiple
//             name="teams"
//             value={selectedTeams}
//             onChange={handleTeamChange}
//           >

//             {teams.map((team) => (
//               <option key={team.id} value={team.name}>
//                 {team.name}
//               </option>
//             ))}
//           </select>
//           )}

//    <div>Equipos seleccionados: {selectedTeams.join(", ")}</div>

//       <input className={`${styles.btn} ${styles.space} `} type="submit" value={'Create'}/>
// </form>
//     </div>
//   </div>
//   </div>
  
// )

// }