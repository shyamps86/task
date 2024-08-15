import React, { useContext } from 'react';
import { Context } from '../context/createContext';
const View = () => {
  const { formData } = useContext(Context);
  console.log(formData)
  if (!formData) {
    return <p>No data has been submitted yet.</p>;
  }

  return (
  <div className='h-screen flex items-center justify-center bg-gray-600'>
      <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-10'>
          <h2 className=' text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Submitted Data</h2>
          <p>Name: {formData.name}</p> <br/>
          <p className='font-normal text-gray-700 dark:text-gray-400'>Gender: {formData.gender}</p> <br/>
          <p>Category: {formData.category}</p>
          <p>Interests: {formData.interests}</p>
          <p>Agreed to Terms: {formData.terms ? 'Yes' : 'No'}</p>
    </div>
  </div>
  );
};

export default View;
