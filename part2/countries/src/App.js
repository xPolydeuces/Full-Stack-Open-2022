import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    if (countries) {
      axios
        .get('https://restcountries.com/v3.1/all')
        .then(initialCountries => {
          setCountries(initialCountries.data)
        })
    }
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return(
    <div>
      <Filter filter={ filter } handler={ handleFilterChange } />
      <Countries countries={ countries } filter={ filter } setFilter={ setFilter }/>
    </div>
  )
}

export default App