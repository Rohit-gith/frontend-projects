import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Router imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages / Components
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: "", element: <Home /> }, // default route
      { path: "about", element: <About /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)