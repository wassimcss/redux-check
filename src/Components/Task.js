import React, { useState } from 'react'
import { connect } from 'react-redux'
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
        props.editTask(props.task.id, item)
        setIsEdit(false)
    }
    console.log(item.description)


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
                        <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
                        <button onClick={() => props.complete(props.task.id)}>{props.task.isDone ? "done" : "to complete"}</button>
                    </li>
            }

        </div>
    )
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => dispatch(deleteTask(id)),
        editTask: (id, value) => dispatch(editTask(id, value)),
        complete: (id) => dispatch(complete(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Task)
