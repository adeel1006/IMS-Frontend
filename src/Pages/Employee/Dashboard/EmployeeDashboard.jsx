import React from "react";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Box, Button, Divider, Typography } from "@mui/material";
import { fetchUserData } from "./ComplainDashboardApi";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import placeholder from "../../../Assets/placeholder.jpg";
import DataTable from "../../../Components/DataTable";
import "./EmployeeDashboard.css";

const EmployeeDashboard = () => {
  const userReqData = useSelector(
    (state) => state.requestsData.userRequestsData
  );

  const userComplaintsData = useSelector(
    (state) => state.complaints.userComplaints
  );

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery("userData", fetchUserData);

  const reqTableData = userReqData.slice(-4);
  const complaintsTableData = userComplaintsData.slice(-4);

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="container">Error occurred while fetching requests.</div>
    );
  }

  return (
    <Box className="container">
      <Box className="dashboard-bar">
        <Box className="dash-left-header">
          <Typography fontWeight="bold" variant="h3">
            Dashboard
          </Typography>
        </Box>

        <Box className="dash-right-header">
          <Button
            className="btn-primary"
            style={{
              backgroundColor: seaGreenBtn,
              color: "white",
              borderRadius: 10,
            }}
          >
            <EditOutlinedIcon />
            <Link className="link-style" to="/editProfile">
              Edit Profile
            </Link>
          </Button>
        </Box>
      </Box>

      <Box className="employee-info-main">
        <Box className="image-box">
          <img src={userData[0]?.image || placeholder} alt="profile pic " />
        </Box>

        <Box className="employee-info-inner">
          <Box className="emp-block">
            <Box className="section-a">
              <Typography color="gray">Full Name</Typography>
              <Typography fontWeight="bold">
                {userData[0]?.username || "N/A"}
              </Typography>
            </Box>

            <Box className="section-b">
              <Typography color="gray">Email Address</Typography>
              <Typography fontWeight="bold">
                {userData[0]?.email || "N/A"}
              </Typography>
            </Box>
          </Box>

          <Box className="emp-block">
            <Box className="section-a">
              <Typography color="gray">Designation</Typography>
              <Typography fontWeight="bold">
                {userData[0]?.designation || "N/A"}
              </Typography>
            </Box>

            <Box className="section-b">
              <Typography color="gray">Department</Typography>
              <Typography fontWeight="bold">
                {userData[0]?.department || "N/A"}
              </Typography>
            </Box>
          </Box>

          <Box className="emp-block">
            <Box className="section-a">
              <Typography color="gray">Contact Number</Typography>
              <Typography fontWeight="bold">
                {userData[0]?.contact || "N/A"}
              </Typography>
            </Box>

            <Box className="section-b">
              <Typography color="gray">Education</Typography>
              <Typography fontWeight="bold">
                {userData[0]?.education || "N/A"}
              </Typography>
            </Box>
          </Box>

          <Box className="emp-block">
            <Box className="section-a">
              <Typography color="gray">Company Experience</Typography>
              <Typography fontWeight="bold">
                {userData[0]?.companyExperience + " years" || "N/A"}
              </Typography>
            </Box>

            <Box className="section-b">
              <Typography color="gray">Total Experience</Typography>
              <Typography fontWeight="bold">
                {userData[0]?.totalExperience + " years" || "N/A"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />

      <Box className="req-table">
        <Box className="dash-table-header">
          <span className="table-sub-heading">Recent Requests</span>
          <Link to="/requests" className="see-btn">
            See all
          </Link>
        </Box>
        <Box className="dash-table">
          <DataTable rows={reqTableData} linkString={`/requestDetail/`} />
        </Box>
      </Box>

      <Box className="complain-table">
        <Box className="dash-table-header">
          <span className="table-sub-heading">Recent Complaints</span>
          <Link to="/employeeComplaint" className="see-btn">
            See all
          </Link>
        </Box>
        <Box className="dash-table">
          <DataTable
            rows={complaintsTableData}
            linkString={`/complaintDetail/`}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeDashboard;
