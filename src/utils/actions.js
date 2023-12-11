export const addTask = task =>{
    return{
        type:'ADD_TASK',
        payload:task
    }
}

export const deleteTask=index=>{
    return{
        type:'DELETE_TASK',
        payload:index
    }
}
