import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment';

export default function Weather_App() {

    let city = 'Kitchener'
    let API_Key = "cbf52b549e1d04d7278472c26843d246"
    let unit = "imperial"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=${unit}`

    //https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=cbf52b549e1d04d7278472c26843d246
    //cbf52b549e1d04d7278472c26843d246

    const [weather, setWeather] = useState([]);

    const icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`


    useEffect(() => {
        axios.get(url)
            .then(res => {
                setWeather({
                    name: res.data.name,
                    main: res.data.weather[0].main,
                    description: res.data.weather[0].description,
                    icon: res.data.weather[0].icon,
                    temp: res.data.main.temp,
                    feels_like: res.data.main.feels_like,
                    humidity: res.data.main.humidity,
                    sunrise: res.data.sys.sunrise,
                    sunset: res.data.sys.sunset,
                })
            })
    }, [])



    return (
        <div>
            <div>
                <div  style={{backgroundColor:"#f6db93"}}>
                    <div className="main">
                        <p className="header"> {weather.name}</p>
                        <div style={{backgroundColor:"white"}} class="container">
                            <img height={100} width={150} src={icon} alt="weather" />
                        </div>
                        <div style={{backgroundColor:"grey"}} className="flex day">
                            <h4 >Day: {moment().format('dddd')}</h4>
                            <h4 >Sunrise: {new Date(weather.sunrise * 1000).toLocaleTimeString('en-IN')}</h4>
                            <h4>Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString('en-IN')}</h4>
                        </div> 
                        <div style={{backgroundColor:"pink"}} >   
                            <h4>Description: {weather.description}</h4>
                            <h4>Humidity: {weather.humidity} %</h4>
                            <h4>Date: {moment().format('LL')}</h4>
                        </div> 
                       <div style={{backgroundColor:"cyan"}} className="flex">
                            <p className="temp">Temprature: {weather.temp} &deg;C</p>
                            <p className="temp">Humidity: {weather.humidity} %</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
