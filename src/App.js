import React, { Component } from "react";
import WeatherSeatchForm from "./Component/WeatherSeatchForm";
import "./App.css";
import Weather from "./Component/Weather";
import M from "materialize-css";
const Api_Key = "837aba061da92e3f10c9473945a1d424";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      temp: undefined,
      wind: undefined,
      temp_max: undefined,
      temp_min: undefined,
      humidity: undefined,
      description: undefined,
      pressure: undefined,
      icon: "cloudy",
      loading: false
    };
    this.WeatherIconMatch = {
      Thunderstorm: `thunder`,
      Drizzle: `rainy-4`,
      Rain: `rainy-7`,
      Snow: `snowy-6`,
      Atmosphere: `cloudy`,
      Clear: `night`,
      Clouds: `cloudy`
    };
  }

  CalCelsius = temp => {
    let cell = Math.floor(temp - 273.15);
    return cell;
  };
  WeatherIcon = (icons, iconCode) => {
    switch (true) {
      case iconCode >= 200 && iconCode <= 232:
        this.setState({ icon: this.WeatherIconMatch.Thunderstorm });
        break;
      case iconCode >= 300 && iconCode <= 321:
        this.setState({ icon: this.WeatherIconMatch.Drizzle });
        break;
      case iconCode >= 500 && iconCode <= 531:
        this.setState({ icon: this.WeatherIconMatch.Rain });
        break;
      case iconCode >= 600 && iconCode <= 622:
        this.setState({ icon: this.WeatherIconMatch.Snow });
        break;
      case iconCode >= 701 && iconCode <= 781:
        this.setState({ icon: this.WeatherIconMatch.Atmosphere });
        break;
      case iconCode === 800:
        this.setState({ icon: this.WeatherIconMatch.Clear });
        break;
      case iconCode >= 801 && iconCode <= 804:
        this.setState({ icon: this.WeatherIconMatch.Clouds });
        break;
      default:
        this.setState({ icon: "../assets/animated/cloudy.svg" });
    }
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    this.setState({ loading: true });
    // console.log(e.target.elements.city.value)
    try {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`
      );
      const response = await api_call.json();
      this.setState({
        city: response.name,
        temp: this.CalCelsius(response.main.temp),
        wind: response.wind.speed,
        temp_max: this.CalCelsius(response.main.temp_max),
        temp_min: this.CalCelsius(response.main.temp_min),
        humidity: response.main.humidity,
        description: response.weather[0].description,
        pressure: response.main.pressure,
        loading: false
      });
      this.WeatherIcon(this.WeatherIconMatch, response.weather[0].id);
    } catch (e) {
      this.setState({ loading: false });
      M.toast({
        html: "Wrong city name entered ! ",
        classes: "rounded",
        displayLength: 5000
      });
    }
  };
  render() {
    console.log(this.state.icon);
    return (
      <div className="App">
        <WeatherSeatchForm loaderWeather={this.getWeather} />
        {this.state.city ? (
          <Weather
            city={this.state.city}
            wind={this.state.wind}
            temp_max={this.state.temp_max}
            temp_min={this.state.temp_min}
            humidity={this.state.humidity}
            description={this.state.description}
            temp={this.state.temp}
            pressure={this.state.pressure}
            icon={this.state.icon}
          />
        ) : (
          <>
            <div
              style={{
                display: "grid",
                alighnItems: "center",
                justifyContent: "center",
                justifyItems: "center",
                color: "white",
                paddingTop: 50
              }}
            >
              <h1>Enter your city</h1>
              <div
                style={{
                  display: `${this.state.loading ? "block" : "none"}`,
                  height: 100,
                  width: 100,
                  marginTop: 30
                }}
                className="preloader-wrapper big active"
              >
                <div className="spinner-layer spinner-red-only">
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div>
                  <div className="gap-patch">
                    <div className="circle"></div>
                  </div>
                  <div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
