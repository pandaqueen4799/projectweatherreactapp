import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./weatherIcon";
import WeatherTemp from "./weatherTemp";

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
                 code={props.data.icon}
                 size={60} />
                 <WeatherTemp celsius={props.data.temp} />
            </div>
          </div> 
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
}