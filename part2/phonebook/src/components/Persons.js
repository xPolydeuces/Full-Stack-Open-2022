import Person from "./Person"

const Persons = ({personsToShow, deletePerson}) => (
    personsToShow.map(person =>
      <>
        <Person key={person.id} person={person} deletePerson={deletePerson}/>
      </>
    )
)

export default Persons
