import {
    FETCH_TASKS_SUCCESS,
    ADD_TASK_SUCCESS,
    UPDATE_TASK_STATUS_SUCCESS,
    DELETE_TASK_SUCCESS,
    SET_ERROR,
  } from '../actions/taskActions';
  
  const initialState = {
    tasks: [],
    error: null,
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TASKS_SUCCESS:
        return {
          ...state,
          tasks: action.payload,
          error: null,
        };
      case ADD_TASK_SUCCESS:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
          error: null,
        };
      case UPDATE_TASK_STATUS_SUCCESS:
        const updatedTasks = state.tasks.map((task) => {
          if (task._id === action.payload._id) {
            return {
              ...task,
              status: action.payload.status,
            };
          }
          return task;
        });
        return {
          ...state,
          tasks: updatedTasks,
          error: null,
        };
      case DELETE_TASK_SUCCESS:
        const filteredTasks = state.tasks.filter(
          (task) => task._id !== action.payload
        );
        return {
          ...state,
          tasks: filteredTasks,
          error: null,
        };
      case SET_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  