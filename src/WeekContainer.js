import React from "react";

import "./WeekContainer.css";

export default function WeekContainer() {
  return (
    <div>
      <div className="week-container">
        <div className="row-1" id="forecast-1">
          <div className="col-3" id="col-3">
            <div className="day-time">12:00</div>
            <img
              className="day-icon"
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="clear"
              id="day-icon"
            />
            <div className="active" id="day-temp">
              <strong> 14°C </strong>
            </div>
          </div>
        </div>
        <div className="row-2" id="forecast-2">
          <div className="col-3" id="col-3">
            <div className="day-time">12:00</div>
            <img
              className="day-icon"
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="clear"
              id="day-icon"
            />
            <div className="active" id="day-temp">
              <strong> 14°C </strong>
            </div>
          </div>
        </div>
        <div className="row-3" id="forecast-3">
          <div className="col-3" id="col-3">
            <div className="day-time">12:00</div>
            <img
              className="day-icon"
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="clear"
              id="day-icon"
            />
            <div className="active" id="day-temp">
              <strong> 14°C </strong>
            </div>
          </div>
        </div>
        <div className="row-4" id="forecast-4">
          <div className="col-3" id="col-3">
            <div className="day-time">12:00</div>
            <img
              className="day-icon"
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="clear"
              id="day-icon"
            />
            <div className="active" id="day-temp">
              <strong> 14°C </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
