/* eslint-disable react/prop-types */
import './WeatherInfo.scss';

export default function WeatherInfo({ weather }) {
  return (
    <div className='weather-container'>
      <h2>{weather.name}</h2>

      <div className='weather-info'>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>
        <p className='temp'>{Math.round(weather.main.temp)}°C</p>
      </div>

      <p className='desc'>{weather.weather[0].description}°C</p>

      <div className='details'>
        <p>Sensação Térmica: {Math.round(weather.main.feels_like)}°C</p>
        <p>Umidade: {weather.main.humidity}%</p>
        <p>Pressão: {weather.main.pressure}</p>
      </div>
    </div>
  );
};
