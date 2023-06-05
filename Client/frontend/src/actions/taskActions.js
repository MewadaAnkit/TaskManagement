import axios from 'axios';

// Action Types
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const UPDATE_TASK_STATUS_SUCCESS = 'UPDATE_TASK_STATUS_SUCCESS';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const SET_ERROR = 'SET_ERROR';

// Fetch tasks
export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/tasks');
      dispatch({ type: FETCH_TASKS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };
};

// Add task
export const addTask = (task) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/tasks', task);
      dispatch({ type: ADD_TASK_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };
};

// Update task status
export const updateTaskStatus = (taskId, status) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/tasks/${taskId}`, { status });
      dispatch({ type: UPDATE_TASK_STATUS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };
};

// Delete task
export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/tasks/${taskId}`);
      dispatch({ type: DELETE_TASK_SUCCESS, payload: taskId });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };
};
