import React, { useState } from "react";
import "../Styles/Weather.css";

const WeatherSeatchForm = props => {
  const [value, setvalue] = useState("");

  function handlechange(e) {
    setvalue(e.target.value);
  }
  function resetInput() {
    setvalue("");
  }
  return (
    <>
      <div className="row">
        <div className="col l8 m12 s12 offset-l2  searchInput">
          <nav>
            <div className="nav-wrapper">
              <form onSubmit={props.loaderWeather}>
                <div
                  className="input-field"
                  style={{ backgroundColor: "#fbe9e7" }}
                >
                  <input
                    className="mainInput"
                    style={{ color: "#424242" }}
                    id="search"
                    type="search"
                    required
                    name="city"
                    value={value}
                    onChange={handlechange}
                    placeholder="Insert your City"
                  />
                  <label className="label-icon" htmlFor="search">
                    <i className="material-icons" style={{ color: "#ff9e80" }}>
                      search
                    </i>
                  </label>
                  <i
                    className="material-icons"
                    style={{ color: "#ff9e80" }}
                    onClick={resetInput}
                  >
                    close
                  </i>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default WeatherSeatchForm;
