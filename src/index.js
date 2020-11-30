import React from "react";
import ReactDOM from "react-dom";
import WeatherSide from "./WeatherSide";
import InfoSide from "./InfoSide";

import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
      <div>
        <div className="app-container" id="app-container">
        <WeatherSide />
        <InfoSide />
        
        </div>
      </div>
  </React.StrictMode>,
  rootElement
);
