import React, { useState, useEffect } from "react";
import WeatherForcastDay from "./weatherForcastDay";
import "./weatherForcast.css";
import axios from "axios";
export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForcast] = useState(null);
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForcast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="weatherForcast">
        <div className="row">
          {forcast.map(function (dailyforcast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForcastDay data={dailyforcast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "cb9a945279189ab6c0a6818266025d73";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "null";
  }
}
