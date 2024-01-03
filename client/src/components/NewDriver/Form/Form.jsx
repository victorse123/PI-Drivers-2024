/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { driverPost, getTeam } from '../../../Redux/actions/actions';
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
} else if (!/[0-9]+$/i.test(input.name)) {
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
    dispatch(getTeam()); // Obtener la lista de las escuderias
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
              <input className='form_input' placeholder='Eje: naruto' onChange={handleChange} name="name" value={input.name}/>
            </div>
            {errors.name && (<span className='dato_incorrecto'>{errors.name}</span>)}
          </div>
        </div>

        {/* ---- INPUT LASTNAME ---- */}
        <div>
          <div>
            <label>Apellido *</label>
            <div classlastName={errors.lastname ? "div_input error" : "div_input"}>
              <input classlastName='form_input' placeholder='Eje: naruto' onChange={handleChange} lastname="lastname" value={input.lastname}/>
            </div>
            {errors.lastname && (<span classlastName='dato_incorrecto'>{errors.lastname}</span>)}
          </div>
        </div>

        {/* ---- INPUT DESCRIPTION ---- */}
        <div>
          <div>
            <label>Nombre *</label>
            <div className={errors.name ? "div_input error" : "div_input"}>
              <input className='form_input' placeholder='Eje: naruto' onChange={handleChange} name="name" value={input.name}/>
            </div>
            {errors.name && (<span className='dato_incorrecto'>{errors.name}</span>)}
          </div>
        </div>
        
        {/* ---- INPUT TEMPERAMENT ---- */}
        <div>
          <label>Temperamentos</label>
          <div className="div_input">
            <select className='select_form' name="temperamentos" onChange={handleSelect}>
              {temperamentos.map((t, i) => {
                return(
                  <option className='option_form' key={i} value={t.id}>{t}</option>
                )
              })}
            </select>
          </div>
          <div className='div_form_final_temps'>
  <ul className='ul_temp'>
    {selectNameState.map((e, i) => {
      const dogName = e && e.name ? e.name : '';
      const dogId = e && e.id ? e.id : '';

      return (
        <li className='li_temp' key={i}>
          {dogName}
          <button className='delete_temp' type='button' value={dogId} onClick={handleDelete}>x</button>
        </li>
                )
              })}
            </ul>
          </div>
        </div>

        <input className={errors.name || errors.height_min || errors.height_max || errors.weight_min || errors.weight_max ? "submit none" : "submit"} type="submit" value="crear"/>

      </form>
    </div>
  )
}

export default Form