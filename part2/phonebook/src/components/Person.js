const Person = ({ person, number, action }) => (
  <p>{ person } { number } <button onClick={ action }>delete</button></p>
)

export default Person