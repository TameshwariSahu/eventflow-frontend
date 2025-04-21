// // import React from 'react';

// // function OrganizerDashboard() {
// //   return (
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold">Organizer Dashboard</h1>
// //       <p>Welcome to the Organizer Dashboard!</p>
// //     </div>
// //   );
// // }

// // export default OrganizerDashboard;
// import React from 'react';
// import Insertion from './Insertion';
// import Updation from './Updation';
// import Remove from './Remove';



// function Organizer_dashboard({ userEmail }) {
//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold">Organizer Dashboard</h1>
//       <p>Welcome, {userEmail}</p>

//       <div className="mt-4">
//         <Insertion />
//         <Updation />
//         <Remove />
//       </div>
//     </div>
//   );
// }

// export default Organizer_dashboard;
import React, { useState } from 'react';
import Insertion from './Insertion';
import Updation from './Updation';
import Remove from './Remove';

function Organizer_dashboard({ userEmail }) {
  const [registrations, setRegistrations] = useState([]);
  const [showRegistrations, setShowRegistrations] = useState(false);

  const fetchRegistrations = () => {
    fetch('http://localhost:8090/view_registration')   // Assuming you have this endpoint for fetching registrations
      .then((res) => res.json())
      .then((data) => {
        setRegistrations(data);
        setShowRegistrations(true);
      })
      .catch((err) => {
        console.error('Error fetching registrations:', err);
        alert('Error fetching registrations');
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Organizer Dashboard</h1>
      <p>Welcome, {userEmail}</p>

      <div className="mt-4">
        <Insertion />
        <Updation />
        <Remove />
      </div>

      <div className="mt-4">
        <button
          onClick={fetchRegistrations}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          View Attendee Registrations
        </button>
      </div>

      {showRegistrations && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Attendee Registrations</h2>
          <table className="table-auto w-full mt-2 border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Event Name</th>
                <th className="border p-2">Attendee Name</th>
                <th className="border p-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((registration, index) => (
                <tr key={index}>
                  <td className="border p-2">{registration.event_name}</td>
                  <td className="border p-2">{registration.attendee_name}</td>
                  <td className="border p-2">{registration.attendee_email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Organizer_dashboard;
