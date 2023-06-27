import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const accessToken = localStorage.getItem('accessToken');
  const isAuthenticated = !!accessToken; 

  return isAuthenticated ? (
    <Route {...rest} element={<Outlet />} />
  ) : (
    <Navigate to="/unauthorized" replace={true} />
  );
};

export default ProtectedRoute;
