import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";
import LoadingSpinner from "./LoadingSpinner.js";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherdata] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    return setWeatherdata({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      date: new Date(),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "de2c40e370d58e257faf07ba4ea95840";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function showPosition(position) {
    let apiKey = "de2c40e370d58e257faf07ba4ea95840";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getLiveLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="search-box">
          <form className="input-container" onSubmit={handleSubmit}>
            <i
              className="fa-solid fa-location-dot"
              id="locationButton"
              onClick={getLiveLocation}
            ></i>
            <input
              className="search-input"
              type="text"
              placeholder="search for city"
              autoComplete="off"
              autoFocus="on"
              onChange={updateCity}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              id="search-btn"
              onClick={handleSubmit}
            ></i>
          </form>
        </div>
        <div className="weather justify-content-between d-md-flex flex-xl-row flex-lg-row flex-md-column">
          <WeatherInfo data={weatherData} />
          <WeatherForecast data={weatherData} />
        </div>
        <p className="writer">
          <a
            href="https://github.com/The-little-spring"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/baharak-bakhtiari"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Baharak Bakhtiari
          </a>
        </p>
      </div>
    );
  } else {
    search();
    return <LoadingSpinner />;
  }
}
