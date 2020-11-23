import React,{useState} from 'react'
import { connect } from 'react-redux'
import { addTask } from '../Actions/Actions'
import {v4 as uuidv4} from 'uuid'

 const AddTask = (props) => {
     const [task, setTask] = useState("")
     const add = ( ) => {
         let newTask = {
             id:uuidv4(),
             description : task,
             isDone : false
         }
         props.addTask(newTask)
         setTask("")
     }
     

    return (
        <div >
            <input name="task" type="text" value={task} placeholder="Add new task...." onChange={e => setTask(e.target.value)}  />
            <button onClick = {add} >Add</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask : (task) => dispatch(addTask(task))
    }
}

export default connect(null,mapDispatchToProps)(AddTask)



