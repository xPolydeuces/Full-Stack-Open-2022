import CountryEntry from './CountryEntry'
import Country from './Country'

const Countries = ({ countries, filter, setFilter }) => {
  if (filter === '') return
  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  if (countriesToShow.length > 10) return (<>Too many matches, specify another filter</>)
  if (countriesToShow.length === 1) return (<Country key={countriesToShow[0].cca3} country={countriesToShow[0]}/>)
  return (
    <>{countriesToShow.map(country => <CountryEntry key={country.cca3} name={country.name.common} setFilter={setFilter}/>)}</>
  )
}

export default Countries