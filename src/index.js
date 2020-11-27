import React from "react";
import ReactDOM from "react-dom";
import WeatherSide from "./WeatherSide";
import InfoSide from "./InfoSide";
import "./App.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <WeatherSide />
    <InfoSide />
  </React.StrictMode>,
  rootElement
);
