import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element, allowedRoles, userRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole === null) {
      navigate("/login");
      ["accessToken", "userRole", "userId"].forEach((item) => {
        localStorage.removeItem(item);
      });
    } else if (!allowedRoles.includes(userRole)) {
      navigate("/unauthorized");
    }
  }, [userRole, navigate, allowedRoles]);

  if (!allowedRoles.includes(userRole) || userRole === null) {
    return null; 
  }
  return <Element />;
};

export default ProtectedRoute;
