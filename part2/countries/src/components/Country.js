import axios from 'axios'
import { useEffect, useState } from 'react'

const Country = ({ country }) => {
  const api_key = 'a75d668e68b1e8f02b33757461fbf140'
  const latlng = country.capitalInfo.latlng
  const languages = Object.values(country.languages)
  const [weather, setWeather] = useState({})

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&units=metric&appid=${api_key}`)
      .then(response => {
        setWeather(response.data)
      })
  }, [])

  console.log(weather)
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h3>languages:</h3>
      <ul>
        {languages.map(language => <li key={language}>{language}</li>)}
      </ul>
      <img src={country.flags.svg} alt='Flag of the country' width='20%'/>
    </div>
  )
}

export default Country