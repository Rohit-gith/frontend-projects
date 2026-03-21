import { useEffect } from "react";

function ChildA({ sendDataToParent, city }) {
  const API_KEY = "4d71dafe02629fcfa20f154cb443dd1b";

  useEffect(() => {
    if (!city) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("API ERROR");
        }
        return res.json();
      })
      .then((data) => {
        console.log("API SUCCESS:", data);
        sendDataToParent(data);
      })
      .catch((err) => {
        console.log("API FAILED:", err);
        sendDataToParent(null); // reset data
      });
  }, [city, sendDataToParent]);

  return <h2>🌤️ Fetching Weather...</h2>;
}

export default ChildA;