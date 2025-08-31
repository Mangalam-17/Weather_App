import SearchBox from "./SearchBox";
import InfoBox from "./Infobox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Jaipur",
    feelsLike: 34.45,
    humidity: 67,
    maxTemp: 30.05,
    minTemp: 30.05,
    temp: 30.05,
    weather: "few clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Weather App by Mangalam</h3>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}


