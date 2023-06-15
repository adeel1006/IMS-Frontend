import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ element: Component, allowedRoles }) {
  const userRole = getUserRole(); // Function to get the user role

  if (allowedRoles.includes(userRole)) {
    return <Route element={<Component />} />;
  } else {
    return <Navigate to="/unauthorized" />;
  }
}

export default ProtectedRoute;
