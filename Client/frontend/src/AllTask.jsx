
import React from 'react';
import './AllTask.css';

const AllTask = ({ tasks, handleUpdateTask, handleDeleteTask }) => {
    const getStatusButtonText = (status) => {
        if (status === 'Pending') {
            return 'Mark as Completed';
        } else if (status === 'In Progress') {
          return 'Mark as Completed';
        } else {
          return 'Completed';
        }
      };
    
      const getButtonClassName = (status) => {
        if (status === 'Completed') {
          return 'completed-button';
        } else {
          return 'in-progress-button';
        }
      };
  return (
    <ul className="">
      <table className="table Align ">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Created At</th>
            <th scope='col'>Change Status</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <th scope="row">{index + 1}</th>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>{new Date(task.createdAt).toLocaleString()}</td>
              <td>
              <button
                  className={getButtonClassName(task.status)}
                  onClick={() => handleUpdateTask(task._id)}
                >
                  {getStatusButtonText(task.status)}
                </button></td>
              <td><button className="delete-button" onClick={() => handleDeleteTask(task._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </ul>
  );
};

export default AllTask;











