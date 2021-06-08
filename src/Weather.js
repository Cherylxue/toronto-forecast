import React from "react";

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
    <>
      <h3>{days[day]}</h3>
      {data.map((ele) => {
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
          <div key={data.indexOf(ele)}>
            Time:{date.getHours()}:{date.getMinutes()}
            <br />
            Weather:{ele.weather[0].main}
            <br />
            Temperature:{(ele.main.temp - 273.15).toFixed(2)} Celsius
            <br />
            <img src={icon} alt="weather" height="100px" width="100px"></img>
          </div>
        );
      })}
    </>
  );
}

export default Weather;
