import React from "react";
import "./style.css";

function Weather(props) {
  const { data, day } = props;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div>
      <h3 className="day-title">{days[day]}</h3>
      <div className="day-container">
        {data.length === 0 ? (
          <h4>No data!</h4>
        ) : (
          data.map((ele) => {
            let date = new Date(ele.dt_txt);
            let icon;

            if (ele.weather[0].main === "Clouds") {
              icon = "wi-cloud.svg";
            } else if (ele.weather[0].main === "Rain") {
              icon = "wi-rain.svg";
            } else if (ele.weather[0].main === "Clear") {
              icon = "wi-day-sunny.svg";
            }

            return (
              <div className="detail-container">
                <div key={data.indexOf(ele)}>
                  <h4>{date.getHours()}:00</h4>
                  <img
                    src={icon}
                    alt="weather"
                    height="100px"
                    width="100px"
                  ></img>
                  <br />
                  <h4> {(ele.main.temp - 273.15).toFixed(2)} ℃</h4>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Weather;
