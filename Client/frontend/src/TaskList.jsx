/*import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, updateTaskStatus, deleteTask } from './actions/taskActions';
import AllTask from './AllTask';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleUpdateTaskStatus = (taskId, status) => {
    dispatch(updateTaskStatus(taskId, status));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <AllTask
          key={task._id}
          task={task}
          onUpdateTaskStatus={handleUpdateTaskStatus}
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;*/


/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTaskStatus, deleteTask } from './actions/taskActions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleUpdateStatus = (taskId, newStatus) => {
    dispatch(updateTaskStatus(taskId, newStatus));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <button onClick={() => handleUpdateStatus(task._id, !task.status)}>
            {task.status ? 'Mark Incomplete' : 'Mark Complete'}
          </button>
          <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

import React from 'react';

const TaskList = ({ tasks, handleUpdateStatus, handleDeleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <button onClick={() => handleUpdateStatus(task._id, !task.status)}>
            {task.status ? 'Mark Incomplete' : 'Mark Complete'}
          </button>
          <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;*/
