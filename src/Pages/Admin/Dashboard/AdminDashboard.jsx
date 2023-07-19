import React from "react";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import TwoBarsChart from "../../../Components/TwoBarsChart";
import DashboardCard from "../../../Components/DashboardCard";
import DataTable from "../../../Components/DataTable";
import {
  fetchCategoryCount,
  fetchEmployeesCount,
  fetchInventoryItems,
  fetchVendorCount,
} from "./AdminDashboardApi";
import {
  adminChartInventory,
  adminChartComplain,
  tableDataDashboard,
} from "../../../Utils/testingData";
import "./AdminDashboard.css";

const styles = {
  fileDownBtn: { color: "gray", fontSize: "small" },
  seeBtn: { color: "gray" },
  cmpHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1%",
  },
};

const AdminDashboard = () => {
  const complaintData = useSelector(
    (state) => state.complaints.admUserComplaints
  );
  let notAvailable = "N/A";

  //Employees Count
  const {
    data: employeesCount,
    isLoading: isAdmLoading,
    isError: isAdmError,
  } = useQuery("employeesCount", fetchEmployeesCount);
  //Inventory Count
  const {
    data: inventoryCount,
    isLoading: isInvLoading,
    isError: isInvError,
  } = useQuery("inventoryCount", fetchInventoryItems);
  //Vendor Count
  const {
    data: vendorCount,
    isLoading: isVendorLoading,
    isError: isVendorError,
  } = useQuery("vendorCount", fetchVendorCount);

  // Categories Count
  const {
    data: categoryCount,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
  } = useQuery("categoryCount", fetchCategoryCount);

  const complaintsTableData = complaintData.slice(-4)

  if (isAdmLoading || isInvLoading || isVendorLoading || isCategoryLoading) {
    return (
      <p className="dashboard-container">Loading Please Wait for a while...</p>
    );
  }
  if (isAdmError || isInvError || isVendorError || isCategoryError) {
    return (
      <p className="dashboard-container">
        Error while loading... Please try again later.
      </p>
    );
  }

  return (
    <Box className="container">
      <span className="main-heading">Dashboard</span>
      <Box className="card-data">
        <DashboardCard
          title={employeesCount?.title || notAvailable}
          icon={employeesCount?.icon}
          number={employeesCount?.number || notAvailable}
          tagline={employeesCount?.tagline || notAvailable}
        />
        <DashboardCard
          title={inventoryCount?.title || notAvailable}
          icon={inventoryCount?.icon}
          number={inventoryCount?.number || notAvailable}
          tagline={inventoryCount?.tagline || notAvailable}
        />
        <DashboardCard
          title={vendorCount?.title || notAvailable}
          icon={vendorCount?.icon}
          number={vendorCount?.number || notAvailable}
          tagline={vendorCount?.tagline || notAvailable}
        />
        <DashboardCard
          title={categoryCount?.title || notAvailable}
          icon={categoryCount?.icon}
          number={categoryCount?.number || notAvailable}
          tagline={categoryCount?.tagline || notAvailable}
          notShowRightBorder={true}
        />
      </Box>
      <Box className="charts">
        <Box className="inventory-chart">
          <Box className="chart-header">
            <span className="chart-heading">Inventory Items</span>
            <Button style={styles.fileDownBtn}>
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
            <Button style={styles.fileDownBtn}>
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
        <Box style={styles.cmpHeader}>
          <span className="cmp-heading">Recent Complaints</span>
          <Button style={styles.seeBtn}>
            <Link to="/adminComplaints">See all</Link>
          </Button>
        </Box>
        <Box className="admin-cpm-table">
          <DataTable rows={complaintsTableData} />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
