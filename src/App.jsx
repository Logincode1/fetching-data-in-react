import { useState } from "react";
import * as weatherService from "./services/weatherService";
import "./App.css";

const App = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState({
    temp: "",
    condition: "",
  });

  const fetchWeather = async (city) => {
    const weatherData = await weatherService.show(city);
    setWeather({
      temp: weatherData.current.temp_f,
      condition: weatherData.current.condition.text,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather(city);
  };

  return (
    <>
      <h1>Weather API</h1>
      <h3>Current weather: {weather.temp}</h3>
      <h3>Condition: {weather.condition}</h3>
      <form onSubmit={handleSubmit}>
        <input name="city" value={city} onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Get Weather Data</button>
      </form>
    </>
  );
};

export default App;
