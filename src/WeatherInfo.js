import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props) {

return (

<div className="WeatherInfo" id="WeatherInfo" >
  <div className="weather-side">
      <img
        className="background"
        src="https://images.unsplash.com/photo-1496023328036-6792ef27a543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="cloudyBeach"
      />
 
      <div className="date-container" id="date-container">
        <FormattedDate date={props.data.date} />

        <h6 className="location">
        <img className="resize" 
          src="https://img.icons8.com/material-sharp/24/ffffff/marker.png"
          id="location-img" 
          alt="current location"
          />
          <span className="cityName" id="city-name">
            {props.data.city}
          </span>
          , &nbsp; 
          <span className="countryCode" id="country-code">
            {props.data.country}
          </span>
        </h6>
      </div>
      <span className="link" id="link">
              <a href="https://github.com/vbarbiero0/weather-app-react" >Open-source codes</a>
               , by Vanessa Barbiero
        </span>
    
  

    <div className="weather-container">
      <div className="weather-icon" id="weather-icon">
        <img
          className="icon"
          src={props.data.iconUrl}
          alt={props.data.description}
          id="icon"
          width="110px"
          float="left"
        />
      </div>
      <h1 className="weather-temp">
        <span id="current-temp"> {props.data.temperature} </span>
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
      <h4 className="capitalize" id="weather-description">
        {props.data.description}
      </h4>
    </div>
 </div>


  <div className="info-side">
    <div className="info-container" id="info-container">
      <div className="minimumTemp">
        <span className="title"> MIN. TEMP</span>
        <span className="value" id="minimum-temp">
          {props.data.minTemp}°C
        </span>
      </div>
      <div className="humidity">
        <span className="title"> HUMIDITY</span>
        <span className="value" id="humidity-unit">
          {props.data.humidity}<span>%</span>
        </span>
      </div>
      <div className="wind">
        <span className="title"> WIND</span>
        <span className="value" id="wind-unit">
         {props.data.wind} <span>km/h</span>
        </span>
      </div>
      </div>
    

    <div>
      <div className="week-container" id="week-container">
        <div className="row" id="forecast">
          <div className="col-3" id="col-3">
            <div className="day-time">12:00</div>
            <img
              className="day-icon"
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="clear"
              id="day-icon"
            />
            <div className="day-temp" id="day-temp">
              <strong> 14°C </strong>
            </div>
          </div>
        </div>
        <div className="row" id="forecast">
          <div className="col-3" id="col-3">
            <div className="day-time">12:00</div>
            <img
              className="day-icon"
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="clear"
              id="day-icon"
            />
            <div className="day-temp" id="day-temp">
              <strong> 14°C </strong>
            </div>
          </div>
        </div>
        <div className="row" id="forecast">
          <div className="col-3" id="col-3">
            <div className="day-time">12:00</div>
            <img
              className="day-icon"
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="clear"
              id="day-icon"
            />
            <div className="day-temp" id="day-temp">
              <strong> 14°C </strong>
            </div>
          </div>
        </div>
        <div className="row" id="forecast">
          <div className="col-3" id="col-3">
            <div className="day-time">12:00</div>
            <img
              className="day-icon"
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="clear"
              id="day-icon"
            />
            <div className="day-temp" id="day-temp">
              <strong> 14°C </strong>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  </div>
);
}