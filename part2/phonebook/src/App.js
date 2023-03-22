import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)){
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`))
      {
        updatePerson(persons.find(p => p.name === newName))
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const updatePerson = (person) => {
    const changedPerson = { ...person, number: newNumber }
    personService
      .update(person.id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
      })
  }

  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)){
      personService
        .deleteRecord(person.id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== person.id))
        }
        )
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={ filter } handler={ handleFilterChange }/>
      <PersonForm addPerson={ addPerson } newName={ newName } handleNameChange={ handleNameChange } newNumber={ newNumber } handleNumberChange={ handleNumberChange } />
      <h2>Numbers</h2>
      <Persons persons={ persons } filter={ filter } deletePerson={ deletePerson }/>
    </div>
  )
}

export default App