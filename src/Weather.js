import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="row search-box">
        <form className="input-container">
          <i className="fa-solid fa-location-dot" id="locationButton"></i>
          <input
            className="search-input"
            type="text"
            placeholder="search for city"
            autocomplete="off"
            autofocus="off"
          />
          <i className="fa-solid fa-magnifying-glass" id="search-btn"></i>
        </form>
      </div>
      <div className="row Weather">
        <div className="col-8 currentSituation">
          <div className="general-info">
            <div className="info">
              <div className="city-info">
                <span className="city-name">Stuttgart</span>
                <span className="current-date">Saturday 23:13</span>
              </div>
              <div className="info-section">
                <div className="temp-info">
                  <span id="temperature">15</span>
                  <span className="weather-description" id="description">
                    clear sky
                  </span>
                </div>
                <div className="scale-switcher">
                  <button className="celsius">C</button>
                  <button className="fahrenheit">F</button>
                </div>
              </div>
            </div>
            <div className="weather-image">
              <img src="images/f03d.png" alt="weatherImage" id="weather-icon" />
            </div>
          </div>
          <div className="detail-info">
            <div className="detail-title">
              <div className="detail-description">
                <p className="detail-name">wind</p>
                <p className="detail-value" id="wind">
                  7.2 m/h
                </p>
              </div>
              <img
                src="images/Wind.svg"
                alt="wind-icon"
                className="detail-icon"
              />
            </div>
            <div className="detail-title">
              <div className="detail-description">
                <p className="detail-name">humidity</p>
                <p className="detail-value" id="humidity">
                  85%
                </p>
              </div>
              <img
                src="images/Humidity.svg"
                alt="humidity-icon"
                className="detail-icon"
              />
            </div>
            <div className="detail-title">
              <div className="detail-description">
                <p className="detail-name">pressure</p>
                <p className="detail-value" id="pressure">
                  1009 hPa
                </p>
              </div>
              <img
                src="/images/Pressure.svg"
                alt="pressure-icon"
                className="detail-icon"
              />
            </div>
          </div>
        </div>
        <div className="col-4" id="forecast"></div>
      </div>
      <p className="writer">
        Coded by
        <a
          href="https://github.com/The-little-spring"
          target="_blank"
          rel="noreferrer"
        >
          Baharak Bakhtiari
        </a>
      </p>
    </div>
  );
}
