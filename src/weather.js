import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
          <div className="row">
              <div className="col-9">
        <input
          type="search"
          placeholder="Enter a city..."
          className="form-control"
        />
        </div>
        <div className="col-3">
        <input type="submit" 
        value="Search" 
        className="btn btn-primary" />
        </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wed 07:00</li>
        <li>Ranning</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="Rainng"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 5 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
