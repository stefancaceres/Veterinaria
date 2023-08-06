// eslint-disable-next-line react/prop-types, no-unused-vars
function Pacientes({paciente, setPaciente}) {
    // eslint-disable-next-line react/prop-types
    const{nombreM, nombreP, email, numero, fechaIn, sintomas}=paciente

  return (
    <div className="m-3 bg-white shadow-md px-5 py-5 rounded-xl ">
        <p className=" font-bold mb-3 text-gray-700 ">
          Nombre del paciente: {""}
          <span className="font-normal  normal-case">{nombreM}</span>
        </p>
        <p className=" font-bold mb-3 text-gray-700">
          Nombre del propietario: {""}
          <span className="font-normal  normal-case">{nombreP}</span>
        </p>
        <p className=" font-bold mb-3 text-gray-700">
          Email del propietario: {""}
          <span className=" font-normal normal-case">{email}</span>
        </p>
        <p className=" font-bold mb-3 text-gray-700">
          Numero de contacto: {""}
          <span className="font-normal  normal-case">{numero}</span>
        </p>
        <p className=" font-bold mb-3 text-gray-700">
          Fecha de ingreso: {""}
          <span className="font-normal  normal-case">{fechaIn}</span>
        </p>
        <p className=" font-bold  text-gray-700">
          sintomas: {""}
          <span className="font-normal  normal-case">{sintomas}</span>
        </p>
        <div className="mt-5 flex justify-evenly">
            <button 
            type="button"
            className="py-2 px-5 bg-indigo-600 hover:bg-indigo-800 rounded-lg text-white font-bold"
            onClick={()=>setPaciente(paciente)}
            >
                Editar
            </button>

            <button 
            type="button"
            className=" py-2 px-5  bg-red-500 hover:bg-red-800 rounded-lg text-white font-bold"
            >
                Eliminar
            </button>
        </div>
      </div>
  )
}

export default Pacientes