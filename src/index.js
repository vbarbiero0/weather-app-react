import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
      <div>
        <div className="app-container" id="app-container">
        <Weather defaultCity= "New York" />
        </div>
      </div>
  </React.StrictMode>,
  rootElement
);
