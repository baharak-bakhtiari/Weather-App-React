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
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];
    return days[day];
  }

  function formatForecastDate() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDate();
    let months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    let month = months[date.getMonth()];
    if (day < 10) return ` 0${day}/${month}`;
    else return ` ${day}/${month}`;
  }

  return (
    <div className="each-day d-flex col-lg-12 col-md-2 col-sm-4 col-xs-2 justify-content-between">
      <div className="day-info">
        <p className="date">
          {day()}
          <span className="d-none d-xl-inline d-lg-inline">
            {formatForecastDate()}
          </span>
        </p>
        <div className="temp-forecast">
          <span className="weather-forecast-temperature-min">
            {minTemperature()}{" "}
          </span>
          <span className="weather-forecast-temperature-max">
            / {maxTemperature()}{" "}
            <strong className="d-none d-xl-inline d-lg-inline">C</strong>
          </span>
        </div>
      </div>
      <img src={iconUrl} alt="weatherIcon" className="forecast-icon" />
    </div>
  );
}
