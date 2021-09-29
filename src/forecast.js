import React, { useState } from "react";
import "./forecast.css";
import axios from "axios";
import ForecastDays from "./forecastDays";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col">
            <ForecastDays
              data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "91dfb81ac7d5ccde305914fa015a1604";
    let lat = props.coordinate.lat;
    let lon = props.coordinate.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?
lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
