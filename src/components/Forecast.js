import React, { useState } from "react";
import axios from "axios";
import moment from "moment";

const Forecast = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=30c07ebba8effda9650fa3a234bb351f`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  // const nowInLocalTime = Date.now() + 1000 * data.timezone;
  // var d = (new Date()+data.timezone*1000)
  // console.log(d)

  return (
    <>
      {/* Add Weather icon here and place at proper position */}

      <div className="card">
        <div className="search">
          <div className="time">{moment().format('LT')}</div>
          
          <div>
            <input
              type="text"
              placeholder="Search city"
              className="search-icon"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyPress={searchLocation}
            />
          </div>
        </div>

        <div className="main-details">
          <div className="location">{data.name}</div>
          <div className="temperature">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? (
              <p>
                {data.weather[0].description.charAt(0).toUpperCase() +
                  data.weather[0].description.slice(1)}
              </p>
            ) : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="other-details">
            <div className="humidity">
              {data.main ? <p>Humidity: {data.main.humidity}%</p> : null}
            </div>
            <div className="wind-speed">
              {data.wind ? (
                <p>Wind Speed: {data.wind.speed.toFixed()} mph</p>
              ) : null}
            </div>
            <div className="feels-like">
              {data.main ? (
                <p>Feels Like: {data.main.feels_like.toFixed()}°C</p>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Forecast;
