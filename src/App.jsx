import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AppBar from "./Components/AppBar";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Unauthorized from "./Pages/UnauthorizedPage/Unauthorized";

// Public Routes
import Login from "./Pages/Authentication/Login";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import VerificationCode from "./Pages/Authentication/VerificationCode";

// Super Admin Routes
import Dashboard from "./Pages/SuperAdmin/Dashboard/Dashboard";
import Admin from "./Pages/SuperAdmin/Admin/AddAdmin";
import AdminList from "./Pages/SuperAdmin/Admin/AdminList";
import AdminDetails from "./Pages/SuperAdmin/Admin/AdminDetails";
import SuperAdminComplaints from "./Pages/SuperAdmin/Complaints/Complaints";
import ComplaintsDetail from "./Pages/SuperAdmin/Complaints/ComplaintsDetail";
import AddOrganization from "./Pages/SuperAdmin/Organization/AddOrganization";
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
import "./App.css";

function App() {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");

  // useEffect(() => {
  //   if (userRole === null) {
  //     navigate("/login");
  //   }
  // }, [userRole, navigate]);

  return (
    <React.Fragment>
      <AppBar userRole={userRole} />

      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/forgotPassword" exact element={<ForgotPassword />} />
        <Route path="/verificationCode" exact element={<VerificationCode />} />

        <Route path="/superAdminDashboard" exact element={<Dashboard />} />
        <Route path="/addAdmin" exact element={<Admin />} />
        <Route path="/adminsList" exact element={<AdminList />} />
        <Route path="/adminsDetails/:id" exact element={<AdminDetails />} />
        <Route
          path="/superAdminComplaints"
          exact
          element={<SuperAdminComplaints />}
        />
        <Route
          path="/superAdminComplaintDetails/:id"
          exact
          element={<ComplaintsDetail />}
        />
        <Route
          path="/superAdminOrganization"
          exact
          element={<AddOrganization />}
        />
        <Route
          path="/superAdminOrganizationList"
          exact
          element={<OrganizationList />}
        />

        <Route
          path="/superAdminOrganizationDetails/:id"
          element={<OrganizationDetail />}
        />

        <Route
          path="/employeeDashboard"
          exact
          element={<EmployeeDashboard />}
        />
        <Route path="/editProfile" exact element={<EditProfile />} />
        <Route path="/addComplaint" exact element={<AddComplain />} />
        <Route path="/employeeComplaint" exact element={<Complaints />} />
        <Route path="/complaintDetail/:id" exact element={<ViewComplain />} />
        <Route path="/addRequest" exact element={<AddRequest />} />
        <Route path="/requests" exact element={<Request />} />
        <Route path="/requestDetail/:id" exact element={<ViewRequest />} />

        <Route path="/adminDashboard" exact element={<AdminDashboard />} />
        <Route path="/adminRequest" exact element={<Requests />} />
        <Route
          path="/adminViewRequest/:id"
          exact
          element={<AdminViewRequest />}
        />
        <Route path="/adminInventory" exact element={<Inventory />} />
        <Route path="/addItem" exact element={<AddItem />} />
        <Route path="/viewItem" exact element={<ViewItem />} />
        <Route path="/categories" exact element={<Categories />} />
        <Route path="/addCategory" exact element={<AddCategory />} />
        <Route path="/viewCategory" exact element={<ViewCategory />} />
        <Route path="/employees" exact element={<Employees />} />
        <Route path="/addEmployee" exact element={<AddEmployee />} />
        <Route path="/viewEmployee/:id" exact element={<ViewEmployee />} />
        <Route path="/returns" exact element={<Returns />} />
        <Route path="/viewReturn/:id" exact element={<ViewReturn />} />
        <Route path="/adminComplaints" exact element={<AdminComplaints />} />
        <Route
          path="/adminAddComplaints"
          exact
          element={<AdminAddComplaint />}
        />
        <Route
          path="/adminViewComplaints/:id"
          exact
          element={<ViewAdminComplaint />}
        />
        <Route path="/vendors" exact element={<Vendors />} />
        <Route path="/addVendor" exact element={<AddVendors />} />
        <Route path="/viewVendor/:id" exact element={<ViewVendor />} />

        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
