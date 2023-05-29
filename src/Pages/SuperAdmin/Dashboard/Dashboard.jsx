import React, { useState } from "react";
import DashboardCard from "../../../Components/DashboardCard";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import { Box } from "@mui/material";
import DashboardChart from "../../../Components/DashboardChart";
import { data, tableDataDashboard } from "../../../Utils/testingData";
import DataTable from "../../../Components/DataTable";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [orgTable, setOrgTable] = useState(true);
  return (
    <>
      <Box className="dashboard-container">
        <Box className="dashboard-content">
          <Box className="card-header">
            <h1>Dashboard</h1>
          </Box>
          <Box className="card-data">
            <DashboardCard
              title="Organizations"
              number={1500}
              icon={true}
              tagline="500 new organizations added this month"
            />
            <DashboardCard
              title="Admins"
              number={3200}
              icon={false}
              tagline="500 new admins added this month"
            />
            <DashboardCard
              title="Pending Complaints"
              number={200}
              icon={true}
              tagline="40 pending complaints this month"
            />
            <DashboardCard
              title="Resolved Complaints"
              number={3200}
              icon={false}
              tagline="1500 complaints resolved this month"
              notShowRightBorder={true}
            />
          </Box>
          <Box className="card-graph">
            <Box className="graph-header">
              <Box className="graph-left-buttons">
                <span className="sub-heading">Analytics</span>
                <button className="rep-download chart-btn">
                  <FileDownloadOutlinedIcon />
                  Download Report
                </button>
              </Box>
              <Box className="graph-right-buttons">
                <button
                  className="chart-btn swap-data-btn"
                  onClick={() => setOrgTable(true)}
                  style={
                    orgTable
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
                    !orgTable
                      ? { color: seaGreenBtn, textDecoration: "underline" }
                      : { color: "gray", textDecoration: "none" }
                  }
                >
                  Admins
                </button>
              </Box>
            </Box>
            <Box className="graph">
              {orgTable && (
                <DashboardChart superAdminAccess={true} data={data} />
              )}
              {!orgTable && (
                <DashboardChart superAdminAccess={true} data={data} />
              )}
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
              <DataTable rows={tableDataDashboard} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
