import { useState } from 'react'
import './App.css'
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import { Link } from 'react-router-dom';

const router =createBrowserRouter(
  [
    { 
      path : "/" ,
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path: "/about" ,
      element: 
       <div>
        <Navbar/>
        <About/>
       </div>
    },
    {
      path: "/dashboard", 
      element:
       <div>
        <Navbar/>
        <Dashboard/>
       </div>
    }
  ]
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
