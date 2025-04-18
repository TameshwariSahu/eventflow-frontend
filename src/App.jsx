import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email) => {
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard userEmail={userEmail} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}
export default App;
