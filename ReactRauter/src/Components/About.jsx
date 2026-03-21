// import React from 'react'
// import { useNavigate } from 'react-router'

// function About() {
//     const navigate = useNavigate();

//     function handelClick()
//     {
//         navigate('/dashboard')
//     }
//   return (
//     <div>About Page

//         <button onClick={handelClick}>Move To Dashboard</button>
//     </div>
//   )
// }

import React from 'react';
import { useNavigate } from 'react-router';

function About() {
  const navigate = useNavigate();
  function handelHook(){
    navigate('/dashboard')
  }
  return (
    <div>About: <br />

      <button onClick={handelHook}
      >Click To DashBoard.</button>
    </div>
  )
}

export default About