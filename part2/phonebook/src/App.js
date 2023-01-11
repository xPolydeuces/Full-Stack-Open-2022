import { useEffect, useState } from 'react'
import axios from 'axios'

const Filter = ({newFilter, handleFilterChange}) => (
  <div>
    filter shown with: <input 
      value={newFilter}
      onChange={handleFilterChange}
    />
  </div>
)

const PersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => (
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
)

const Persons = ({personsToShow}) => {
  return(personsToShow.map(person =>
    <>
      <Person key={person.id} name={person.name} number={person.number}/>
    </>
    )
  )
}

const Person = ({name, number}) => (
  <div>{name} {number}</div>
)

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  
  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    if (newName.trim().length === 0){
      return(alert(`${newName} is an incorrect name.`))
    }
    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())){
      return(alert(`${newName} is already added to phonebook`))
    }
    const personObject = {
      name: newName,
      number: newNumber,
    }
    axios
      .post('http://localhost:3001/persons',personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
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
      
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>

      <h2>add a new</h2>
      
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>
      
      <Persons personsToShow={personsToShow} />

    </div>
  )
}

export default App
