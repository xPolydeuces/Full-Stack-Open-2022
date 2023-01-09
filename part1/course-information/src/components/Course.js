const Course = ({course}) => (
    <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
    </div>
)
  
const Header = ({course}) => (
    <h2>{course.name}</h2>
)

const Part = ({part}) => (
    <p>{part.name} {part.exercises}</p>
)

const Content = ({course}) => (
    <div>
        {course.parts.map(part =>
        <Part key={part.id} part={part}/>
        )}
    </div>
)

const Total = ({course}) => (
    <b>total of {course.parts.reduce(
        (s,p) => s + p.exercises,
        0,
    )} exercises</b>
)

export default Course
