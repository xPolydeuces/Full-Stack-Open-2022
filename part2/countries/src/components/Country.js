import axios from 'axios'
import { useEffect, useState } from 'react'

const Country = ({ country }) => {
  const api_key = process.env.REACT_APP_API_KEY
  const latlng = country.capitalInfo.latlng
  const languages = Object.values(country.languages)
  const [weather, setWeather] = useState({})

  useEffect(() => {
    if (weather) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&units=metric&appid=${api_key}`)
        .then(initialWeather => {
          setWeather(initialWeather.data)
        })
    }
  }, [])

  if (weather.main === undefined) return
  const icon = 'https://openweathermap.org/img/wn/' + weather.weather[0].icon + '.png'

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h3>languages:</h3>
      <ul>
        {languages.map(language => <li key={language}>{language}</li>)}
      </ul>
      <img src={country.flags.svg} alt='Flag of the country' width='20%'/>
      <h2>Weather in {country.capital}</h2>
      <p>temperature {weather.main.temp} Celcius</p>
      <img src={icon} width='5%'/>
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Country