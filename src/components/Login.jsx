// import React, { useState } from 'react';

// function Login({ onLogin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('attendee'); 

//   const handleLogin = () => {
//     if (email && password) {
//       onLogin(email, role); 
//       setEmail('');
//       setPassword('');
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 rounded-md w-96 mx-auto mt-10">
//       <h2 className="text-2xl text-center mb-4">Login</h2>

//       <select
//         value={role}
//         onChange={(e) => setRole(e.target.value)}
//         className="border p-2 w-full mb-4"
//       >
//         <option value="attendee">Attendee</option>
//         <option value="organizer">Organizer</option>
//       </select>

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="border p-2 w-full mt-2"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="border p-2 w-full mt-4"
//       />

//       <button
//         onClick={handleLogin}
//         className="bg-blue-500 text-white w-full p-2 mt-4 rounded-md"
//       >
//         Login as {role === 'organizer' ? 'Organizer' : 'Attendee'}
//       </button>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('attendee');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, role); // Send role as well
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 m-2"
      />
      <select onChange={(e) => setRole(e.target.value)} className="border p-2 m-2">
        <option value="attendee">Attendee</option>
        <option value="organizer">Organizer</option>
      </select>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 m-2">Login</button>
    </form>
  );
}

export default Login;
