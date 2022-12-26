import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./SearchCity.css";

export default function SearchCity(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherdata] = useState({ ready: false });

  function handleResponse(response) {
    return setWeatherdata({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "de2c40e370d58e257faf07ba4ea95840";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="search-box">
      <form className="input-container" onSubmit={handleSubmit}>
        <i className="fa-solid fa-location-dot" id="locationButton"></i>
        <input
          className="search-input"
          type="text"
          placeholder="search for city"
          autocomplete="off"
          autofocus="off"
          onChange={updateCity}
        />
        <i className="fa-solid fa-magnifying-glass" id="search-btn"></i>
      </form>
      <WeatherInfo data={weatherData} />
    </div>
  );
}
