import Pacientes from './Pacientes'

function ListadoPacientes() {
  return (
    <div className=" md:w-1/2 lg:w-3/5 mx-0 sm:mt-8 mt-8 md:mt-0 ">
      <h2 className=" font-black text-center text-3xl">
        Listado de Pacientes
      </h2>
      <p className=" text-lg mt-5 text-center mb-2">
        Administra tus  {""}
        <span className=" text-indigo-600 font-bold">pacientes</span>
      </p>
      <div className=' md:h-screen mt-0 overflow-x-hidden lg:overflow-scroll lg:overflow-x-hidden'>
      <Pacientes></Pacientes>
      <Pacientes></Pacientes>
      <Pacientes></Pacientes>
      <Pacientes></Pacientes>
      <Pacientes></Pacientes>
      <Pacientes></Pacientes>
      <Pacientes></Pacientes>
      </div>
      
    </div>
  )
}

export default ListadoPacientes