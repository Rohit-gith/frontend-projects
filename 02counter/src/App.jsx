import React from "react";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(100); //hooks

  // const addValue () => {
  //   setCounter((prevCounter) => prevCounter + 1);
  // }
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);

    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>Chai aur React</h1>

      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>

      <br />

      <button onClick={removeValue}>Remove Value {counter}</button>

      <p>Footer: {counter}</p>
    </>
  );
}
export default App;
