/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import {useState, useEffect} from "react"
import Error from './Error'
// import Correcto from './Correcto'


function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
  // state 1
  const [nombreM, setNombreM] = useState('') ;
  // state 2
  const [nombreP, setNombreP] = useState('') ;
  // state 3
  const [email, setEmail] = useState('') ;
  // state 4
  const [numero, setNumero] = useState('') ;
  // state 5
  const [fechaIn, setFechaIn] = useState('') ;
  // state 6
  const [sintomas, setSintomas] = useState('') ;
  // state 7
  const [error, setError] = useState(false);
  

  useEffect(()=>{
    if( Object.keys(paciente).length > 0){
      setNombreM(paciente.nombreM)
      setNombreP(paciente.nombreP)
      setEmail(paciente.email)
      setNumero(paciente.numero)
      setFechaIn(paciente.fechaIn)
      setSintomas(paciente.sintomas)
    } 
  },[paciente])


  const generarId = () =>{
    const random= Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    // validacion del formulario
    if([nombreM, nombreP, email, numero, fechaIn, sintomas].includes('')){
      console.log('Hay al menos un campo vacio')
      setError(true)
      return;
    } 
    setError(false)
    // creacion de bjeto de paciente
    const objPaciente={
      nombreM,
      nombreP,
      email,
      numero,
      fechaIn,
      sintomas      
    }

    if(paciente.id ){
      // editando registro
      objPaciente.id = paciente.id 
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      // Nuevo registro
      objPaciente.id = generarId();
      setPacientes([...pacientes, objPaciente])
    }
    
    // reiniciar el formulario
    setNombreM("")
    setNombreP("")
    setEmail("")
    setNumero("")
    setFechaIn("")
    setSintomas("")
  }

  return (
    <div className=" md:w-1/2 lg:w-2/5 mx-3">
        <h2 className=" font-black text-center text-3xl">
            Segumiento de Pacientes
        </h2> 

        <p className=" text-lg mt-5 text-center mb-5">
          Añade pacientes y {""}
          <span className=" text-indigo-600 font-bold">Administralos</span>
        </p>

        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-4 py-5"    
        >
            
          <div className="mb-3 ">
            <label className="font-bold" htmlFor="nombreM">
              Nombre del paciente: <span className=" text-indigo-600">{nombreM}</span> 
            </label>
            <input type="text"               
              id="nombreM"
              placeholder="Nombre de la mascota" 
              className=" border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400 focus:border-indigo-600 focus-visible:border-indigo-600" 
              value={nombreM}
              onChange={(e)=> setNombreM(e.target.value)}
              />              
          </div>      
          <div className="mb-3 ">
            <label className="font-bold" htmlFor="nombreP">
              Nombre del propietario: <span className=" text-indigo-600">{nombreP}</span> 
            </label>
            <input type="text" 
              id="nombreP"
              placeholder="Nombre del propietario" 
              className=" border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400 focus:border-indigo-600"
              value={nombreP}
              onChange={(e)=> setNombreP(e.target.value)} />
          </div>
          <div className="mb-3 ">
            <label className="font-bold" htmlFor="email">
              Email: <span className=" text-indigo-600">{email}</span> 
            </label>
            <input type="email" 
              id="email"
              placeholder="Email del propietario"
              className=" border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400"
              value={email}
              onChange={(e)=> setEmail(e.target.value)} />
          </div>
          <div className="mb-3 ">
            <label className="font-bold" htmlFor="numero">
              Numero de telefono: <span className=" text-indigo-600">{numero}</span> 
            </label> 
            <input type="text" 
              id="numero"
              placeholder="Numero del propietario" 
              className=" border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400" 
              value={numero}
              onChange={(e)=> setNumero(e.target.value)}/>
          </div>
          <div className="mb-3 ">
            <label className="font-bold" htmlFor="fechaIn">
              Fecha de ingreso: <span className=" text-indigo-600">{fechaIn}</span> 
            </label>
            <input type="date" 
              id="fechaIn"             
              className=" border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400" 
              value={fechaIn}
              onChange={(e)=> setFechaIn(e.target.value)}/>
          </div>
          <div className="mb-3 ">
            <label className="font-bold" htmlFor="sintomas">
              Sintomas:
            </label>
            <textarea type="textarea" 
              id="sintomas"
              placeholder="Describe los sintomas del paciente" 
              className=" border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400" 
              value={sintomas}
              onChange={(e)=> setSintomas(e.target.value)}/>
          </div> 
          {error && 
            <Error
              mensaje="Todos los campos son obligatorios."
            />
          }     
          {/* {error ? 
            <Error
              mensaje="Todos los campos son obligatorios."
            />
            :
            <Correcto
              mensaje="Nuevo paciente añadido correctamente."
            />
          }      */}
          <input type="submit"
            className=" bg-indigo-600 p-3 w-full text-white font-bold uppercase hover:bg-indigo-800 cursor-pointer transition-all rounded-lg mb-2"
            value={paciente.id ? "Editar paciente" : "Agregar paciente" } />     
        </form>
    </div>
  )
}

export default Formulario