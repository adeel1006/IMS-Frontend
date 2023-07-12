import React from "react";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";
import { cornFlowerBlue } from "../../../Utils/ColorConstants";
import { fetchUserComplaintDetail } from "./ComplainApi";
import "./ViewComplain.css";

const styles = {
  backBtn: { color: "gray" },
  pendingBtn: {
    backgroundColor: cornFlowerBlue,
    color: "white",
    borderRadius: "8px",
  },
  subDate: { margin: "0% 2%", fontWeight: "bold" },
  content: { textAlign: "justify" },
};

const ViewComplain = () => {
  let notAvailable = "N/A";
  const { id } = useParams();
  const navigateTo = useNavigate();

  const {
    data: complaintDetail,
    isLoading,
    isError,
  } = useQuery(["complaintDetail", id], () => fetchUserComplaintDetail(id));

  // console.log(JSON.stringify(complaintDetail, null, 2));
  const formattedDate = complaintDetail?.complaint?.submissionDate
    ? new Date(complaintDetail?.complaint?.submissionDate).toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }
      )
    : null;

  const handleGoBack = () => {
    navigateTo(-1);
  };

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="container">
        Error occurred while fetching user request.
      </div>
    );
  }

  return (
    <Box className="container">
      <Box className="component-header">
        <Box className="left-header-content">
          <Button style={styles.backBtn} onClick={handleGoBack}>
            <BackArrow />
            Back
          </Button>
          <h1>Complain ID : {complaintDetail?.complaint?.id || notAvailable}</h1>
          <Button style={styles.pendingBtn}>
            {complaintDetail?.complaint?.status || notAvailable}
          </Button>
          <Typography sx={styles.subDate}>
            Submission Date: {formattedDate || notAvailable}
          </Typography>
        </Box>
      </Box>

      <Box className="complaint-info">
        <Box className="description-heading">Title</Box>
        <Box className="complaint-content">
          <Typography className="description-content" style={styles.content}>
            {complaintDetail?.complaint?.title || notAvailable}
          </Typography>
        </Box>
      </Box>

      <Box className="complaint-info">
        <Box className="description-heading">Description</Box>
        <Box className="complaint-content">
          <Typography className="description-content" style={styles.content}>
            {complaintDetail?.complaint?.description || notAvailable}
          </Typography>
        </Box>
      </Box>

      <Box className="complaint-info">
        <Box className="description-heading">Suggestion</Box>
        <Box className="complaint-content">
          <Typography className="description-content" style={styles.content}>
            {complaintDetail?.complaint?.suggestion || notAvailable}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewComplain;
