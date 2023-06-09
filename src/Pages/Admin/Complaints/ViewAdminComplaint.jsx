import React from 'react'
import { Box, Typography, Button } from "@mui/material";
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";
import avatar from "../../../Assets/avatar.png";
import logo from "../../../Assets/logo.png";
import { cornFlowerBlue, seaGreenBtn } from '../../../Utils/ColorConstants';

const styles = {
    pendingBtn: { backgroundColor: cornFlowerBlue, color: "white", borderRadius:"8px"},
    resolvedBtn: {backgroundColor: seaGreenBtn, color: "white", borderRadius:"5px"}
}

const ViewAdminComplaint = () => {
  return (
    <>
        <Box className="container">
        <Box className="component-header">

          <Box className="left-header-content">
                <Button style={{ color: "gray" }}>
                <BackArrow />
                Back
                </Button>
                <h1>Complaint ID : 4638</h1>
                <Button style={styles.pendingBtn}>
                Pending
                </Button>
          </Box>

          <Box className="right-header-content">
                <Button style={styles.resolvedBtn}>
                Mark as resolved
                </Button>
          </Box>
        </Box>

        <Box className="complaint-info">
          <Box className="description-heading">Description</Box>
          <Box className="complaint-content">
            <Typography
              className="description-content"
              style={{ textAlign: "justify" }}
            >
              Dear Gigalabs, I am writing to express my disappointment
              with the recent customer service I received from your company.
              Despite multiple attempts to resolve my issue, I found the level
              of support provided to be inadequate and unhelpful. I kindly
              request a prompt resolution to this matter to restore my faith in
              your organization.
            </Typography>
            <Typography sx={{mt:2}} fontWeight="bold">Attachments</Typography>
            <Box className="attachment-images">
              <img src={logo} alt="logo" />
            </Box>
          </Box>
        </Box>
        <Box className="complain-by">
          <Typography fontWeight="bold" variant="h5" className="cmp-heading">
            Complaint Submitted By
          </Typography>
          <Box className="admin-info">
            <Box className="profile-pic">
              <img src={avatar} alt="profile picture" />
            </Box>
            <Box className="admin-details">
              <Typography className="pri-heading" style={{ fontSize: "1.7em" }}>
                John Smith
              </Typography>
              <Typography className="gray-text">admin@gigalabs.co</Typography>
              <Typography className="gray-text">(555) 555 555</Typography>
            </Box>
          </Box>
        </Box>

      </Box>
    </>
  )
}

export default ViewAdminComplaint