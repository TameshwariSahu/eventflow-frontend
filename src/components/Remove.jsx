import { useState } from "react";
import React from "react";

function DeleteEvent() {
  const [eventId, setEventId] = useState("");

  function deleteEvent() {
    fetch(`http://localhost:8090/delete/${eventId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Deleted:", data);
        alert("Event deleted successfully!");
      });
  }

  return (
    <div className="p-4">
      <h2>Delete Event</h2>
      <input placeholder="Event ID" onChange={(e) => setEventId(e.target.value)} className="border p-1 m-1" />
      <button onClick={deleteEvent} className="bg-red-500 text-white px-4 py-1 rounded m-1">Delete</button>
    </div>
  );
}

export default DeleteEvent;
