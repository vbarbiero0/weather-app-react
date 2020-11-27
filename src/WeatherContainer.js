import React from "react";
import "./WeatherContainer.css";

export default function WeatherContainer() {
  return (
    <div className="weather-container">
      <div className="weather-icon" id="weather-icon">
        <img
          className="icon"
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="Clear"
          id="icon"
          width="80px"
          float="left"
        />
      </div>
      <h1 className="weather-temp">
        <span id="current-temp"> 14 </span>
        <span className="alternate" id="alternate">
          <a
            href="https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=45e0d74a1bc7be61b894ed215a9def13&units=metric"
            id="celsius"
            className="active"
          >
            °C
          </a>
          |
          <a
            href="https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=45e0d74a1bc7be61b894ed215a9def13&units=metric"
            id="fahrenheit"
          >
            °F
          </a>
        </span>
      </h1>
      <h3 className="weather-description" id="weather-description">
        Rain
      </h3>
    </div>
  );
}
