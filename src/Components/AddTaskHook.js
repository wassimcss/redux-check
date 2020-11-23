import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../Actions/Actions'
import {v4 as uuidv4} from 'uuid'

 const AddTaskHook = (props) => {
     const dispatch = useDispatch()
     const [task, setTask] = useState("")
     const add = ( ) => {
         let newTask = {
             id:uuidv4(),
             description : task,
             isDone : false
         }
         dispatch(addTask(newTask))
         setTask("")
     }



    return (
        <div >
            <input name="task" type="text" value={task} placeholder="Add new task...." onChange={e => setTask(e.target.value)}  />
            <button onClick = {add} >Add</button>
        </div>
    )
}


export default AddTaskHook



