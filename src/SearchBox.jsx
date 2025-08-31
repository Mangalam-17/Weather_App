import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  // Use Vite environment variables
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        minTemp: jsonResponse.main.temp_min,
        maxTemp: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
    setError(false); // Reset error on new input
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity(""); // Clear input after successful fetch
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Look for City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <p style={{ color: "red" }}>
            <b>No such place exists !</b>
          </p>
        )}
      </form>
    </div>
  );
}
