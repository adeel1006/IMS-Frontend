import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Pages/SuperAdmin/Admin/AddAdmin";
import Login from "./Pages/Authentication/Login";
import AdminList from "./Pages/SuperAdmin/Admin/AdminList";
import AdminDetails from "./Pages/SuperAdmin/Admin/AdminDetails";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import SuperAdminComplaints from "./Pages/SuperAdmin/Complaints/Complaints";
import  ResponsiveAppBar  from "./Components/Appbar"
import ComplaintsDetail from "./Pages/SuperAdmin/Complaints/ComplaintsDetail";
import AddOrganization from "./Pages/SuperAdmin/Organization/AddOrganization";
import OrganizationList from "./Pages/SuperAdmin/Organization/OrganizationList";
import OrganizationDetail from "./Pages/SuperAdmin/Organization/OrganizationDetail";
import Dashboard from "./Pages/SuperAdmin/Dashboard/Dashboard";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import VerificationCode from "./Pages/Authentication/VerificationCode";
import Complaints from "./Pages/Employee/Complain/Complaints";
import AddComplain from "./Pages/Employee/Complain/AddComplain";
import ViewComplain from "./Pages/Employee/Complain/ViewComplain";
import Request from "./Pages/Employee/Request/Request";
import ViewRequest from "./Pages/Employee/Request/ViewRequest";
import AddRequest from "./Pages/Employee/Request/AddRequest";
import EmployeeDashboard from "./Pages/Employee/Dashboard/EmployeeDashboard";
import EditProfile from "./Pages/Employee/Dashboard/EditProfile";
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


function App() {
  return (
    <>
    
      <ResponsiveAppBar/>
      <Router>

        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="login" exact element={<Login />} />
          <Route path="forgotPassword" exact element={<ForgotPassword />} />
          <Route path="verificationCode" exact element={<VerificationCode />} />


          <Route path="superAdminDashboard" exact element={<Dashboard/>}/>
          <Route path="addAdmin" exact element={<Admin />} />
          <Route path="adminsList" exact element={<AdminList />} />
          <Route path="adminsDetails" exact element={<AdminDetails />} />
          <Route path ="superAdminComplaints" exact element={<SuperAdminComplaints/>}/>
          <Route path ="superAdminComplaintDetails" exact element={<ComplaintsDetail/>}/>
          <Route path="superAdminOrganization" exact element={<AddOrganization />} />
          <Route path="superAdminOrganizationList" exact element={<OrganizationList />} />
          <Route path="superAdminOrganizationDetails" exact element={<OrganizationDetail />} />


          <Route path="/employeeDashboard" exact element={<EmployeeDashboard/>} />
          <Route path="/editProfile" exact element={<EditProfile />} />
          <Route path="/addComplaint" exact element={<AddComplain />} />
          <Route path="/employeeComplaint" exact element={<Complaints />} />       
          <Route path="/complaintDetail" exact element={<ViewComplain />} />
          <Route path="/addRequest" exact element={<AddRequest/>} />
          <Route path="/requests" exact element={<Request />} />
          <Route path="/requestDetail" exact element={<ViewRequest />} />


          <Route path="/adminDashboard" exact element={<AdminDashboard />} />
          <Route path="/adminRequest" exact element={<Requests />} />
          <Route path="/adminViewRequest" exact element={< AdminViewRequest />} />
          <Route path="/adminInventory" exact element={< Inventory />} />
          <Route path="/addItem" exact element={< AddItem />} />
          <Route path="/viewItem" exact element={< ViewItem />} />
          <Route path="/categories" exact element={< Categories />} />
          <Route path="/addCategory" exact element={< AddCategory />} />
          <Route path="/viewCategory" exact element={< ViewCategory />} />
          <Route path="/employees" exact element={< Employees />} />
          <Route path="/addEmployee" exact element={< AddEmployee />} />
          <Route path="/viewEmployee" exact element={< ViewEmployee />} />
          <Route path="/returns" exact element={< Returns />} />
          <Route path="/viewReturn" exact element={< ViewReturn />} />
          <Route path="/adminComplaints" exact element={< AdminComplaints />} />
          <Route path="/adminAddComplaints" exact element={< AdminAddComplaint />} />
          <Route path="/adminViewComplaints" exact element={< ViewAdminComplaint />} />


          



          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
