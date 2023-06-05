/*import React, { useState } from 'react';
import axios from 'axios';
import './AddTask.css';


const AddTask = ({ handleAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) return;

    try {
      const response = await axios.post('https://taskmanagementapi.onrender.com/addtask', { title, description });
      handleAddTask(response.data);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form className="add-task-form"  onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;*/

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import './AddTask.css';

const AddTask = ({ handleAddTask }) => {
  const initialValues = {
    title: '',
    description: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post('https://taskmanagementapi.onrender.com/addtask', values);
      handleAddTask(response.data);
      resetForm();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Title is required';
    }

    if (!values.description) {
      errors.description = 'Description is required';
    }

    return errors;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
      <Form className="add-task-form">
        <Field type="text" name="title" placeholder="Title" />
        <ErrorMessage name="title" component="div" className="error-message" />

        <Field type="text" name="description" placeholder="Description" />
        <ErrorMessage name="description" component="div" className="error-message" />

        <button type="submit">Add Task</button>
      </Form>
    </Formik>
  );
};

export default AddTask;
