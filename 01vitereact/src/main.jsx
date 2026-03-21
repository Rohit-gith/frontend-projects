import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Pupa from './pupa.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pupa />
    <App />
  </StrictMode>,
)
