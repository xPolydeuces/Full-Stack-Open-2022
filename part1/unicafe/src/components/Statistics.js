import Stat from './Stat'

const Stats = ({ stats }) =>
{
  const good = stats[0].value
  const neutral = stats[1].value
  const bad = stats[2].value
  return (
    <>
      {stats.map(stat => <Stat key={stat.id} text={stat.text} value={stat.value}/>)}
      <Stat text='all' value={stats.reduce((sum, stat) => sum + stat.value, 0)} />
      <Stat text='average' value={(good - bad) / (good + neutral + bad)} />
      <Stat text='positive' value={good / (good + neutral + bad) * 100 + ' %'} />
    </>
  )
}

export default Stats