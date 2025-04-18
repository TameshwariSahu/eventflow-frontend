import React, { useState, useEffect } from 'react';

function Dashboard({ userEmail }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Mock fetching events
    setEvents([
      { id: 1, name: 'Tech Conference' },
      { id: 2, name: 'React Workshop' },
      { id: 3, name: 'Node.js Meetup' },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Welcome, {userEmail}</h2>
      <h3 className="text-xl">Upcoming Events</h3>
      <ul className="mt-4">
        {events.map((event) => (
          <li key={event.id} className="border p-2 mt-2">
            {event.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
