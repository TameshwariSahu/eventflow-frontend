import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Mocking login functionality
    if (email && password) {
      onLogin(email)
      setEmail('');
      setPassword('');
    }
  };

  function val1(e){
    setEmail(e.target.value);
  }
  function val2(e){
    setPassword(e.target.value);
  }


  return (
    <div className="p-6 bg-gray-100 rounded-md w-96 mx-auto mt-10">
      <h2 className="text-2xl text-center">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={val1}
        className="border p-2 w-full mt-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={val2}
        className="border p-2 w-full mt-4"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white w-full p-2 mt-4 rounded-md"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
