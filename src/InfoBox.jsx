import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const InfoBox = ({ info }) => {
  const INIT_URL =
    "https://images.unsplash.com/photo-1561553590-267fc716698a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  const HOT_URL =
    "https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.webp?b=1&s=170667a&w=0&k=20&c=H7WvPOgOX-iVivqwBE842Wda80r7fAm5ZFalNAO-upk=";

  const COLD_URL =
    "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.webp?b=1&s=170667a&w=0&k=20&c=n21SIzH1emvYJmePa_kg8r0AcdVu2vTOk327qk4tYzE=";

  const RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {
              info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>
            }
            </Typography>  
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temprature : {info.temp}&deg;C </p>
              <p>Minimum Temprature : {info.tempMin}&deg;C </p>
              <p>Maximum Temprature : {info.tempMax}&deg;C </p>
              <p>Humidity : {info.humidity} </p>
              <p>
                The Weather can be described as <b>{info.weather}</b> is
                FeelsLike <b>{info.feelslike}&deg;C</b>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;
