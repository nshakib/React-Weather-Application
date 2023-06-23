import React from "react";
import "../assets/displayweather.css";

const DisplayWeather = ({ data }) => {
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div className="displayweather">
      <div className="maincard">
        <span className="cardtitle">
          {data.name}. {data.sys.country}.Weather
        </span>
        <span className="cardsubtitle">
          As of {new Date().toLocaleDateString()}
        </span>

        <h1>
          {" "}
          {Math.floor(data.main.temp - 273.15)}
          <sup>0</sup>
        </h1>
        <span className="weather-main">{data.weather[0].main}</span>
        <img className="weather-icon" src={iconurl} alt="" srcSet="" />
        <span className="weather-description">
          {" "}
          {data.weather[0].description}
        </span>
      </div>
      <div className="weatherdetails">
        {data.cod !== 404 ? (
          <div>
            <div className="section1">
              <table className="weather-table">
                <tbody>
                  <tr>
                    <th>High/Low</th>
                    <th>Humidity</th>
                    <th>Pressure</th>
                    <th>Visibility</th>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        {Math.floor(data.main.temp_max - 273.15)}/
                        {Math.floor(data.main.temp_min - 273.15)}
                      </span>
                    </td>
                    <td>
                      <span>{data.main.humidity} %</span>
                    </td>
                    <td>
                      <span>{data.main.pressure} hPa</span>
                    </td>
                    <td>
                      <span>{data.visibility / 1000} Km</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="section2">
              <table className="weather-table">
                <thead>
                  <tr>
                    <th>Wind</th>
                    <th>Wind Direction</th>
                    <th>Sunrise</th>
                    <th>Sunset</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>
                        {Math.floor((data.wind.speed * 18) / 5)} km/hr
                      </span>
                    </td>
                    <td>
                      <span>
                        {data.wind.deg}
                        <sup>o</sup> deg
                      </span>
                    </td>
                    <td>
                      <span>
                        {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                      </span>
                    </td>
                    <td>
                      <span>
                        {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="maincard">
            <h2>{data.message}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayWeather;
