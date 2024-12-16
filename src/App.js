import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import TaskManagement from './pages/TaskManagement';
import UserManagement from './pages/UserManagement';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import { UserProvider } from './context/UserContext';
const Header = () => (
  <nav>
    <Link to="/">Home</Link> | <Link to="/tasks">Tasks</Link> | <Link to="/users">Users</Link>
  </nav>
);


const App = () => (
  <ApolloProvider client={client}>
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManagement />} />
          <Route path="/users" element={<UserManagement />} />
        </Routes>
      </Router>
    </UserProvider>
  </ApolloProvider>
);

export default App;