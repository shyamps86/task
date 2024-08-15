import React, { useState, useContext } from 'react';
import { Context } from '../context/createContext';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const { formData,setFormData } = useContext(Context);
  const [formState, setFormState] = useState({
    name: '',
    gender: '',
    category: '',
    interests: '',
    terms: false,
  });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState({
      ...formState,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formState);
    console.log(formData)
    navigate('/success');
  };
  console.log(formData)
  return (
    <div className='h-screen flex items-center justify-center bg-gray-600'>
        <div className='w-full max-w-xs'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-3'>Name:</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200'
            type="text" name="name" value={formState.name} onChange={handleChange} required />
          </div>

          <div>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4" for="grid-state'>Gender:</label>
            <div className='relative'>
                <select className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state' name="gender" value={formState.gender} onChange={handleChange} required>
                    <option value="">Select Gender:</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-10" for="grid-state'>Category:</label>
            <div className='relative'>
                <select className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state' name="category" value={formState.category} onChange={handleChange} required>
                  <option value="">Select Category</option>
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className='block text-gray-700 text-sm font-bold mb-2' >Interests:</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="interests" value={formState.interests} onChange={handleChange} required />
          </div>

          <div>
            <label className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              <input className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
                type="checkbox"
                name="terms"
                checked={formState.terms}
                onChange={handleChange}
                required
              />
              I agree to the terms and conditions
            </label>
          </div>

          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50">
                submit
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default Home;
