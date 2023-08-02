import Login from "./Pages/Authentication/Login";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import VerificationCode from "./Pages/Authentication/VerificationCode";

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

import EmployeeDashboard from "./Pages/Employee/Dashboard/EmployeeDashboard";
import EditProfile from "./Pages/Employee/Dashboard/EditProfile";
import Complaints from "./Pages/Employee/Complain/Complaints";
import AddComplain from "./Pages/Employee/Complain/AddComplain";
import ViewComplain from "./Pages/Employee/Complain/ViewComplain";
import Request from "./Pages/Employee/Request/Request";
import ViewRequest from "./Pages/Employee/Request/ViewRequest";
import AddRequest from "./Pages/Employee/Request/AddRequest";
import { rolesTypes } from "./Utils/constants";

const routesConfig = [
  // Auth Routes
  {
    path: "/",
    exact: true,
    component: Login,
    allowedRoles: [],
  },
  {
    path: "/login",
    exact: true,
    component: Login,
    allowedRoles: [],
  },
  {
    path: "/forgotPassword",
    exact: true,
    component: ForgotPassword,
    allowedRoles: [],
  },
  {
    path: "/verificationCode",
    exact: true,
    component: VerificationCode,
    allowedRoles: [],
  },

  // SuperAdmin Routes
  {
    path: "/superAdminDashboard",
    exact: true,
    component: Dashboard,
    allowedRoles: [rolesTypes.SUPER_ADMIN],
  },
  {
    path: "/addAdmin",
    exact: true,
    component: Admin,
    allowedRoles: [rolesTypes.SUPER_ADMIN],
  },
  {
    path: "/editAdmin/:id",
    exact: true,
    component: EditAdmin,
    allowedRoles: [rolesTypes.SUPER_ADMIN],
  },
  {
    path: "/adminsList",
    exact: true,
    component: AdminList,
    allowedRoles: [rolesTypes.SUPER_ADMIN],
  },
  {
    path: "/adminsDetails/:id",
    exact: true,
    component: AdminDetails,
    allowedRoles: [rolesTypes.SUPER_ADMIN],
  },
  {
    path: "/superAdminComplaints",
    exact: true,
    component: SuperAdminComplaints,
    allowedRoles: [rolesTypes.SUPER_ADMIN],
  },
  {
    path: "/superAdminComplaintDetails/:id",
    exact: true,
    component: ComplaintsDetail,
    allowedRoles: [rolesTypes.SUPER_ADMIN],
  },
  {
    path: "/superAdminOrganization",
    exact: true,
    component: AddOrganization,
    allowedRoles: [rolesTypes.SUPER_ADMIN],
  },
  {
    path: "/editOrganization/:id",
    exact: true,
    component: EditOrganization,
    allowedRoles: [rolesTypes.SUPER_ADMIN],
  },
  {
    path: "/superAdminOrganizationList",
    exact: true,
    component: OrganizationList,
    allowedRoles: [rolesTypes.SUPER_ADMIN],
  },
  {
    path: "/superAdminOrganizationDetails/:id",
    component: OrganizationDetail,
    allowedRoles: [rolesTypes.SUPER_ADMIN],
  },

  // Admin Routes
  {
    path: "/adminDashboard",
    exact: true,
    component: AdminDashboard,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/adminRequest",
    exact: true,
    component: Requests,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/adminViewRequest/:id",
    exact: true,
    component: AdminViewRequest,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/adminInventory",
    exact: true,
    component: Inventory,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/addItem",
    exact: true,
    component: AddItem,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/viewItem/:id",
    exact: true,
    component: ViewItem,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/categories",
    exact: true,
    component: Categories,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/addCategory",
    exact: true,
    component: AddCategory,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/viewCategory/:id",
    exact: true,
    component: ViewCategory,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/editCategory/:id",
    exact: true,
    component: EditCategory,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/employees",
    exact: true,
    component: Employees,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/addEmployee",
    exact: true,
    component: AddEmployee,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/viewEmployee/:id",
    exact: true,
    component: ViewEmployee,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/returns",
    exact: true,
    component: Returns,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/viewReturn/:id",
    exact: true,
    component: ViewReturn,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/adminComplaints",
    exact: true,
    component: AdminComplaints,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/adminAddComplaints",
    exact: true,
    component: AdminAddComplaint,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/adminViewComplaints/:id",
    exact: true,
    component: ViewAdminComplaint,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/vendors",
    exact: true,
    component: Vendors,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/addVendor",
    exact: true,
    component: AddVendors,
    allowedRoles: [rolesTypes.ADMIN],
  },
  {
    path: "/viewVendor/:id",
    exact: true,
    component: ViewVendor,
    allowedRoles: [rolesTypes.ADMIN],
  },

  // Employee Routes
  {
    path: "/employeeDashboard",
    component: EmployeeDashboard,
    allowedRoles: [rolesTypes.EMPLOYEE],
  },
  {
    path: "/editProfile",
    component: EditProfile,
    allowedRoles: [rolesTypes.EMPLOYEE],
  },
  {
    path: "/addComplaint",
    component: AddComplain,
    allowedRoles: [rolesTypes.EMPLOYEE],
  },
  {
    path: "/employeeComplaint",
    component: Complaints,
    allowedRoles: [rolesTypes.EMPLOYEE],
  },
  {
    path: "/complaintDetail/:id",
    component: ViewComplain,
    allowedRoles: [rolesTypes.EMPLOYEE],
  },
  {
    path: "/addRequest",
    component: AddRequest,
    allowedRoles: [rolesTypes.EMPLOYEE],
  },
  {
    path: "/requests",
    component: Request,
    allowedRoles: [rolesTypes.EMPLOYEE],
  },
  {
    path: "/requestDetail/:id",
    component: ViewRequest,
    allowedRoles: [rolesTypes.EMPLOYEE],
  },
];

export default routesConfig;
