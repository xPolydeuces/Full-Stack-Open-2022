import Stat from './Stat'

const Stats = ({ stats }) => (
  <>
    {stats.map(stat => <Stat key={stat.id} text={stat.text} value={stat.value}/>)}
  </>
)

export default Stats