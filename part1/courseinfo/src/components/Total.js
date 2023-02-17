const Total = ({props}) => (
    <p>Number of exercises {props.reduce((sum, exercise) => sum + exercise, 0)}</p>
)

export default Total