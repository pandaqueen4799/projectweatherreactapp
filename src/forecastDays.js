import React from "react";
import WeatherIcon from "./weatherIcon";

export default function forecastDays(props) {
    function maxTemp() {
        let temp = Math.round(props.data.temp.max);
        return `${temp}°`;
    }

      function minTemp() {
        let temp = Math.round(props.data.temp.min);
        return `${temp}°`;
      }

      function days() {
          let date = new Date(props.data.dt * 1000);
          let day = date.getDay();

          let days = [
            "Mon",
            "Tues",
            "Wed",
            "Thur",
            "Fri",
            "Sat",
            "Sun",
          ];

          return days[day];
      }

    return (
      <div className="forecastDays">
        <div className="forecast-day">{days()}</div>
        <WeatherIcon code=
        {props.data.weather[0].icon} size={45} />
        <br />
        <br />
        <br />
        <div className="forecast-temp">
          <span className="forecast-temp-max">
              {maxTemp()}°</span>{" "}
          <span className="forecast-temp-min">
              {minTemp()}°</span>
        </div>
      </div>
    );
}