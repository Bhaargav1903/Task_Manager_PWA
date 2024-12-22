import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import TaskManagement from './pages/TaskManagement';
import UserManagement from './pages/UserManagement';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import { UserProvider } from './context/UserContext';
//import NotificationButton from './components/NotificationButton';
import { useEffect } from 'react';
import { generateToken ,messaging} from './notifications/firebase';
import { onMessage } from 'firebase/messaging';
import toast, { Toaster } from 'react-hot-toast';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold" style={{ color: '#ede8f5' }}>
          TaskMaster
        </h1> {/* Website Name */}
        <div className="flex items-center space-x-4">
          {/* Notification Button (Bell Icon) */}
          
          {/* Hamburger Menu */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
        <nav
          className={`lg:flex lg:space-x-6 ${
            menuOpen ? "block" : "hidden"
          } absolute lg:static top-16 right-6 bg-primary lg:bg-transparent p-4 lg:p-0 rounded-md lg:rounded-none shadow-lg lg:shadow-none`}
        >
          <Link
            to="/"
            className="block lg:inline-block text-white hover:text-secondary px-2 py-1 lg:p-0"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/tasks"
            className="block lg:inline-block text-white hover:text-secondary px-2 py-1 lg:p-0"
            onClick={() => setMenuOpen(false)}
          >
            Tasks
          </Link>
          <Link
            to="/users"
            className="block lg:inline-block text-white hover:text-secondary px-2 py-1 lg:p-0"
            onClick={() => setMenuOpen(false)}
          >
            Users
          </Link>
        </nav>
      </div>
    </header>
  );
};

// const App = () => (

function App() {
  useEffect(()=>{
    generateToken();
    onMessage(messaging,(payload)=>{
      console.log(payload);
      toast(payload.notification.body);
    })
  },[])

  return(
  <ApolloProvider client={client}>
    <Toaster position='top-right'/>
    <UserProvider>
      <Router>
        <Header />
        <div className="container mx-auto p-6">
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskManagement />} />
            <Route path="/users" element={<UserManagement />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  </ApolloProvider>
  );
};

export default App;
