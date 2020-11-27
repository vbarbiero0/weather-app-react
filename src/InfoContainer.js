import React from "react";
import "./InfoContainer.css";

export default function InfoContainer() {
  return (
    <div>
      <div className="minimumTemp">
        <span className="title"> MIN. TEMP</span>
        <span className="value" id="minimum-temp">
          12
        </span>
      </div>
      <div className="humidity">
        <span className="title"> HUMIDITY</span>
        <span className="value" id="humidity-unit">
          34 <span>%</span>
        </span>
      </div>
      <div className="wind">
        <span className="title"> WIND</span>
        <span className="value" id="wind-unit">
          0 <span>km/h</span>
        </span>
      </div>
    </div>
  );
}
