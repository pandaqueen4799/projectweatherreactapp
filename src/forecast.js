import React, { useState } from "react";
import WeatherIcon from "./weatherIcon";
import "./forecast.css";
import axios from "axios";

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
            <div className="forecast-day">
                {forecast[0].dt}
                </div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={45} />
            <br />
            <br />
            <br />
            <div className="forecast-temp">
              <span className="forecast-temp-max">
                  {forecast[0].temp.max}°
                  </span>{" "}
              <span className="forecast-temp-min">
                  {forecast[0].temp.min}°
                  </span>
            </div>
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
