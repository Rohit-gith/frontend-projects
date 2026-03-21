function ChildB({ data }) {
  return (
    <div>
      <h2>🌍 Weather Info</h2>

      {!data ? (
        <p style={{ color: "red" }}>⚠️ API not working / Invalid city</p>
      ) : (
        <div>
          <p>City: {data.name}</p>
          <p>Temperature: {data.main.temp} °C</p>
          <p>Weather: {data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default ChildB;