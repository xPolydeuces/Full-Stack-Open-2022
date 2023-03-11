import Person from './Person'

const Persons = ({ persons, filter }) => {
  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <>{personsToShow.map(person => <Person key={person.id} person={person.name} number={person.number}/>)}</>
  )
}


export default Persons