import Country from './Country'

const Countries = ({ countries, filter }) => {
  const countriesToShow = filter === null
    ? countries
    : countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <>{countriesToShow.map(country => <Country key={country.cca3} name={country.name.common} />)}</>
  )
}

export default Countries