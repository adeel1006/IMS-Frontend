import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { saveAs } from "file-saver";
import {
  fetchOrganizations,
  fetchAdmins,
  fetchPendingComplaints,
  fetchResolvedComplaints,
  fetchAdminsByMonth,
  fetchOrgByMonth,
} from "./DashboardApi";
import { Box } from "@mui/material";
import DashboardCard from "../../../Components/DashboardCard";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import DashboardChart from "../../../Components/DashboardChart";
import DataTable from "../../../Components/DataTable";
import "./Dashboard.css";
const queryKeys = {
  organizations: "organizations",
  admins: "admins",
  pendingComplaints: "pendingComplaints",
  resolvedComplaints: "resolvedComplaints",
  adminByMonth: "adminByMonth",
  orgByMonth: "orgByMonth",
};

const Dashboard = () => {
  const filteredTableData = useSelector(
    (state) => state.complaints.filteredData
  );
  const [organizationTable, setOrgTable] = useState(true);
  //Organization
  const {
    data: organizations,
    isLoading: isOrgLoading,
    isError: isOrgError,
  } = useQuery(queryKeys.organizations, fetchOrganizations);
  //Admin
  const {
    data: admins,
    isLoading: isAdminLoading,
    isError: isAdminError,
  } = useQuery(queryKeys.admins, fetchAdmins);
  //Pending Complaints
  const {
    data: pendingComplaints,
    isLoading: isPendingLoading,
    isError: isPendingError,
  } = useQuery(queryKeys.pendingComplaints, fetchPendingComplaints);
  //Resolved Complaints
  const {
    data: resolvedComplaints,
    isLoading: isResolvedLoading,
    isError: isResolvedError,
  } = useQuery(queryKeys.resolvedComplaints, fetchResolvedComplaints);
  //Admin By Month
  const {
    data: adminByMonth,
    isLoading: isAdminMonthLoading,
    isError: isAdminMonthError,
  } = useQuery(queryKeys.adminByMonth, fetchAdminsByMonth);
  //Org By Month
  const {
    data: orgByMonth,
    isLoading: isOrgMonthLoading,
    isError: isOrgMonthError,
  } = useQuery(queryKeys.orgByMonth, fetchOrgByMonth);


  if (
    isOrgLoading ||
    isAdminLoading ||
    isPendingLoading ||
    isResolvedLoading ||
    isAdminMonthLoading ||
    isOrgMonthLoading
  ) {
    return (
      <p className="dashboard-container">Loading Please Wait for a while...</p>
    );
  }
  if (
    isOrgError ||
    isAdminError ||
    isPendingError ||
    isResolvedError ||
    isAdminMonthError ||
    isOrgMonthError
  ) {
    return (
      <p className="dashboard-container">
        Error loading organizations. Please try again later.
      </p>
    );
  }

  const handleDownloadReport = (data) => {
    const formattedData = JSON.stringify(data, null, 2);
    const blob = new Blob([formattedData], { type: "application/json" });
    saveAs(blob, "admin_report.json");
  };

  const complaintTableData = filteredTableData.slice(-4);

  return (
    <>
      <Box className="dashboard-container">
        <Box className="dashboard-content">
          <Box className="card-header">
            <h1>Dashboard</h1>
          </Box>
          <Box className="card-data">
            <DashboardCard
              title={organizations?.title}
              number={organizations?.number}
              icon={organizations?.icon}
              tagline={organizations?.tagline}
            />
            <DashboardCard
              title={admins?.title}
              number={admins?.number}
              icon={admins?.icon}
              tagline={admins?.tagline}
            />
            <DashboardCard
              title={pendingComplaints?.title}
              number={pendingComplaints?.number}
              icon={pendingComplaints?.icon}
              tagline={pendingComplaints?.tagline}
            />
            <DashboardCard
              title={resolvedComplaints?.title}
              number={resolvedComplaints?.number}
              icon={resolvedComplaints?.icon}
              tagline={resolvedComplaints?.tagline}
              notShowRightBorder={true}
            />
          </Box>
          <Box className="card-graph">
            <Box className="graph-header">
              <Box className="graph-left-buttons">
                <span className="sub-heading">Analytics</span>
                <button
                  className="rep-download chart-btn"
                  onClick={() => handleDownloadReport(adminByMonth)}
                >
                  <FileDownloadOutlinedIcon />
                  Download Report
                </button>
              </Box>
              <Box className="graph-right-buttons">
                <button
                  className="chart-btn swap-data-btn"
                  onClick={() => setOrgTable(true)}
                  style={
                    organizationTable
                      ? { color: seaGreenBtn, textDecoration: "underline" }
                      : { color: "gray", textDecoration: "none" }
                  }
                >
                  Organizations
                </button>
                <button
                  className="chart-btn swap-data-btn"
                  onClick={() => setOrgTable(false)}
                  style={
                    !organizationTable
                      ? { color: seaGreenBtn, textDecoration: "underline" }
                      : { color: "gray", textDecoration: "none" }
                  }
                >
                  Admins
                </button>
              </Box>
            </Box>
            <Box className="graph">
              {organizationTable && <DashboardChart data={orgByMonth} />}
              {!organizationTable && <DashboardChart data={adminByMonth} />}
            </Box>
          </Box>
          <Box className="card-table">
            <Box className="table-header">
              <span className="sub-heading">Recent Complaints</span>
              <Link to="/superAdminComplaints" className="complaints-btn">
                See all
              </Link>
            </Box>
            <Box className="table">
              <DataTable rows={complaintTableData} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
