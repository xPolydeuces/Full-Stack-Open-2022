import { useEffect, useState } from 'react'
import personService from './services/personService'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
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
    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
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
