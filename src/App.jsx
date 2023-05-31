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
          <Route path="newAdmin" exact element={<Admin />} />
          <Route path="adminsList" exact element={<AdminList />} />
          <Route path="adminsDetails" exact element={<AdminDetails />} />
          <Route path ="superAdminComplaints" exact element={<SuperAdminComplaints/>}/>
          <Route path ="superAdminComplaintDetails" exact element={<ComplaintsDetail/>}/>
          <Route path="superAdminOrganization" exact element={<AddOrganization />} />
          <Route path="superAdminOrganizationList" exact element={<OrganizationList />} />
          <Route path="superAdminOrganizationDetails" exact element={<OrganizationDetail />} />


          <Route path="/employeeComplaint" element={<Complaints />} />
          <Route path="/addComplaint" element={<AddComplain />} />
          <Route path="/complaintDetail" element={<ViewComplain />} />

          <Route path="/requests" element={<Request />} />
          <Route path="/requestDetail" element={<ViewRequest />} />
          <Route path="/addRequest" element={<AddRequest/>} />


          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
