import { useEffect, useState } from 'react'
import axios from 'axios'

const Filter = ({newFilter, handleFilterChange}) => (
  <div>
    find countries <input 
      value={newFilter}
      onChange={handleFilterChange}
    />
  </div>
)

const Country = ({country, languages}) => (
  <div>
    <h2>{country.name.common}</h2>
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
  </div>
)

const Countries = ({countriesToShow, newFilter, setNewFilter}) => {
  if (newFilter === '') {return}

  if (countriesToShow.length > 10) {
    return('Too many matches, specify another filter')
  }

  if (countriesToShow.length === 1) {
    const country = countriesToShow[0]
    const languages = Object.values(country.languages)
    return(<Country country={country} languages={languages}/>)
  }

  return(
    countriesToShow.map(country =>
      <>
        <div key={country.cca3}>
          {country.name.common}
          <button onClick={() => setNewFilter(country.name.common)}>show</button>
        </div>
      </>
    )
  )
}

function App() {

  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const countriesToShow = (newFilter === '')
    ? countries
    : countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase()))

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  return (
    <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <Countries countriesToShow={countriesToShow} newFilter={newFilter} setNewFilter={setNewFilter}/>
    </div>
  );
}

export default App;
