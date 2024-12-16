// import React, { useState } from 'react';

// const Form = ({ onSubmit, initialValues = {} }) => {
//   const [values, setValues] = useState(initialValues);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(values);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="title"
//         placeholder="Task Title"
//         value={values.title || ''}
//         onChange={handleChange}
//       />
//       <textarea
//         name="description"
//         placeholder="Task Description"
//         value={values.description || ''}
//         onChange={handleChange}
//       ></textarea>
//       <select
//         name="status"
//         value={values.status || 'pending'}
//         onChange={handleChange}
//       >
//         <option value="pending">Pending</option>
//         <option value="completed">Completed</option>
//       </select>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;

import React, { useState } from 'react';

const Form = ({ onSubmit, initialValues = {} }) => {
  const [values, setValues] = useState({
    ...initialValues,
    status: initialValues.status || 'pending', // Default status to "pending"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    setValues({ title: '', description: '', status: 'pending' }); // Reset form fields
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={values.title || ''}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={values.description || ''}
        onChange={handleChange}
        required
      ></textarea>
      <select
        name="status"
        value={values.status}
        onChange={handleChange}
      >
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Form;
