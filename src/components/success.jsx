import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/createContext'
import { useContext } from 'react'
const Success = () => {
  const {formData}=useContext(Context);

  return (
    <div>
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-7" role="alert">
      <span class="block sm:inline">Hey!! </span>
          <strong class="font-bold">{formData.name} </strong>
          <span class="block sm:inline">you have been submitted successfully</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          </span>
      </div>
      <Link to='/view'>
           <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">
                  view submission</button>
        </Link>
        <Link to='/'>
           <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  create new</button>
        </Link>
    </div>
     
  )
}

export default Success