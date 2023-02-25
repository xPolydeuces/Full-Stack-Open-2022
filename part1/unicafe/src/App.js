/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Stat from './components/Stat'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback'></Header>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Header text='statistics'></Header>
      <Stat text='good' value={good} />
      <Stat text='neutral' value={neutral} />
      <Stat text='bad' value={bad} />
    </div>
  )
}

export default App