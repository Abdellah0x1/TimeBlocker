import { createContext, useContext, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


const TasksContext = createContext();





export function TasksProvier({children}){
    const [storedTasks, setStoredTasks] = useLocalStorage("tasks", {
    bucket : [],
    schedule: []
});

    const [state,dispatch] = useReducer(reducer,storedTasks);

    function  reducer(state,action){
        if (action.type === 'ADD_TASK'){
            setStoredTasks({...state, bucket: [...state.bucket, action.payload]})
             return {...state, bucket: [...state.bucket, action.payload]}
        }
        if (action.type === 'DELETE_TASK') {
            setStoredTasks({...state, bucket: state.bucket.filter(task => task.id !== action.payload)})
            return {...state, bucket: state.bucket.filter(task => task.id !== action.payload)}
        }
    }

    


    function addTask({title,category = 'Work / Career'}){
        dispatch({type: 'ADD_TASK', payload: {
            id: crypto.randomUUID(),
            title: title,
            category: category 
        }})
        
    }

    function removeTask(id){
        dispatch({type: 'DELETE_TASK', payload: id})
    }


    

    return <TasksContext.Provider value={{
        state,
        addTask,
        removeTask,
    }}>{children}</TasksContext.Provider>
}


export function useTasks(){
    return useContext(TasksContext)
}