import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Pages/SuperAdmin/Admin/AddAdmin";
import Login from "./Pages/Login/Login";
import AdminList from "./Pages/SuperAdmin/Admin/AdminList";
import AdminDetails from "./Pages/SuperAdmin/Admin/AdminDetails";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import SuperAdminComplaints from "./Pages/SuperAdmin/Complaints/Complaints";
import  ResponsiveAppBar  from "./Components/Appbar"
import ComplaintsDetail from "./Pages/SuperAdmin/Complaints/ComplaintsDetail";
import AddOrganization from "./Pages/SuperAdmin/Organization/AddOrganization";
import OrganizationList from "./Pages/SuperAdmin/Organization/OrganizationList";
import OrganizationDetail from "./Pages/SuperAdmin/Organization/OrganizationDetail";

function App() {
  return (
    <>
    
      <ResponsiveAppBar/>
      <Router>
        <Routes>
  
          <Route path="/" exact element={<Login />} />
          <Route path="login" exact element={<Login />} />

          <Route path="newAdmin" exact element={<Admin />} />
          <Route path="adminsList" exact element={<AdminList />} />
          <Route path="adminsDetails" exact element={<AdminDetails />} />

          <Route path ="superAdminComplaints" exact element={<SuperAdminComplaints/>}/>
          <Route path ="superAdminComplaintDetails" exact element={<ComplaintsDetail/>}/>

          <Route path="superAdminOrganization" exact element={<AddOrganization />} />
          <Route path="superAdminOrganizationList" exact element={<OrganizationList />} />
          <Route path="superAdminOrganizationDetails" exact element={<OrganizationDetail />} />

          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
