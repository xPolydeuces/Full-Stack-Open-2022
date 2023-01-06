import { useState } from 'react'

const Person = ({name, number}) => (

  <div>{name} {number}</div>
)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())){
      return(alert(`${newName} is already added to phonebook`))
    }
    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject,0))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => (
    setNewName(event.target.value)
  )
  const handleNumberChange = (event) => (
    setNewNumber(event.target.value)
  )

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    if (event.target.value === ''){
      setShowAll(true)
    } else {
      setShowAll(false)
    }
    console.log(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with: <input 
            value={newFilter}
            onChange={handleFilterChange}
          />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(person =>
      <>
        <Person key={person.id} name={person.name} number={person.number}/>
      </>
      )}
    </div>
  )
}

export default App
