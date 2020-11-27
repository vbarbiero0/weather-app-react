import React from "react";
import DateContainer from "./DateContainer";
import WeatherContainer from "./WeatherContainer";
import "./WeatherSide.css";

export default function WeatherSide() {
  return (
    <div className="weather-side">
      <img
        className="background"
        src="https://images.unsplash.com/photo-1496023328036-6792ef27a543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="cloudyBeach"
      />
      <div className="inside">
        <DateContainer />
        <WeatherContainer />
      </div>
    </div>
  );
}
