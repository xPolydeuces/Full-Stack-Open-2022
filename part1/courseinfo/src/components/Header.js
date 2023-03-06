const Header = ({ name, sub }) => (
  sub ? <h2>{name}</h2> : <h1>{name}</h1>
)

export default Header