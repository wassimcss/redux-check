import React , {useState}  from 'react'
import { connect } from 'react-redux'
import TaskHook from './TaskHook'

//import  Task  from './Task'

 const ListTask = (props) => {
     const [filter, setFilter] = useState(false)
      const [courses, setCourses] = useState(props.data)
        const done = () => {
            let list = props.data.filter(task => task.isDone ===true)
            setCourses(list)
           setFilter(true)
        }
        const not = () => {
            let list = props.data.filter(task => task.isDone ===false)
            setCourses(list)
            setFilter(true)
        }

        const all = () => {
            setFilter(false)
        }
        
    return (
        <div>
            <button onClick={done}>done</button><button onClick = {not}>not</button><button onClick={all}>all</button>
            {
               filter ? 
               courses.map(task => {
                return(
                    <div key = {task.id}>
                        <li>{task.description}</li>
                    </div>
                )
            }):
            props.data.map(task => {
                return(
                    <div key = {task.id}>
                        <TaskHook task={task}/>
                    </div>
                )
            })
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
   data : state.TaskReducer.tasks ,
})



export default connect(mapStateToProps)(ListTask)