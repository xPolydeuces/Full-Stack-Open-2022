const CountryEntry = ({ name, setFilter }) => (
  <p>{ name } <button onClick={() => setFilter(name)}>show</button></p>
)

export default CountryEntry