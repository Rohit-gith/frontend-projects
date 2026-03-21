import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './componets/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h2 className='bg-pink-400 text-green  rounded-xl'>Tailwind Ruuning.</h2>
    
    
    <Card  btnText="Click Me" />
    
    
   </>
  )
}

export default App
