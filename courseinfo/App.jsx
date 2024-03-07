const Header = (props) => {
  return <h1>{props.course}</h1>
}
  
const Content = (props) =>{
  return <>
  <p>{props.parts} {props.exercisesNote}</p>
  </>
  
}
  
const Total = (props) =>{
  return <>
  <p>Number of exercises {props.total}</p>
  </>
}
  
const App = () => {
  const course ={ 
    name:'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const total = course.parts[0].exercises +
                course.parts[1].exercises +
                course.parts[2].exercises  
  
  
  return (
    <div>
      <Header course={course.name}/>
      <Content 
        parts= {course.parts[0].name}
        exercisesNote = {course.parts[0].exercises}/>
      <Content 
        parts= {course.parts[1].name}
        exercisesNote = {course.parts[1].exercises}/>
      <Content 
        parts= {course.parts[2].name}
        exercisesNote = {course.parts[2].exercises}/>
      <Total total={total}/>
      
    </div>
  )
}


export default App
