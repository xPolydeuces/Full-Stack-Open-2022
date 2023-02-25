/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Stat from './components/Stat'
import Buttons from './components/Buttons'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const statistics = [
    {
      id: 1,
      value: good,
      setState: setGood,
      text: 'good'
    },
    {
      id: 2,
      value: neutral,
      setState: setNeutral,
      text: 'neutral'
    },
    {
      id: 3,
      value: bad,
      setState: setBad,
      text: 'bad'
    }
  ]

  return (
    <div>
      <Header text='give feedback'></Header>
      <Buttons stats={statistics} />
      <Header text='statistics'></Header>
      <Stat text='good' value={good} />
      <Stat text='neutral' value={neutral} />
      <Stat text='bad' value={bad} />
    </div>
  )
}

export default App