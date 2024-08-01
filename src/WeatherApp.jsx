import React, { useState } from 'react'
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

const WeatherApp = () => {
    const [weatherInfo , setWeatherInfo] = useState({
        city : "pune" ,
        feelslike : 24.84,
        temp: 25.04 ,
        tempMin : 25.04,
        tempMax : 25.04 ,
        humidity : 47 ,
        weather : "haze"
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
  return (
    <div style={{textAlign:"center"}}>
      <h2>Weather app </h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
