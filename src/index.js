import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';  // Import file CSS mới
import App from './App';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Bao bọc AuthProvider bên trong Router */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);


