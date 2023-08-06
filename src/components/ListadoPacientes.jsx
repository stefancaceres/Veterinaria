import Pacientes from './Pacientes'

// eslint-disable-next-line react/prop-types, no-unused-vars
function ListadoPacientes({pacientes, setPaciente}) {

  

  return (
    <div className=" md:w-1/2 lg:w-3/5 mx-0 sm:mt-8 mt-8 md:mt-0 ">
      {/* eslint-disable-next-line react/prop-types */}
      {pacientes && pacientes.length ? (
        <>
          <h2 className=" font-black text-center text-3xl">
          Listado de Pacientes
          </h2>
          <p className=" text-lg mt-5 text-center mb-2">
            Administra tus  {""}
            <span className=" text-indigo-600 font-bold">pacientes</span>
          </p>
          <div className=' md:h-screen mt-0 overflow-x-hidden lg:overflow-scroll lg:overflow-x-hidden'>
            {/* eslint-disable-next-line react/prop-types */}        
            {pacientes.map( paciente => (
              <Pacientes
              // eslint-disable-next-line react/prop-types
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              />          
              ))}    
          </div>
        </>      
      ) : (
        <>
          <h2 className=" font-black text-center text-3xl">
            No hay pacientes añadidos
          </h2>
          <p className=" text-lg mt-5 text-center mb-2">
            Añade algun paciente para  {""}
            <span className=" text-indigo-600 font-bold">administrarlo</span>
          </p>
        </>      
      )}     
    </div>
  )
}

export default ListadoPacientes