// import React, { useState } from 'react';

// const Form = ({ onSubmit }) => {
//   const [task, setTask] = useState({
//     title: '',
//     description: '',
//     status: 'Pending',
//   });

//   const handleInputChange = (e) => {
//     setTask({
//       ...task,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(task);
//     setTask({ title: '', description: '', status: 'Pending' });
//   };

//   return (
//     <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
//       <input
//         type="text"
//         name="title"
//         value={task.title}
//         onChange={handleInputChange}
//         placeholder="Task Title"
//         className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
//       />
//       <textarea
//         name="description"
//         value={task.description}
//         onChange={handleInputChange}
//         placeholder="Task Description"
//         className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
//       />
//       <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg">
//         Add Task
//       </button>
//     </form>
//   );
// };

// export default Form;

import React, { useState } from 'react';

const Form = ({ onSubmit, initialValues = {} }) => {
  const [values, setValues] = useState({
    ...initialValues,
    status: initialValues.status || 'Pending', // Default status to "pending"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    setValues({ title: '', description: '', status: 'Pending' }); // Reset form fields
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-lg mx-auto"
    >
      <div>
        {/* <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Task Title
        </label> */}
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Task Title"
          value={values.title || ''}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
        />
      </div>
      <div>
        {/* <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Task Description
        </label> */}
        <textarea
          name="description"
          id="description"
          placeholder="Task Description"
          value={values.description || ''}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
        ></textarea>
      </div>
      <div>
        {/* <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Status
        </label> */}
        <select
          name="status"
          id="status"
          value={values.status}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:outline-none"
      >
        Add Task
      </button>
    </form>
  );
};

export default Form;