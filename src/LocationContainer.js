import React from "react";
import "./LocationContainer.css";

export default function LocationContainer() {
  return (
    <div>
      <div className="row" id="search-location">
        <div className="col-10">
          <form action="submit" id="change-location">
            <input
              type="text"
              placeholder="Type a city..."
              autocomplete="off"
              autofocus="on"
              id="city-input"
            />
          </form>
        </div>

        <div className="col-2" id="current-location-btn">
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
        </div>
      </div>
    </div>
  );
}
