import Button from './Button'

const Buttons = ({ stats }) => (
  <>
    {stats.map(stat => <Button key={stat.id} handleClick={() => stat.setState(stat.value + 1)} text={stat.text}/>)}
  </>
)

export default Buttons