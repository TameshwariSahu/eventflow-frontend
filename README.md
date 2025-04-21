#  EventFlow - Event Management System

##  Project Overview

**EventFlow** is a full-stack event management system built using **React (frontend)**, **Express.js (backend)**, and **MySQL (database)**. It supports **two types of users**:  
🔹 **Attendees** who register for events  
🔹 **Organizers** who manage events and view registrations  

All actions like registration/unregistration are tracked using an **audit log** for accountability.

---
## Frontend Repository

The frontend of this project is built using React and can be found at:

[Frontend GitHub Repository](https://github.com/TameshwariSahu/eventflow-frontend)

## Backend Repository

The backend of this project is built using Node.js, Express, and MySQL. It can be found at:

[Backend GitHub Repository](https://github.com/TameshwariSahu/eventflow-backend)

##  Roles in EventFlow

### 1. **Attendees**
- View a list of upcoming events.
- Register/Unregister for events.
- Their actions are recorded in the audit log.

### 2. **Organizers**
- Login with mock credentials.
- Add new events.
- Update existing events.
- Delete events.
- View list of registered attendees for each event.

---

##  Workflow & Data Flow

### Attendee:
1. Logs in or directly views events.
2. Clicks **Register/Unregister** on events.
3. Request goes to backend (`register.js`).
4. Registration table is updated and action is logged in `audit_logs`.

### Organizer:
1. Logs in using mock login.
2. Adds/Updates/Deletes event via respective forms.
3. Views list of registered users (via `view_registered.js`).
4. All event changes are handled in `insert.js`, `update.js`, `delete.js`.

---

---
## Tech Stack
Frontend: React.js + Tailwind CSS

Backend: Node.js + Express.js

Database: MySQL

Version Control: Git + GitHub

 ## Database Schema

 ### 0. `users` table
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);

1. events
create table events (
  id int auto_increment primary key,
  name varchar(255) not null,
  date date not null,
  location varchar(255) not null
);

2. registrations
create table registrations (
  id int auto_increment primary key,
  user_id int not null,
  event_id int not null,
  foreign key (event_id) references events(id)
);
3. audit_logs
create table audit_logs (
  id int auto_increment primary key,
  user_id int not null,
  action varchar(50),
  details text,
  timestamp datetime default current_timestamp
);
 
 Backend Structure

backend/
└── event/
    ├── audit_log.js           // Logs user actions (e.g., registration/unregistration)
    ├── connect.js             // Establishes a MySQL connection
    ├── delete.js              // Handles deletion of events or registrations
    ├── index.js               // Entry point for backend routes and server setup
    ├── insert.js              // Handles insertion of new events into the database
    ├── list.js                // Fetches a list of events from the database
    ├── register.js            // Manages user event registrations/unregistrations
    ├── update.js              // Updates event details in the database
    ├── view_registered.js     // Displays the list of registered attendees for each event
└── package.json              // Project dependencies and metadata


FRONTEND STRUCTURE 

eventflow/
├── src/
│   ├── components/
│   │   ├── Attendee_dashboard.jsx
│   │   ├── Insertion.jsx
│   │   ├── Login.jsx
│   │   ├── Organizer_dashboard.jsx
│   │   ├── Remove.jsx
│   │   └── Updation.jsx
│   ├── eventflow/
│   │   └── MainApp.jsx
│   ├── App.jsx
│   ├── index.js
│   └── main.jsx
├── public/
│   ├── index.html
└── package.json

## How to Run Locally

1. Clone the repo
```bash
git clone https://github.com/TameshwariSahu/eventflow-frontend.git
cd eventflow-frontend
 (Initial commit with login and dashboard)

Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev




