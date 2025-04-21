
## EventFlow - Event Management System

 Project Overview

EventFlow is a full-stack event management application where:

Users can view a list of available events.

Users can register/unregister for events.

All user actions (registration/unregistration) are logged into an audit log for accountability.

 Workflow & Data Flow

1. Frontend (React):

User logs in or accesses event list.

User clicks Register or Unregister on an event.

API request is sent to the backend.

2. Backend (Express + MySQL):

Receives API request.

Executes SQL query (Insert/Delete in registrations table).

Logs action in audit_logs table.

Sends response back to frontend.

3. Audit Logs:

Every user action like registering or unregistering is recorded with timestamp, userId, and eventId.

 Database Schema

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


## How to Run Locally

1. Clone the repo
```bash
git clone https://github.com/TameshwariSahu/eventflow-frontend.git
cd eventflow-frontend
 (Initial commit with login and dashboard)
