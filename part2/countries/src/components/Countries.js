import Country from './Country'

const Countries = ({ countries, filter }) => {
  if (filter === '') return
  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  if (countriesToShow.length > 10) return (<>Too many matches, specify another filter</>)
  return (
    <>{countriesToShow.map(country => <Country key={country.cca3} name={country.name.common} />)}</>
  )
}

export default Countries