import React from "react";

import "./DateContainer.css";

export default function DateContainer() {
  return (
    <div>
      <div className="date-container" id="date-container">
        <span className="date" id="date">
          <h2 className="date-dayname" id="day-time">
            Tuesday
          </h2>
          <div className="date-day" id="day">
            12 Sept 2020
          </div>
        </span>

        <h6 className="location">
          <i className="fas fa-map-marker-alt" id="location-img"></i>
          <span className="cityName" id="city-name">
            &nbsp; Montreal
          </span>
          ,
          <span className="countryCode" id="country-code">
            CA
          </span>
        </h6>
      </div>
    </div>
  );
}
