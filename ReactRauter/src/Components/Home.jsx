import React from 'react'
import { useNavigate } from 'react-router'

function Home() {
    const navigate =useNavigate();
    function handelHook(){
        navigate('/about')
    }
  return (
    <div>
        Home page
        <button onClick={handelHook}>Move to About</button>
    </div>
  )
}

export default Home