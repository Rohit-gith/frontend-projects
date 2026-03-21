import { useState } from "react";
import ChildA from "./Components/ChildA";
import ChildB from "./Components/ChildB";

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Cuttack");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🌦️ Weather App</h1>

      {/* 🔍 Search Box */}
      <input
        type="text"
        value={city}
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />

      <ChildA sendDataToParent={setData} city={city} />

      <hr />

      <ChildB data={data} />
    </div>
  );
}

export default App;