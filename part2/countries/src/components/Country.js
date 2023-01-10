import axios from 'axios'
import { useEffect, useState } from 'react'

const Country = ({country, languages}) => {
    const api_key = process.env.REACT_APP_API_KEY
    const latlng = country.capitalInfo.latlng
    const [weather, setWeather] = useState({})
    useEffect(() => {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&units=metric&appid=${api_key}`)
        .then(response => {
          setWeather(response.data)
        })
    }, [])
    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>capital {country.capital[0]}</div>
        <div>area {country.area}</div>
        <h3>languages:</h3>
        {languages.map(language =>
          <ul>
            <li key={language}>{language}</li>
          </ul>
          )
        }
        <img src={country.flags.png}/>
        {weather.main && <div>
            <h2>Weather in {country.capital[0]}</h2>
            <div>The temperature is {weather.main.temp} Celcius</div>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
            <div>Wind: {weather.wind.speed} m/s</div>
        </div>}
      </div>
    )
}

export default Country