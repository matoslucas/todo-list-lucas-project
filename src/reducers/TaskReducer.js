import Services from '../API/services';

export const Action = {
    ADD_TASK: "add-task",
    CHECK_TASK: "check-task",
    REMOVE_TASK: "remove-task",
    LOAD_TASKS: "load-tasks",
}

export const taskReducer = (state, action) => {
    switch (action.type) {
        case Action.ADD_TASK: {
            Services.postTask(action.task)
            return [...state, action.task]
        }
        case Action.CHECK_TASK:
            let taskIndex = state.findIndex(t => t.id === action.task.id);
            state[taskIndex].isChecked = action.task.isChecked
            return state.filter(task => task.id !== action.id);

        case Action.REMOVE_TASK: {
            return state.filter(task => task.id !== action.id)
        }

        case Action.LOAD_TASKS:{
            // console.log(action)
            return action.tasks;
        }
        default:
            
            return state;
    }
}