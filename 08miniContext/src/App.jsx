import { useState } from 'react'
import './App.css'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>Rohit Prasad Sahoo | Context Provider</h1>
    <Login/>
    <Profile/>

    </UserContextProvider>
  )
}

export default App
