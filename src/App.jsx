import Header from "./components/Header";
import Formulario from './components/Formulario'
import Footer from './components/Footer'
import ListadoPacientes from "./components/ListadoPacientes";
import {useState} from 'react'

function App() {
  // state 1
  const[pacientes, setPacientes] = useState([])
  // state 2
  // eslint-disable-next-line no-unused-vars
  const[paciente, setPaciente] = useState({})



  return (
    <div className="container mx-auto ">
      <Header
        
      />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>
      <Footer/>
    </div>
  )
}

export default App
