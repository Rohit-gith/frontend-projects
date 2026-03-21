import React from 'react'
import { useNavigate } from 'react-router'

function Dashboard() {
    const navigate = useNavigate();
    function handelHook()
    {
        navigate('/')
    }
  return (
    <div>Dashboard
        <button onClick={handelHook}>  Move to Home</button>
    </div>
  )
}

export default Dashboard