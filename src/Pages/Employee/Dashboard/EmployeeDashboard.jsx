import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Button, Divider, Typography } from "@mui/material";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import avatar from "../../../Assets/avatar.png";
import DataTable from "../../../Components/DataTable";
import "./EmployeeDashboard.css";

const EmployeeDashboard = () => {
  const userReqData = useSelector(
    (state) => state.requestsData.userRequestsData
  );

  const userComplaintsData = useSelector(
    (state) => state.complaints.userComplaints
  );

  const reqTableData = userReqData.slice(-4);
  const complaintsTableData = userComplaintsData.slice(-4);
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
          <img src={avatar} alt="profile pic " />
        </Box>

        <Box className="employee-info-inner">
          <Box className="emp-block">
            <Box className="section-a">
              <Typography color="gray">Full Name</Typography>
              <Typography fontWeight="bold">Lydia Press</Typography>
            </Box>

            <Box className="section-b">
              <Typography color="gray">Email Address</Typography>
              <Typography fontWeight="bold">kmitchell@icloud.com</Typography>
            </Box>
          </Box>

          <Box className="emp-block">
            <Box className="section-a">
              <Typography color="gray">Designation</Typography>
              <Typography fontWeight="bold">Software Engineer</Typography>
            </Box>

            <Box className="section-b">
              <Typography color="gray">Department</Typography>
              <Typography fontWeight="bold">Development</Typography>
            </Box>
          </Box>

          <Box className="emp-block">
            <Box className="section-a">
              <Typography color="gray">Contact Number</Typography>
              <Typography fontWeight="bold">(555) 555 555</Typography>
            </Box>

            <Box className="section-b">
              <Typography color="gray">Education</Typography>
              <Typography fontWeight="bold">
                Bachelors in Computer Science
              </Typography>
            </Box>
          </Box>

          <Box className="emp-block">
            <Box className="section-a">
              <Typography color="gray">Company Experience</Typography>
              <Typography fontWeight="bold">2 years</Typography>
            </Box>

            <Box className="section-b">
              <Typography color="gray">Total Experience</Typography>
              <Typography fontWeight="bold">6 years</Typography>
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
