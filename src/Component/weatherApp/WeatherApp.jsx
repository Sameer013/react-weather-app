import React, { useState } from 'react'
import './WeatherApp.css';

// Icons Assests
import search_icon from '../assests/search.png';
import clear_icon from '../assests/clear.png';
import cloud_icon from '../assests/cloud.png';
import humidity_icon from '../assests/humidity.png';
import rain_icon from '../assests/rain.png';
import snow_icon from '../assests/snow.png';
import wind_icon from '../assests/wind.png';
import drizzle_icon from '../assests/drizzle.png';





const WeatherApp = () => {

  const API_KEY = "a9e84a540ab6ba17ccb413d75be946af";
  const [wicon,setWicon] = useState(cloud_icon);

  const search =  async () =>{
      const element = document.getElementsByClassName("cityInput");
      if(element[0].value === ""){
        return 0;
      }

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${API_KEY}&units=Metric`;
      let response = await fetch(url);
      let data = await response.json();
      // console.log(data);

      if(data.message !== "city not found"){
      const humidity = document.getElementsByClassName('humidity-percent');
      const wind = document.getElementsByClassName('wind-rate');
      const temprature = document.getElementsByClassName('weather-temp');
      const location = document.getElementsByClassName('weather-location');

      humidity[0].innerHTML = data.main.temp + " %";
      wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
      temprature[0].innerHTML = Math.floor(data.main.temp) + "°c";
      location[0].innerHTML = data.name; 
      }
      else{
        const humidity = document.getElementsByClassName('humidity-percent');
      const wind = document.getElementsByClassName('wind-rate');
      const temprature = document.getElementsByClassName('weather-temp');
      const location = document.getElementsByClassName('weather-location');

      humidity[0].innerHTML = 0 + " %";
      wind[0].innerHTML = 0 + " km/h";
      temprature[0].innerHTML = "0";
      location[0].innerHTML = "Location Not Found!"; 
      }  

      if(data.weather[0].icon === '01d' || data.weather[0].icon === '01d'){
        setWicon(clear_icon);
      }
      else if(data.weather[0].icon === '02d' || data.weather[0].icon === '02n'){
        setWicon(cloud_icon)
      }
      else if(data.weather[0].icon === '03d' || data.weather[0].icon === '03n'){
        setWicon(drizzle_icon)
      }
      else if(data.weather[0].icon === '04d' || data.weather[0].icon === '04n'){
        setWicon(drizzle_icon)
      }
      else if(data.weather[0].icon === '09d' || data.weather[0].icon === '09n'){
        setWicon(rain_icon)
      }
      else if(data.weather[0].icon === '10d' || data.weather[0].icon === '10n'){
        setWicon(rain_icon)
      }
      else if(data.weather[0].icon === '13d' || data.weather[0].icon === '13n'){
        setWicon(snow_icon)
      }
      else{
        setWicon(clear_icon)
      }
      
      

  }

  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className='cityInput'id="cityInput" placeholder='Search' />
        <div className="search-icon" onClick={() => {search()}}>
          <img src={search_icon} alt="search icon" />
        </div>
      </div>
      <div className="main">
      <div className="weather-image">
        <img src={wicon} alt="Weather Icon" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">Kolkata</div>
      <div className="data-container">
        <div className="element">
          <div className="icon">
            <img src={humidity_icon} alt="humidity" />
          </div>
          <div className="data">
          <div className="humidity-percent">64%</div>
          <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <div className="icon">
            <img src={wind_icon} alt="wind rate" />
          </div>
          <div className="data">
          <div className="wind-rate">18 km/h</div>
          <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>

      {/* end of main */}
      </div>

    {/* end of container */}
    </div>
  )
}

export default WeatherApp

