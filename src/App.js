import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);
  const [description, setDescription] = useState(null);

  function showForecast(response) {
    setLoaded(true);
    setTemp(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setDescription(response.data.weather[0].description);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "de2c40e370d58e257faf07ba4ea95840";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <a
        href="https://github.com/The-little-spring/Weather-App-React"
        target="_blank"
        rel="noreferrer"
      >
        Github link
      </a>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div>Weather is {city}:</div>
        <ul>
          <li>temperature: {temp}℃</li>
          <li>{description}</li>
          <li>humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
