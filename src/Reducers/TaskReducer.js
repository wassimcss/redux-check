import { v4 as uuidv4 } from 'uuid'
import { ADD_TASK, COMPLETE, DELETE_TASK, EDIT_TASK } from '../Actions/Types';
const initialState = {
    tasks: [
        {
            id: uuidv4(),
            description: "learn html",
            isDone: true
        },
        {
            id: uuidv4(),
            description: "learn css",
            isDone: true
        },
        {
            id: uuidv4(),
            description: "learn javascript",
            isDone: false
        },
        {
            id: uuidv4(),
            description: "learn Python",
            isDone: false
        }
    ]
}

const TaskReducer =  (state = initialState, action) => {
    switch (action.type) {

        case (ADD_TASK):{
            return {...state,tasks:[...state.tasks,action.payload]}
        }
        case (DELETE_TASK) : {
            return {...state,tasks:state.tasks.filter(task => task.id !==action.payload)}
        } 
        case (EDIT_TASK) : {
            return {...state, tasks:state.tasks.map(task => task.id ===action.payload.id ? {...task,...action.payload.value} : task)}
        } 
        case (COMPLETE) : {
            return {...state,tasks:state.tasks.map(task => task.id ===action.payload ? {...task,isDone:!task.isDone}:task)}
        }  

        default:
            return state
    }
}
export default TaskReducer;
