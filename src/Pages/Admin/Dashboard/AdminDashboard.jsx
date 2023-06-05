import React from "react";
import DashboardCard from "../../../Components/DashboardCard";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Box, Button } from "@mui/material";
import TwoBarsChart from "../../../Components/TwoBarsChart";
import DataTable from "../../../Components/DataTable";
import {
  adminChartInventory,
  adminChartComplain,
  tableDataDashboard,
} from "../../../Utils/testingData";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <>
      <Box className="container">
        <span className="main-heading">Dashboard</span>
        <Box className="card-data">
          <DashboardCard
            title="Employees"
            icon={true}
            number={3500}
            tagline="500 new employees added this month"
          />
          <DashboardCard
            title="Inventory Items"
            number={900}
            tagline="50 new items addes this month"
          />
          <DashboardCard
            title="Vendors"
            icon={true}
            number={25}
            tagline="2 new vendors added this month"
          />
          <DashboardCard
            title="Categories"
            number={5}
            tagline="1 new category added this month"
            notShowRightBorder={true}
          />
        </Box>
        <Box className="charts">
          <Box className="inventory-chart">
            <Box className="chart-header">
              <span className="chart-heading">Inventory Items</span>
              <Button style={{ color: "gray", fontSize: "small" }}>
                <FileDownloadOutlinedIcon />
                Download report
              </Button>
            </Box>
            <Box className="chart">
              <TwoBarsChart data={adminChartInventory} />
            </Box>
          </Box>
          <Box className="complaints-chart">
            <Box className="chart-header">
              <span className="chart-heading">Complaints</span>
              <Button style={{ color: "gray", fontSize: "small" }}>
                <FileDownloadOutlinedIcon />
                Download report
              </Button>
            </Box>
            <Box className="chart">
              <TwoBarsChart data={adminChartComplain} />
            </Box>
          </Box>
        </Box>

        <Box className="admin-complaints">
          <Box className="admin-comp-header component-header">
            <span className="cmp-heading">Recent Complaints</span>
            <Button style={{ color: "gray" }}>
              <Link to="/adminComplaints">See all</Link>
            </Button>
          </Box>
          <Box className="admin-cpm-table">
            <DataTable rows={tableDataDashboard} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboard;
