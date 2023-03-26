const Country = ({ name, country, setFilter }) => {
  if (country) {
    const languages = Object.values(country.languages)
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
  return(
    <p>{ name } <button onClick={() => setFilter(name)}>show</button></p>
  )
}

export default Country