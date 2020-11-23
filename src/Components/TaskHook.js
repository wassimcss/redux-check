import React, { useState, } from 'react'
import { useDispatch } from 'react-redux'
import { complete, deleteTask, editTask } from '../Actions/Actions'
import '../App.css'

const Task = (props) => {
    const [isEdit, setIsEdit] = useState(false)
    const [item, setItem] = useState({
        description: ""
    })

    const handleChange = (e) => {
        setItem({ ...item, description: e.target.value })
    }

    const preapare = () => {
        setIsEdit(true)
        setItem(props.task)
    }

    const edit = () => {
        dispatch(editTask(props.task.id, item))
        setIsEdit(false)
    }
    
    
    const dispatch = useDispatch()


    return (
        <div>
            {
                isEdit ?
                    <div>
                        <input type="text" placeholder="Enter new value" onChange={handleChange} defaultValue={item.description} />
                        <button onClick={() => edit()}>Edit</button>
                    </div> :
                    <li className={props.task.isDone ? "done" : null}>
                        {props.task.description}
                        <button onClick={preapare}>Edit</button>
                        <button onClick={() =>dispatch(deleteTask(props.task.id))}>Delete</button>
                        <button onClick={() => dispatch(complete(props.task.id))}>{props.task.isDone ? "done" : "to complete"}</button>
                    </li>
            }

        </div>
    )
}



export default Task;
