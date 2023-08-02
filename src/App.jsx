import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AppBar from "./Components/AppBar";
import Login from "./Pages/Authentication/Login";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Unauthorized from "./Pages/UnauthorizedPage/Unauthorized";
import ProtectedRoute from "./Routes/ProtectedRoute";
import routesConfig from "./routesConfig";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    if (userRole === null) {
      navigate("/login");
      ["accessToken", "userRole", "userId"].forEach((item) => {
        localStorage.removeItem(item);
      });
    }
  }, [userRole]);

  return (
    <>
      <AppBar userRole={userRole} />

      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/login" exact element={<Login />} />

        {routesConfig.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={
              <ProtectedRoute
                element={route.component}
                allowedRoles={route.allowedRoles}
                userRole={userRole}
              />
            }
          />
        ))}

        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
