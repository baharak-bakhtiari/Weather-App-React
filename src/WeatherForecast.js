import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse() {
    console.log(props.data);
  }

  let iconUrl = `/icons/weather/${props.data.icon}.webp`;
  let apiKey = "de2c40e370d58e257faf07ba4ea95840";
  let lat = props.data.coordinates.lat;
  let lon = props.data.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="each-day">
      <div className="each-day-info">
        <p className="date">
          Saturday
          <span>24/11</span>
        </p>
        <div className="temp-forecast">
          <span className="weather-forecast-temperature-min">12° </span>
          <span className="weather-forecast-temperature-max">
            / 15° <strong>C</strong>
          </span>
        </div>
      </div>
      <img src={iconUrl} alt="prediction" />
    </div>
  );
}
