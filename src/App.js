import React, { use, useState } from 'react'
import axios  from 'axios'
import './App.css'

const App = () => {
  const[city , setcity]=useState('')
  const[weatherData , setweatherData]=useState({})
  const weatherCheck = (e) =>{
    
    e.preventDefault();
    axios.get(`https://api.weatherapi.com/v1/current.json?key=d347dfb1a00b4f86add45435242510&q=${city}`).then(function(response){
      setweatherData(response.data)
      setcity("")
    }).catch(function(err){
      console.log(err)
    })
    
  }
  return (
    <div style={{textAlign: 'center', marginTop: "10px" }}>
      

    <label htmlFor="input-1">City-Name</label><br />
    <input type="text" id='input-1' value={city} onChange={(e)=>{setcity(e.target.value)}} />
    <br />
    <button style={{padding: "  10px"}} onClick={weatherCheck}>Submit</button>
  

      <div className="" style={{display:'flex', alignItems:"center", flexDirection: "column"}}>
        <h1>{`Location: ${weatherData?.location?.name} ${weatherData?.location?.region} ${weatherData?.location?.country}`}  </h1>
        <div className="" style={{display: "flex", alignItems: "center", columnGap: 5}}>
          <img src={`https:${weatherData?.current?.condition?.icon}`} alt="" />{weatherData?.current?.condition?.text}
        </div>
        <h3>Temperature: {weatherData?.current?.temp_c}°c</h3>
        <h3>FeelsLike: {weatherData?.current?.feelslike_c}°c</h3>
        <h3>Temperature: {weatherData?.current?.temp_f}°F</h3>
        <h3>FeelsLike: {weatherData?.current?.feelslike_f}°F</h3>
        <h3>Humidity: {weatherData?.current?.humidity}</h3>
      </div>
    </div>
    
  )
}

export default App

