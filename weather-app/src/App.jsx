import { useState, useRef } from 'react';
import axios from 'axios';

import './App.css'
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import Weather5DaysInfo from './components/Weather5Days/Weather5DaysInfo';

function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();

  const inputRef = useRef()

  async function searchCity() {
    const cityName = inputRef.current.value;

    const key = '8fc3ef1ed382c0483be62b4dbcc7b38d'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    const apiInfo5days = await axios.get(url5Days);

    setWeather5Days(apiInfo5days.data)
    setWeather(apiInfo.data)
  };

  return (
    <div className='container'>
      <h1>Previsão do tempo</h1>

      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInfo weather={weather}/>}

      {weather5Days && <Weather5DaysInfo weather5Days={weather5Days}/>}
    </div>
  );
};

export default App
