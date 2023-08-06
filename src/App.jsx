import Header from "./components/Header";
import Formulario from './components/Formulario'
import Footer from './components/Footer'
import ListadoPacientes from "./components/ListadoPacientes";
import {useEffect, useState} from 'react'

function App() {
  // state 1
  const[pacientes, setPacientes] = useState([])
  // state 2
  const[paciente, setPaciente] = useState({})

  useEffect(()=>{
    const obtenerLS = ()=>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS
  },[])

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }


  return (
    <div className="container mx-auto ">
      <Header
        
      />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente= {setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      <Footer/>
    </div>
  )
}

export default App
