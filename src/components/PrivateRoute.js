import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  console.log("PrivateRoute - isAuthenticated:", isAuthenticated);

  if (isAuthenticated === false) {
    console.log("Redirecting to /login...");
    return <Navigate to="/login" replace />;
  }

  console.log("Rendering protected route...");
  return <Outlet />;
};

export default PrivateRoute;
