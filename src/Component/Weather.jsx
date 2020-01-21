import React from "react";
import "./../Styles/Weather.css";
const Weather = props => {
  return (
    <div>
      <div className="row" style={{ marginBottom: 0 }}>
        <div className="col s12 m12 l6 Weatherdetails">
          <span className="temp">{props.temp}°</span>
          <div className="minMaxTemp">
            <span style={{ fontSize: 25 }}>
              <i className="large material-icons" style={{ color: "#44a9fb" }}>
                arrow_drop_down
              </i>{" "}
              {props.temp_max}°
            </span>
            <span style={{ fontSize: 25 }}>
              <i className="large material-icons" style={{ color: "#ef5350" }}>
                arrow_drop_up
              </i>{" "}
              {props.temp_min}°
            </span>
          </div>
          <div className="humiditywindPressure">
            <div>
              <i
                className="medium material-icons"
                style={{ color: "#bbdefb", paddingRight: 10 }}
              >
                opacity
              </i>
              humidity :{" "}
              <span style={{ fontSize: 24, paddingLeft: 8 }}>
                {props.humidity}
              </span>
            </div>
            <div>
              <i
                className="medium material-icons"
                style={{ color: "#e3f2fd", paddingRight: 10 }}
              >
                toys
              </i>
              Wind :{" "}
              <span style={{ fontSize: 24, paddingLeft: 8 }}>{props.wind}</span>
            </div>
            <div>
              <i
                className="medium material-icons"
                style={{ color: "#fff3e0", paddingRight: 10 }}
              >
                timelapse
              </i>
              pressure :{" "}
              <span style={{ fontSize: 24, paddingLeft: 8 }}>
                {props.pressure}
              </span>
            </div>
          </div>
        </div>
        <div className="col s12 m12 l6">
          <img
            src={require(`./../../public/assets/animated/${props.icon}.svg`)}
            alt="Weather Type Animation"
            className="animationIcon"
          />
          <h1 className="Weatherdesc">{props.description}</h1>
        </div>
      </div>
    </div>
  );
};

export default Weather;
