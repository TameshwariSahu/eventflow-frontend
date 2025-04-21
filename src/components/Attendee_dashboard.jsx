import React, { useState } from 'react';

function Dashboard({ userEmail }) {
  const [events, setEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  // Fetch events list
  function show() {
    fetch("http://localhost:8090/list/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setEvents(data);   
      })
      .catch(error => {
        console.error("Error fetching event list:", error);
      });
  }

  // Register for an event
  function register(eventId) {
    const userId = 1; // Mocked user ID, replace with actual logged-in user ID

    fetch("http://localhost:8090/events/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId, eventId })
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);  // Alert the user upon successful registration
        setRegisteredEvents(prev => [...prev, eventId]); // Add the event ID to registered events
      })
      .catch(error => {
        console.error("Error registering for event:", error);
      });
  }

  // Unregister from an event
  function unregister(eventId) {
    const userId = 1; // Mocked user ID, replace with actual logged-in user ID

    fetch("http://localhost:8090/events/unregister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId, eventId })
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);  // Alert the user upon successful unregistration
        setRegisteredEvents(prev => prev.filter(id => id !== eventId)); // Remove the event ID from registered events
      })
      .catch(error => {
        console.error("Error unregistering from event:", error);
      });
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Welcome, <span className="text-blue-600">{userEmail}</span>
      </h2>

      <button 
        onClick={show} 
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded shadow transition duration-300"
      >
        Show Upcoming Events
      </button>

      {events.length > 0 && (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border border-gray-300 text-left text-sm">
            <thead>
              <tr className="bg-blue-100 text-gray-700 uppercase tracking-wider">
                <th className="border p-3">Event Name</th>
                <th className="border p-3">Description</th>
                <th className="border p-3">Date</th>
                <th className="border p-3">Location</th>
                <th className="border p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border p-3">{event.name}</td>
                  <td className="border p-3">{event.description}</td>
                  <td className="border p-3">{event.date}</td>
                  <td className="border p-3">{event.location}</td>
                  <td className="border p-3">
                    {registeredEvents.includes(event.id) ? (
                      <button 
                        onClick={() => unregister(event.id)} 
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition duration-300"
                      >
                        Unregister
                      </button>
                    ) : (
                      <button 
                        onClick={() => register(event.id)} 
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition duration-300"
                      >
                        Register
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
