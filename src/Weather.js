import React, { useState} from "react";
import axios from "axios";
import "./Weather.css";



export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState ({ ready: false});
  
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready:true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: Math.round(response.data.main.humidity),
      minTemp: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      date: "13 Sept 2020"
    })
    
  }
  
  
if(weatherData.ready) {

  return (
    <div>
    <div className="weather-side">
      <img
        className="background"
        src="https://images.unsplash.com/photo-1496023328036-6792ef27a543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="cloudyBeach"
      />
 
      <div className="date-container" id="date-container">
        <span className="date" id="date">
          <h3 className="date-dayname" id="day-time">
            Tuesday
          </h3>
          <div className="date-day" id="day">
            {weatherData.date}
          </div>
        </span>

        <h6 className="location">
          <i className="fas fa-map-marker-alt" id="location-img"></i>
          <i data-fa-symbol="delete" class="fas fa-trash fa-fw"></i>
          
          <span className="cityName" id="city-name">
            {weatherData.city}
          </span>
          ,
          <span className="countryCode" id="country-code">
            {" "} {weatherData.country}
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
          src={weatherData.iconUrl}
          alt={weatherData.description}
          id="icon"
          width="110px"
          float="left"
        />
      </div>
      <h1 className="weather-temp">
        <span id="current-temp"> {weatherData.temperature} </span>
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
        {weatherData.description}
      </h4>
    </div>
 </div>


  <div className="info-side">
    <div className="info-container" id="info-container">
      <div className="minimumTemp">
        <span className="title"> MIN. TEMP</span>
        <span className="value" id="minimum-temp">
          {weatherData.minTemp}°C
        </span>
      </div>
      <div className="humidity">
        <span className="title"> HUMIDITY</span>
        <span className="value" id="humidity-unit">
          {weatherData.humidity}<span>%</span>
        </span>
      </div>
      <div className="wind">
        <span className="title"> WIND</span>
        <span className="value" id="wind-unit">
         {weatherData.wind} <span>km/h</span>
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
    <div>
        <ul className="location-container" id="location-container">
            <li id="search-form">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <form className="form" action="submit" id="change-location">
             <input
              type="text"
              placeholder="Type a city..."
              autoComplete="off"
              autoFocus="on"
              id="city-input"
             />
          </form>
          </div>
          </li>

        <li id="current-location-btn">
          <button
            type="text"
            placeholder="Current location"
            id="current-location-btn"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACSElEQVRIicWWP2sUQRyG34nxxAtYaTAeXq4waBAV04m5wk7ENtpERLQwiKKgYiWkyAfQIqLFofgBJFYX/AqSaKFWYuIfIiYWCSbeyZ2Pxc7BuM7u7borvjBw/Obd95mZ3ZsZ6T/JpDEDmyQdt61iywuS6pLqxph2vsMLoFXgNdF6BYzmDT0FNGOgHTWBsbygh4DvCaAdbQAH8gA/SwHtaDYrtBIRPA3st+2ep/8nUM4CPusJfeLxzXh8Z+Kye7qwd3pqTz21GU9tVxbwiqc2kBDS6JIdLWDUs4RfgD2OZwhY9viOxWXH7lxAQdInSdtDXesKdisp2MX6Qv0rkkrGmB9JJhgFvxvxZcfpzl8DHfAw0EoBbQHDmcEW/jAFuJYL1IIrBFthN60Dg7mBLfxWAvDNXKEW3AvMxUDngN7cwRY+BKx6oN/I8YPqAUbsEk849XEPeNzpn7DPjADJbzhAEbgCLDrBLaDqeGpOX82pV/n9r7cAXAa2doMeBT6GZtMG3gBTocE9t63o1Kestx3K+AAciYKWgTXHPA9cBPoj/CWgFNHXb5f8hZO3Cuz2ma85puup3k+EAAPccHKv+kwnHcNbYAzYnAFaAE4D75zcE1Gjexx6N0vAfYKbyN4Es9sHnAMeAJ9DWY9cvwk/LOmSpNuSdnjym5KWJH1VcND3SCooODYH7O+wliVNSpo2xhA3eAF9wAVgFmiQXg2gDpwHwmf1nzOOGMQWSYclHZQ0KKksqShpm7WsSdqQ9F7SoqSXkuYzXQL+pX4BZSKNh0/Ef64AAAAASUVORK5CYII="
              id="current-location-icon"
              alt="location-pin"
            />
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
  );

} else {

  const apiKey= "094780c710fa4efd669f0df8c3991927";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);


  return "Loading..."
}

}

