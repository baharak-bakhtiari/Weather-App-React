import React from "react";

export default function WeatherForecastDay(props) {
  let iconUrl = `/icons/weather/${props.data.weather[0].icon}.webp`;

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <div className="each-day d-flex">
      <div className="day-info d-flex flex-column">
        <p className="date">
          {day()}
          <span>24/11</span>
        </p>
        <div className="temp-forecast">
          <span className="weather-forecast-temperature-min">
            {minTemperature()}{" "}
          </span>
          <span className="weather-forecast-temperature-max">
            / {maxTemperature()} <strong>C</strong>
          </span>
        </div>
      </div>
      <img src={iconUrl} alt="weatherIcon" />
    </div>
  );
}
