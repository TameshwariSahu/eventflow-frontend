// import React, { useState } from 'react';
// import Login from './components/Login';
// import Dashboard from './components/Attendee_dashboard';

// function App() {
//   const [userEmail, setUserEmail] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = (email) => {
//     setUserEmail(email);
//     setIsLoggedIn(true);
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <Dashboard userEmail={userEmail} />
//       ) : (
//         <Login onLogin={handleLogin} />
//       )}
//     </div>
//   );
// }
// export default App;
import React, { useState } from 'react';
import Login from './components/Login';
import Attendee_dashboard from './components/Attendee_dashboard';
import Organizer_dashboard from './components/Organizer_dashboard';

function App() {
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(''); // new

  const handleLogin = (email, type) => {
    setUserEmail(email);
    setUserType(type); // e.g., "attendee" or "organizer"
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        userType === 'organizer' ? (
          <Organizer_dashboard userEmail={userEmail} />
        ) : (
          <Attendee_dashboard userEmail={userEmail} />
        )
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
