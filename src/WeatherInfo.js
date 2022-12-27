import React from "react";
import FormattedDate from "./FormattedDate.js";
import "./WeatherInfo.css";
import pressureIcon from "./images/Pressure.svg";
import windIcon from "./images/Wind.svg";
import humidityIcon from "./images/Humidity.svg";
//import weatherImage from "./images/icons/weather/13n.webp";

export default function WeatherInfo(props) {
  let iconUrl = `/icons/weather/${props.data.icon}.webp`;
  return (
    <div className="col-8 currentSituation">
      <div className="general-info">
        <div className="info">
          <div className="city-info">
            <span className="city-name">{props.data.city}</span>
            <div className="current-date">
              <FormattedDate date={props.data.date} />
            </div>
          </div>
          <div className="info-section">
            <div className="temp-info">
              <span id="temperature">{Math.round(props.data.temperature)}</span>
              <span className="weather-description" id="description">
                {props.data.description}
              </span>
            </div>
            <div className="scale-switcher">
              <button className="celsius">C</button>
              <button className="fahrenheit">F</button>
            </div>
          </div>
        </div>
        <div className="weather-image">
          <img src={iconUrl} alt="weatherImage" id="weather-icon" />
        </div>
      </div>
      <div className="detail-info">
        <div className="detail-title">
          <div className="detail-description">
            <p className="detail-name">wind</p>
            <p className="detail-value" id="wind">
              {props.data.wind} m/h
            </p>
          </div>
          <img src={windIcon} alt="wind-icon" className="detail-icon" />
        </div>
        <div className="detail-title">
          <div className="detail-description">
            <p className="detail-name">humidity</p>
            <p className="detail-value" id="humidity">
              {props.data.humidity}%
            </p>
          </div>
          <img src={humidityIcon} alt="humidity-icon" className="detail-icon" />
        </div>
        <div className="detail-title">
          <div className="detail-description">
            <p className="detail-name">pressure</p>
            <p className="detail-value" id="pressure">
              {props.data.pressure} hPa
            </p>
          </div>
          <img src={pressureIcon} alt="pressure-icon" className="detail-icon" />
        </div>
      </div>
    </div>
  );
}
