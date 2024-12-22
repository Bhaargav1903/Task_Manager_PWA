import { gql } from '@apollo/client';

export const GET_TASKS_QUERY = gql`
  query GetTasks {
    getTasks {
      id
      title
      description
      status
    }
  }
`;

export const ADD_TASK_MUTATION = gql`
  mutation AddTask($title: String!, $description: String!, $status: String!) {
    addTask(title: $title, description: $description, status: $status) {
      id
      title
      description
      status
    }
  }
`;

export const UPDATE_TASK_STATUS_MUTATION = gql`
  mutation UpdateTaskStatus($id: ID!, $status: String!) {
    updateTaskStatus(id: $id, status: $status) {
      id
      title
      description
      status
    }
  }
`;

export const GET_USERS_QUERY = gql`
  query GetUsers {
    getUsers {
      id
      name
      email
    }
  }
`;

export const ADD_USER_MUTATION = gql`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;
