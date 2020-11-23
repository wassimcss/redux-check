import { ADD_TASK, COMPLETE, DELETE_TASK, EDIT_TASK } from "./Types";

export const addTask = (newTask) => ({
    type: ADD_TASK,
    payload : newTask
})

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload :id
})

export const editTask = (id,value) => ({
    type: EDIT_TASK,
    payload:{id,value}
})

export const complete = (id) => ({
    type: COMPLETE,
    payload : id
})




