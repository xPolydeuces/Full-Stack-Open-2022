import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const pageStyle = {
    height: '100vh',
    minHeight: '100vh',
    padding: '10px',
    background: '#2b3137',
    color: '#fafbfc'
  }

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
    <div style= { pageStyle }>
      <Filter filter={ filter } handler={ handleFilterChange } />
      <Countries countries={ countries } filter={ filter } setFilter={ setFilter }/>
    </div>
  )
}

export default App