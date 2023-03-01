import { useState } from 'react'
import Header from './components/Header'
import Buttons from './components/Buttons'
import Statistics from './components/Statistics'

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
      <Header text='give feedback' />
      <Buttons stats={statistics} />
      <Header text='statistics' />
      <Statistics stats={statistics} />
    </div>
  )
}
export default App