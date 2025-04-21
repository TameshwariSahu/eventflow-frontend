import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import OrganizerDashboard from './components/Organizer_dashboard.jsx';
import AttendeeDashboard from './components/Attendee_dashboard.jsx';


function MainApp() {
  const navigate = useNavigate();

  function handleLogin(email, role) {
    if (role === 'organizer') {
      navigate('/organizer_dashboard');
    } else {
      navigate('/attendee_dashboard');
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={handleLogin} />} />
      <Route path="/organizer_dashboard" element={<OrganizerDashboard />} />
      <Route path="/attendee_dashboard" element={<AttendeeDashboard />} />

    </Routes>
  );
}

export default MainApp;
