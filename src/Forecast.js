import React, { useEffect, useState } from "react";
import Weather from "./Weather";

function Forecast() {
  const [data, setData] = useState([]);
  const today = new Date().getDate();
  const day = new Date().getDay();
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=toronto&appid=f5d1a9b91c10ba912e3f13a885e2a072"
    ).then((res) =>
      res.json().then((res) => {
        setData(res.list);
      })
    );
  }, []);

  return (
    <>
      <div className="day-one">
        <Weather
          key="0"
          data={data.filter(
            (element) => new Date(element.dt_txt).getDate() === today
          )}
          day={day}
        />
      </div>
      <div className="day-two">
        <Weather
          data={data.filter(
            (element) => new Date(element.dt_txt).getDate() === today + 1
          )}
          day={(day + 1) % 7}
        />
      </div>
      <div className="day-three">
        <Weather
          data={data.filter(
            (element) => new Date(element.dt_txt).getDate() === today + 2
          )}
          day={(day + 2) % 7}
        />
      </div>
      <div className="day-four">
        <Weather
          data={data.filter(
            (element) => new Date(element.dt_txt).getDate() === today + 3
          )}
          day={(day + 3) % 7}
        />
      </div>
      <div className="day-five">
        <Weather
          data={data.filter(
            (element) => new Date(element.dt_txt).getDate() === today + 4
          )}
          day={(day + 4) % 7}
        />
      </div>
    </>
  );
}

export default Forecast;
