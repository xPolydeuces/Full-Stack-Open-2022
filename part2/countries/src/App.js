import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState(null)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(initialCountries => {
        setCountries(initialCountries.data)
      })
  }, [])

  return(
    <div>
      <p>Find countries</p>
      <Countries countries={ countries } />
    </div>
  )
}

export default App