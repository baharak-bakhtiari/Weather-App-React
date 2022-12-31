import React, { useState } from "react";

export default function UnitConversion(props) {
  const [temperature, setTemperature] = useState(props.celsius);

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature((props.celsius * 9) / 5 + 32);
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.celsius);
  }

  return (
    <div className="showWeather">
      <div className="weather-info">
        <div id="temperature">{Math.round(temperature)}°</div>
        <div className="weather-description" id="description">
          {props.description}
        </div>
      </div>
      <div className="scale-switcher">
        <button class="celsius" onClick={showCelsius}>
          C
        </button>
        <button class="fahrenheit" onClick={showFahrenheit}>
          F
        </button>
      </div>
    </div>
  );
}
