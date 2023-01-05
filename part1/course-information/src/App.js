const Course = ({course}) => (
  <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
  </div>
)

const Header = ({course}) => (
  <h1>{course.name}</h1>
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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App;
