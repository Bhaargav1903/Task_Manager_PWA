import React from 'react';
import TaskCard from '../components/TaskCard';
import Form from '../components/Form';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TASKS_QUERY, ADD_TASK_MUTATION, UPDATE_TASK_STATUS_MUTATION } from '../graphql/queries';

const TaskManagement = () => {
  const { data, loading, error } = useQuery(GET_TASKS_QUERY);
  const [addTask] = useMutation(ADD_TASK_MUTATION, {
    refetchQueries: [{ query: GET_TASKS_QUERY }],
  });

  const [updateTaskStatus] = useMutation(UPDATE_TASK_STATUS_MUTATION, {
    refetchQueries: [{ query: GET_TASKS_QUERY }],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

 const handleAddTask = (task) => {
  addTask({
    variables: {
      title: task.title,
      description: task.description,
      status: task.status || 'Pending',
    },
  }).catch((err) => {
    console.error('Error adding task:', err.message);
  });
};


const handleUpdateStatus = (id, status) => {
    updateTaskStatus({ variables: { id, status } }).catch((err) => {
      console.error('Error updating task status:', err.message);
    });
  };
  
  return (
    <div>
      <h1>Task Management</h1>
      <Form onSubmit={handleAddTask} />
      {data.getTasks.map((task) => (
        <TaskCard key={task.id} task={task} onUpdateStatus={handleUpdateStatus} />
      ))}
    </div>
  );  
};

export default TaskManagement;