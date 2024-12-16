
// import React from 'react';
// import UserProfile from '../components/UserProfile';
// import TaskCard from '../components/TaskCard';
// import { useQuery } from '@apollo/client';
// import { GET_USERS_QUERY, GET_TASKS_QUERY } from '../graphql/queries';

// const Home = () => {
//   const { data: userData, loading: userLoading, error: userError } = useQuery(GET_USERS_QUERY);
//   const { data: taskData, loading: taskLoading, error: taskError } = useQuery(GET_TASKS_QUERY);

//   if (userLoading || taskLoading) return <p>Loading...</p>;
//   if (userError) return <p>Error: {userError.message}</p>;
//   if (taskError) return <p>Error: {taskError.message}</p>;

//   return (
//     <div>
//       <h1>Home</h1>
//       <h2>Users</h2>
//       {userData.getUsers.map((user) => (
//         <UserProfile key={user.id} user={user} />
//       ))}
//       <h2>Tasks</h2>
//       {taskData.getTasks.map((task) => (
//         <TaskCard key={task.id} task={task} />
//       ))}
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import UserProfile from '../components/UserProfile';
import TaskCard from '../components/TaskCard';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS_QUERY, GET_TASKS_QUERY, UPDATE_TASK_STATUS_MUTATION } from '../graphql/queries';

const Home = () => {
  const { data: userData, loading: userLoading, error: userError } = useQuery(GET_USERS_QUERY);
  const { data: taskData, loading: taskLoading, error: taskError } = useQuery(GET_TASKS_QUERY);

  const [updateTaskStatus] = useMutation(UPDATE_TASK_STATUS_MUTATION, {
    refetchQueries: [{ query: GET_TASKS_QUERY }], // Refetch tasks after updating the status
  });

  if (userLoading || taskLoading) return <p>Loading...</p>;
  if (userError) return <p>Error: {userError.message}</p>;
  if (taskError) return <p>Error: {taskError.message}</p>;

  // Handle task status update
  const handleUpdateStatus = (id, status) => {
    updateTaskStatus({
      variables: { id, status },
    }).catch((err) => {
      console.error('Error updating task status:', err.message);
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <h2>Users</h2>
      {userData.getUsers.map((user) => (
        <UserProfile key={user.id} user={user} />
      ))}
      <h2>Tasks</h2>
      {taskData.getTasks.map((task) => (
        <TaskCard key={task.id} task={task} onUpdateStatus={handleUpdateStatus} />
      ))}
    </div>
  );
};

export default Home;
