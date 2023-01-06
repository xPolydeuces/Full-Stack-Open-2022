import { useState } from 'react'

const Person = ({name, number}) => (
  <div>{name} {number}</div>
)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)){
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map(person =>
      <>
        <Person key={person.name} name={person.name} number={person.number}/>
      </>
      )}
    </div>
  )
}

export default App
