import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_TEMP_URL =
    "https://images.unsplash.com/reserve/m6rT4MYFQ7CT8j9m2AEC_JakeGivens%20-%20Sunset%20in%20the%20Park.JPG?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_TEMP_URL =
    "https://images.unsplash.com/photo-1517046976698-44da3fcda6bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxjb2xkJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_TEMP_URL =
    "https://images.unsplash.com/photo-1529281528138-fbe93b7d25a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW55JTIwc2Vhc29ufGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 170 }}
            image={
              info.humidity > 80
                ? RAIN_TEMP_URL
                : info.temp > 15
                  ? HOT_TEMP_URL
                  : COLD_TEMP_URL
            }
            title="weather-info"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>
                {info.city}{" "}
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 15 ? (
                  <SunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </b>
            </Typography>
            <Typography
              className="details"
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>
                <b>Temperature : {info.temp}&deg;C</b>
              </p>
              <p>
                <b>Humidity : {info.humidity}</b>
              </p>
              <p>
                <b>Min Temperature : {info.minTemp}</b>
              </p>
              <p>
                <b>Max Temperature : {info.maxTemp}</b>
              </p>
              <p>
                <b>Weather : {info.weather}</b>
              </p>
              <p>
                <b>
                  We are experiencing {info.weather} weather, with a perceived
                  temperature of {info.feelsLike}
                </b>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

