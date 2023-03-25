import Country from './Country'

const Countries = ({ countries, filter }) => {
  if (filter === '') return
  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  if (countriesToShow.length > 10) return (<>Too many matches, specify another filter</>)
  if (countriesToShow.length === 1) {
    const country = countriesToShow[0]
    const languages = Object.values(country.languages)
    console.log(languages)
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
  return (
    <>{countriesToShow.map(country => <Country key={country.cca3} name={country.name.common} />)}</>
  )
}

export default Countries