import StatisticLine from './StatisticLine'

const Stats = ({ stats }) =>
{
  const good = stats[0].value
  const neutral = stats[1].value
  const bad = stats[2].value
  if (good + neutral + bad === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <table>
      <tbody>
        {stats.map(stat => <StatisticLine key={stat.id} text={stat.text} value={stat.value}/>)}
        <StatisticLine text='all' value={stats.reduce((sum, stat) => sum + stat.value, 0)} />
        <StatisticLine text='average' value={(good - bad) / (good + neutral + bad)} />
        <StatisticLine text='positive' value={good / (good + neutral + bad) * 100 + ' %'} />
      </tbody>
    </table>
  )
}

export default Stats