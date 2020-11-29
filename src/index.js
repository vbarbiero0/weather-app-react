import React from "react";
import ReactDOM from "react-dom";
import WeatherSide from "./WeatherSide";
import InfoSide from "./InfoSide";

import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div className="app-container" id="app-container">
    <WeatherSide />
    <InfoSide />

    <div className="git-link" id="git-link">
    <a href="https://github.com/vbarbiero0/weather-app-react/tree/master" id="git-link">View GITHUB here</a>

    </div>
    </div>
  </React.StrictMode>,
  rootElement
);
