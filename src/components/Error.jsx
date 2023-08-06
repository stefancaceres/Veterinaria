// eslint-disable-next-line no-unused-vars
import {useState,} from 'react'

// eslint-disable-next-line react/prop-types
function Error({mensaje}) {
  return (
    <div>
        <div className=" bg-red-500 text-center p-3 font-bold rounded-md mb-3 text-white">
              <p>
                {mensaje}
              </p>
            </div>
    </div>
  )
}

export default Error