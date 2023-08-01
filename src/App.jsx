import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AppBar from "./Components/AppBar";

// Public Routes
import Login from "./Pages/Authentication/Login";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import VerificationCode from "./Pages/Authentication/VerificationCode";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Unauthorized from "./Pages/UnauthorizedPage/Unauthorized";

// Super Admin Routes
import Dashboard from "./Pages/SuperAdmin/Dashboard/Dashboard";
import Admin from "./Pages/SuperAdmin/Admin/AddAdmin";
import EditAdmin from "./Pages/SuperAdmin/Admin/EditAdmin";
import AdminList from "./Pages/SuperAdmin/Admin/AdminList";
import AdminDetails from "./Pages/SuperAdmin/Admin/AdminDetails";
import SuperAdminComplaints from "./Pages/SuperAdmin/Complaints/Complaints";
import ComplaintsDetail from "./Pages/SuperAdmin/Complaints/ComplaintsDetail";
import AddOrganization from "./Pages/SuperAdmin/Organization/AddOrganization";
import EditOrganization from "./Pages/SuperAdmin/Organization/EditOrganization";
import OrganizationList from "./Pages/SuperAdmin/Organization/OrganizationList";
import OrganizationDetail from "./Pages/SuperAdmin/Organization/OrganizationDetail";

// Admin Routes
import AdminDashboard from "./Pages/Admin/Dashboard/AdminDashboard";
import Requests from "./Pages/Admin/Requests/Requests";
import AdminViewRequest from "./Pages/Admin/Requests/AdminViewRequest";
import Inventory from "./Pages/Admin/Inventory/Inventory";
import AddItem from "./Pages/Admin/Inventory/AddItem";
import ViewItem from "./Pages/Admin/Inventory/ViewItem";
import Categories from "./Pages/Admin/Categories/Categories";
import AddCategory from "./Pages/Admin/Categories/AddCategory";
import ViewCategory from "./Pages/Admin/Categories/ViewCategory";
import EditCategory from "./Pages/Admin/Categories/EditCategory";
import Employees from "./Pages/Admin/Employees/Employees";
import AddEmployee from "./Pages/Admin/Employees/AddEmployee";
import ViewEmployee from "./Pages/Admin/Employees/ViewEmployee";
import Returns from "./Pages/Admin/Returns/Returns";
import ViewReturn from "./Pages/Admin/Returns/ViewReturn";
import AdminComplaints from "./Pages/Admin/Complaints/AdminComplaints";
import ViewAdminComplaint from "./Pages/Admin/Complaints/ViewAdminComplaint";
import AdminAddComplaint from "./Pages/Admin/Complaints/AdminAddComplaint";
import Vendors from "./Pages/Admin/Vendors/Vendors";
import AddVendors from "./Pages/Admin/Vendors/AddVendors";
import ViewVendor from "./Pages/Admin/Vendors/ViewVendor";

// Employee Routes
import EmployeeDashboard from "./Pages/Employee/Dashboard/EmployeeDashboard";
import EditProfile from "./Pages/Employee/Dashboard/EditProfile";
import Complaints from "./Pages/Employee/Complain/Complaints";
import AddComplain from "./Pages/Employee/Complain/AddComplain";
import ViewComplain from "./Pages/Employee/Complain/ViewComplain";
import Request from "./Pages/Employee/Request/Request";
import ViewRequest from "./Pages/Employee/Request/ViewRequest";
import AddRequest from "./Pages/Employee/Request/AddRequest";
//Protected & CSS
import ProtectedRoute from "./Routes/ProtectedRoute";
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
    <React.Fragment>
      <AppBar userRole={userRole} />

      <Routes>
        {/* Auth Routes */}
        <Route path="/" exact element={<Login />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/forgotPassword" exact element={<ForgotPassword />} />
        <Route path="/verificationCode" exact element={<VerificationCode />} />

        {/* SuperAdmin Routes */}
        <Route
          path="/superAdminDashboard"
          exact
          element={
            <ProtectedRoute
              element={Dashboard}
              allowedRoles={["SUPER_ADMIN"]}
              userRole={userRole}
            />
          }
        />

        <Route
          path="/addAdmin"
          exact
          element={
            <ProtectedRoute
              element={Admin}
              allowedRoles={["SUPER_ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/editAdmin/:id"
          exact
          element={
            <ProtectedRoute
              element={EditAdmin}
              allowedRoles={["SUPER_ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/adminsList"
          exact
          element={
            <ProtectedRoute
              element={AdminList}
              allowedRoles={["SUPER_ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/adminsDetails/:id"
          exact
          element={
            <ProtectedRoute
              element={AdminDetails}
              allowedRoles={["SUPER_ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/superAdminComplaints"
          exact
          element={
            <ProtectedRoute
              element={SuperAdminComplaints}
              allowedRoles={["SUPER_ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/superAdminComplaintDetails/:id"
          exact
          element={
            <ProtectedRoute
              element={ComplaintsDetail}
              allowedRoles={["SUPER_ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/superAdminOrganization"
          exact
          element={
            <ProtectedRoute
              element={AddOrganization}
              allowedRoles={["SUPER_ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/editOrganization/:id"
          exact
          element={
            <ProtectedRoute
              element={EditOrganization}
              allowedRoles={["SUPER_ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/superAdminOrganizationList"
          exact
          element={
            <ProtectedRoute
              element={OrganizationList}
              allowedRoles={["SUPER_ADMIN"]}
              userRole={userRole}
            />
          }
        />

        <Route
          path="/superAdminOrganizationDetails/:id"
          element={
            <ProtectedRoute
              element={OrganizationDetail}
              allowedRoles={["SUPER_ADMIN"]}
              userRole={userRole}
            />
          }
        />

        {/* Admin Routes */}

        <Route
          path="/adminDashboard"
          exact
          element={
            <ProtectedRoute
              element={AdminDashboard}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/adminRequest"
          exact
          element={
            <ProtectedRoute
              element={Requests}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/adminViewRequest/:id"
          exact
          element={
            <ProtectedRoute
              element={AdminViewRequest}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/adminInventory"
          exact
          element={
            <ProtectedRoute
              element={Inventory}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/addItem"
          exact
          element={
            <ProtectedRoute
              element={AddItem}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/viewItem/:id"
          exact
          element={
            <ProtectedRoute
              element={ViewItem}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/categories"
          exact
          element={
            <ProtectedRoute
              element={Categories}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/addCategory"
          exact
          element={
            <ProtectedRoute
              element={AddCategory}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/viewCategory/:id"
          exact
          element={
            <ProtectedRoute
              element={ViewCategory}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/editCategory/:id"
          exact
          element={
            <ProtectedRoute
              element={EditCategory}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/employees"
          exact
          element={
            <ProtectedRoute
              element={Employees}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/addEmployee"
          exact
          element={
            <ProtectedRoute
              element={AddEmployee}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/viewEmployee/:id"
          exact
          element={
            <ProtectedRoute
              element={ViewEmployee}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/returns"
          exact
          element={
            <ProtectedRoute
              element={Returns}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/viewReturn/:id"
          exact
          element={
            <ProtectedRoute
              element={ViewReturn}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/adminComplaints"
          exact
          element={
            <ProtectedRoute
              element={AdminComplaints}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/adminAddComplaints"
          exact
          element={
            <ProtectedRoute
              element={AdminAddComplaint}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/adminViewComplaints/:id"
          exact
          element={
            <ProtectedRoute
              element={ViewAdminComplaint}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/vendors"
          exact
          element={
            <ProtectedRoute
              element={Vendors}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/addVendor"
          exact
          element={
            <ProtectedRoute
              element={AddVendors}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />
        <Route
          path="/viewVendor/:id"
          exact
          element={
            <ProtectedRoute
              element={ViewVendor}
              allowedRoles={["ADMIN"]}
              userRole={userRole}
            />
          }
        />

        {/* Employee Routes */}

        <Route
          path="/employeeDashboard"
          element={
            <ProtectedRoute
              element={EmployeeDashboard}
              allowedRoles={["EMPLOYEE"]}
              userRole={userRole}
            />
          }
        />

        <Route
          path="/editProfile"
          element={
            <ProtectedRoute
              element={EditProfile}
              allowedRoles={["EMPLOYEE"]}
              userRole={userRole}
            />
          }
        />

        <Route
          path="/addComplaint"
          element={
            <ProtectedRoute
              element={AddComplain}
              allowedRoles={["EMPLOYEE"]}
              userRole={userRole}
            />
          }
        />

        <Route
          path="/employeeComplaint"
          element={
            <ProtectedRoute
              element={Complaints}
              allowedRoles={["EMPLOYEE"]}
              userRole={userRole}
            />
          }
        />

        <Route
          path="/complaintDetail/:id"
          element={
            <ProtectedRoute
              element={ViewComplain}
              allowedRoles={["EMPLOYEE"]}
              userRole={userRole}
            />
          }
        />

        <Route
          path="/addRequest"
          element={
            <ProtectedRoute
              element={AddRequest}
              allowedRoles={["EMPLOYEE"]}
              userRole={userRole}
            />
          }
        />

        <Route
          path="/requests"
          element={
            <ProtectedRoute
              element={Request}
              allowedRoles={["EMPLOYEE"]}
              userRole={userRole}
            />
          }
        />

        <Route
          path="/requestDetail/:id"
          element={
            <ProtectedRoute
              element={ViewRequest}
              allowedRoles={["EMPLOYEE"]}
              userRole={userRole}
            />
          }
        />

        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
