// eslint-disable-next-line no-unused-vars
import {useState, useEffect} from 'react'

// eslint-disable-next-line react/prop-types
function Error({mensaje}) {
  return (
    <div>
        <div className=" bg-green-500 text-center p-3 font-bold rounded-md mb-3 text-white">
              <p>
                {mensaje}
              </p>
            </div>
    </div>
  )
}

export default Error