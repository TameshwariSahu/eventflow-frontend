import { useState } from "react";
import React from "react";
function UpdateEvent() {
  const [eventId, setEventId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  function updateEvent() {
    fetch(`http://localhost:8090/update/${eventId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, date, location })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated:", data);
        alert("Event updated successfully!");
      });
  }

  return (
    <div className="p-4">
      <h2>Update Event</h2>
      <input placeholder="Event ID" onChange={(e) => setEventId(e.target.value)} className="border p-1 m-1" />
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} className="border p-1 m-1" />
      <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="border p-1 m-1" />
      <input placeholder="Date" onChange={(e) => setDate(e.target.value)} className="border p-1 m-1" />
      <input placeholder="Location" onChange={(e) => setLocation(e.target.value)} className="border p-1 m-1" />
      <button onClick={updateEvent} className="bg-yellow-500 text-white px-4 py-1 rounded m-1">Update</button>
    </div>
  );
}

export default UpdateEvent;
