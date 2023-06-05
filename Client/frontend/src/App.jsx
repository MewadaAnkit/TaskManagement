import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddTask from './AddTask';
import AllTask from './AllTask';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://taskmanagementapi.onrender.com/alltask');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleUpdateTask = async (taskId) => {
    try {
      const response = await axios.put(`https://taskmanagementapi.onrender.com/update/${taskId}`, {
        status: 'Completed',
      });
      const updatedTask = response.data;
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`https://taskmanagementapi.onrender.com/delete/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className='container'>
      <div className='navbar'><h3>Task Management System</h3> <h5>Ankit Mewada</h5></div>
      <div className='content'>
      <AddTask handleAddTask={handleAddTask} />
       <AllTask
        tasks={tasks}
        handleUpdateTask={handleUpdateTask}
        handleDeleteTask={handleDeleteTask}
      />
      </div>
    </div>
  );
};

export default App;




