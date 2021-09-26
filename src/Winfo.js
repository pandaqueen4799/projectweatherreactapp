import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./weatherIcon";

export default function WInfo(props) {
    return (
      <div className="Winfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
                <WeatherIcon
                 code={props.data.icon} />
              <span className="temp">
                {Math.round(props.data.temp)}</span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
}