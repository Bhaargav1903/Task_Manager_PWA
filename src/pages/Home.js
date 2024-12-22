import React from 'react';
import UserProfile from '../components/UserProfile';
import TaskCard from '../components/TaskCard';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS_QUERY, GET_TASKS_QUERY, UPDATE_TASK_STATUS_MUTATION } from '../graphql/queries';

const Home = () => {
  const { data: userData, loading: userLoading, error: userError } = useQuery(GET_USERS_QUERY);
  const { data: taskData, loading: taskLoading, error: taskError } = useQuery(GET_TASKS_QUERY);

  const [updateTaskStatus] = useMutation(UPDATE_TASK_STATUS_MUTATION, {
    refetchQueries: [{ query: GET_TASKS_QUERY }],
  });

  if (userLoading || taskLoading)
    return <p className="text-center text-quaternary">Loading...</p>;

  if (userError)
    return <p className="text-center text-red-600">Error: {userError.message}</p>;

  if (taskError)
    return <p className="text-center text-red-600">Error: {taskError.message}</p>;

  const handleUpdateStatus = (id, status) => {
    updateTaskStatus({
      variables: { id, status },
    }).catch((err) => {
      console.error('Error updating task status:', err.message);
    });
  };

  return (
    <div className="bg-quinary min-h-screen p-6 space-y-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold text-primary">Dashboard</h1>

      {/* Users Section */}
      <section>
        <h2 className="text-2xl font-semibold text-secondary">Users</h2>
        <div className="mt-6 space-y-6">
          {userData.getUsers.map((user) => (
            <UserProfile key={user.id} user={user} />
          ))}
        </div>
      </section>

      {/* Tasks Section */}
      <section>
        <h2 className="text-2xl font-semibold text-secondary">Tasks</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {taskData.getTasks.map((task) => (
            <TaskCard key={task.id} task={task} onUpdateStatus={handleUpdateStatus} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
