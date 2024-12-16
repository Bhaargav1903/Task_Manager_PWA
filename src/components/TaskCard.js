import React, { useState } from 'react';

const TaskCard = ({ task, onUpdateStatus }) => {
  const [status, setStatus] = useState(task.status);

  const handleStatusChange = (e) => {
    setStatus(e.target.value); // Update the local status state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateStatus(task.id, status); // Call the update function with task ID and new status
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: <strong>{task.status}</strong></p>

      {/* Form to update task status */}
      <form onSubmit={handleSubmit}>
        <label htmlFor={`status-${task.id}`}>Update Status:</label>
        <select
          id={`status-${task.id}`}
          value={status}
          onChange={handleStatusChange}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default TaskCard;
