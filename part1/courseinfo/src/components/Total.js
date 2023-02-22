const Total = ({course}) => (
    <p>Number of exercises {course.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
)

export default Total