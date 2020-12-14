import React, { useState} from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";



export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState ({ ready: false});
  const [city,setCity] = useState(props.defaultCity)

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
      date: new Date(response.data.dt * 1000),
    });
  }
  
  function handleSubmit(event) {
  event.preventDefault();

  }

  function handleCityChange(event) {

  }

if(weatherData.ready) {

  return (
    <div className="Weather" id="Weather-js">
      <WeatherInfo data={weatherData}/>
      <ul className="location-container" id="location-container">
            <li id="search-form">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <form className="form" 
                action="submit" 
                id="change-location" 
                onSubmit={handleSubmit}>
             <input
              type="text"
              placeholder="Type a city..."
              autoComplete="off"
              autoFocus="on"
              id="city-input"
              onChange={handleCityChange}
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
     
  );

} else {

  const apiKey= "094780c710fa4efd669f0df8c3991927";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);


  return "Loading..."
}

}

