import React, { createContext, useReducer } from 'react';
import { taskReducer } from '../reducers/TaskReducer';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {

    const [tasks, dispatch] = useReducer(taskReducer,[])
    
    const sortedTasks = tasks.sort((t, f) =>  (f.isChecked === t.isChecked)? 0 : f.isChecked? -1 : 1);

    return (
        <TaskContext.Provider value={{ tasks,sortedTasks, dispatch }}>
            {props.children}
        </TaskContext.Provider>
    )
}
export default TaskContextProvider;