import { useState } from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Text from './components/Text'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const index = votes.indexOf(Math.max(...votes))

  const randomize = () => (
    Math.floor(Math.random() * anecdotes.length)
  )

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    return(copy)
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Text text={anecdotes[selected]} />
      <Text text={`has ${votes[selected]} votes`} />
      <Button handleClick={() => setVotes(vote)} text='vote' />
      <Button handleClick={() => setSelected(randomize)} text='next anecdote' />
      <Header text="Anecdote with most votes" />
      <Text text={anecdotes[index]} />
      <Text text={`has ${votes[index]} votes`} />
    </div>
  )
}

export default App