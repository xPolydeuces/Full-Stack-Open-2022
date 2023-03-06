import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ courses }) => (
  <div>
    <Header name='Web development curriculum' />
    {courses.map(course =>
      <>
        <Header key={course.id} name={course.name} sub={true}/>
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )}
  </div>
)

export default Course