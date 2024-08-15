import React,{useState} from 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from './components/router';
import { Context } from './context/createContext';
function App() {
  const [formData,setFormData]=useState({});
  console.log(formData);
  return (
    <div>
      <Context.Provider value={{formData,setFormData}}>
           <RouterProvider router={router}/>
      </Context.Provider>
      
    </div>
  );
}

export default App;
