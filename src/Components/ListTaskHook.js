import React , {useState}  from 'react'
import {  useSelector } from 'react-redux'
import TaskHook from './TaskHook'

//import  Task  from './Task'

 const ListTaskHook = (props) => {
    const tasks = useSelector(state=> state.TaskReducer.tasks)
   
     const [filter, setFilter] = useState(false)
      const [courses, setCourses] = useState(tasks)
       

        const done = () => {
            let list = tasks.filter(task => task.isDone ===true)
            setCourses(list)
           setFilter(true)
        }
        const not = () => {
            let list =tasks.filter(task => task.isDone ===false)
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
            tasks.map(task => {
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


export default ListTaskHook