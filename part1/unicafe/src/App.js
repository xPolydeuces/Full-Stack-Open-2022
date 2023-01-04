import { useState } from 'react'

const Button = ({handleClick, text}) => (
<button onClick={handleClick}>
  {text}
</button>
)

const Statistics = ({good,neutral,bad,all}) => (
  <>
    <h1>statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {good+neutral+bad}</p>
    <p>average {(good-bad)/all}</p>
    <p>positive {good/all*100 + '%'}</p>
  </>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text={'good'} />
      <Button handleClick={() => setNeutral(neutral+1)} text={'neutral'} />
      <Button handleClick={() => setBad(bad+1)} text={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App