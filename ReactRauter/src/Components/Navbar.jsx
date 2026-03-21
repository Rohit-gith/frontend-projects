import React from 'react'
import { Link } from 'react-router'
import './Navbar.css'
function Navbar() {
  return (
    <div>
        <ol>

            <li>
               <Link to="/">Home</Link>  
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/dashboard">DashBoard</Link> 
            </li>
        </ol>
     </div>
  )
}

export default Navbar