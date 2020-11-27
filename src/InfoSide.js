import React from "react";
import InfoContainer from "./InfoContainer";
import WeekContainer from "./WeekContainer";
import LocationContainer from "./LocationContainer";
import "./InfoSide.css";

export default function InfoSide() {
  return (
    <div>
      <div className="info-side">
        <InfoContainer />
        <WeekContainer />
        <LocationContainer />
      </div>
    </div>
  );
}
