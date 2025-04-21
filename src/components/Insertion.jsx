import { useState } from "react";
import React from "react";

function InsertEvent() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  function insertEvent() {
    fetch("http://localhost:8090/insert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, date, location })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Inserted:", data);
        alert("Event inserted successfully!");
      });
  }

  return (
    <div className="p-4">
      <h2>Insert Event</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} className="border p-1 m-1" />
      <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="border p-1 m-1" />
      <input placeholder="Date" onChange={(e) => setDate(e.target.value)} className="border p-1 m-1" />
      <input placeholder="Location" onChange={(e) => setLocation(e.target.value)} className="border p-1 m-1" />
      <button onClick={insertEvent} className="bg-blue-500 text-white px-4 py-1 rounded m-1">Insert</button>
    </div>
  );
}

export default InsertEvent;
