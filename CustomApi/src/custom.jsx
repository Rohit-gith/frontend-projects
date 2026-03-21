import { useState, useEffect } from "react";

const Custom = () => {
  // Currency State
  const [data, setData] = useState(null);

  // Image State
  const [image, setImage] = useState("https://picsum.photos/400/300");

  // Fetch Currency API
  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => console.log(err));
  }, []);

  // Change Image
  const changeImage = () => {
    setImage(`https://picsum.photos/400/300?random=${Math.random()}`);
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "tomato" }}>🔥 My React Mini Project</h1>

      {/* Currency Section */}
      <div
        style={{
          marginBottom: "30px",
          padding: "20px",
          border: "2px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <h2>💰 Currency API</h2>

        <h3>
          USD → INR: {data?.usd?.inr || "Loading..."}
        </h3>

        <details>
          <summary>View Full JSON</summary>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </details>
      </div>

      {/* Image Section */}
      <div
        style={{
          padding: "20px",
          border: "2px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <h2>🖼️ Random Image</h2>

        <img
          src={image}
          alt="Random"
          style={{ borderRadius: "10px", marginBottom: "10px" }}
        />

        <br />

        <button
          onClick={changeImage}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Change Image
        </button>
      </div>
    </div>
  );
}
export default Custom;