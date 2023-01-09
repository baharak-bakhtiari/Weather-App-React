import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "de2c40e370d58e257faf07ba4ea95840";
    let lat = props.data.coordinates.lat;
    let lon = props.data.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="all-days row no-gutters d-flex justify-content-between flex-lg-column col-lg-4 col-md-12 col-xs-4">
        {forecast.map(function (dailyForecast, index) {
          if (index > 0 && index < 7) {
            return <WeatherForecastDay data={dailyForecast} />;
          } else return null;
        })}
      </div>
    );
  } else {
    load();
    return null;
  }
}
