import React, { useState } from 'react'
import '../assets/weather.css'
import DisplayWeather from './DisplayWeather';

const Weather = () => {
    const [weather, setWeather] = useState([]);
    const [form, setForm] = useState({
      city:'',
      country:'',
    });

    const APIKEY = "76bb9639c1580a60185297ccd02c4312";
    const weatherData = async (e) =>{
      e.preventDefault();
      if(form.city === ""){
        alert("Please add a city")
      }else{
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`)
        .then((response) => response.json())
        .then((data) => data);

        setWeather({data: data});
      }
    }

    const handleChange = (e) =>{
      let name = e.target.name;
      let value = e.target.value;

      if(name === "city")
      {
        setForm({...form, city: value});
      }
      if(name === "country")
      {
        setForm({...form, country: value});
      }
    }
  return (
    <div className='weather'>
      <span className='title'>Weather App 🌤</span>
      <br />
      <form>
        <input
        type='text'
        name='city'
        placeholder='city'
        onChange={(e)=> handleChange(e)}
         />

        <input
        type='text'
        name='country'
        placeholder='Country'
        onChange={(e)=> handleChange(e)}
         />

         <button className='getweather' 
         onClick={(e)=>weatherData(e)}>
          Submit
         </button>
      </form>

      {/* console log */}
      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  )
}

export default Weather