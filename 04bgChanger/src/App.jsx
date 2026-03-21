import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("");

  return (
    <div
      className="h-screen flex items-center justify-center gap-5"
      style={{ backgroundColor: color }}
    >
    
      <button
        onClick={() => setColor("red")}
        className="outline-none px-7 py-1 rounded-3xl text-white shadow-lg bg-red-500"
      >
        Red
      </button>

      <button
        onClick={() => setColor("green")}
        className="outline-none px-6 py-1 rounded-3xl text-white shadow-lg bg-green-500"
      >
        Green
      </button>

      <button
        onClick={() => setColor("blue")}
        className="outline-none px-7 py-1 rounded-3xl text-white shadow-lg bg-blue-500"
      >
        Blue
      </button>

      <button
        onClick={() => setColor("yellow")}
        className="outline-none px-6 py-1.5 rounded-3xl text-white shadow-lg bg-yellow-400"
      >
        Yellow
      </button>

      <button
        onClick={() => setColor("pink")}
        className="outline-none px-7 py-1 rounded-3xl bg-pink-500 text-white"
      >
        Pink
      </button>
      <button
        onClick={() => setColor("black")}
        className="outline-none text-white px-6 py-1.5 bg-black border border-white rounded-3xl"
      >
        Black
      </button>
      <button
        onClick={() => setColor("grey")}
        className="outline-none text-white px-1 py-2 rounded-lg bg-grey border"
      >
        Grey
      </button>
      <br />
      
       </div>
      
  );
}

export default App;
