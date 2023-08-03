import React from "react";
import { useQuery, useMutation } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";
import placeholder from "../../../Assets/placeholder.jpg";
import logo from "../../../Assets/logo.png";
import { cornFlowerBlue, seaGreenBtn } from "../../../Utils/ColorConstants";
import {
  fetchComplaintDetail,
  updateComplaintStatus,
} from "./AdminComplainApi";

const styles = {
  backBtn: { color: "gray" },
  pendingBtn: {
    backgroundColor: cornFlowerBlue,
    color: "white",
    borderRadius: "8px",
  },
  resolvedBtn: {
    backgroundColor: seaGreenBtn,
    color: "white",
    borderRadius: "5px",
  },
  name: { fontSize: "1.7em" },
  contentField: { textAlign: "justify" },
};

const ViewAdminComplaint = () => {
  let notAvailable = "N/A";
  const { id } = useParams();
  const navigateTo = useNavigate();
  const {
    data: viewComplaintDetail,
    isLoading,
    isError,
  } = useQuery(["viewComplaintDetail", id], () => fetchComplaintDetail(id));

  const mutation = useMutation(updateComplaintStatus, {
    onSuccess: (data) => {
      navigateTo(-1);
    },
  });

  const handleGoBack = () => {
    navigateTo(-1);
  };

  const handleMarkResolved = async () => {
    mutation.mutate({ id: id, status: "resolved" });
  };

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="container">
        Error occurred while fetching request details.
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
          <h1>
            Complaint ID : {viewComplaintDetail?.complaint?.id || notAvailable}
          </h1>
          <Button style={styles.pendingBtn}>
            {viewComplaintDetail?.complaint?.status || notAvailable}
          </Button>
        </Box>
        {viewComplaintDetail?.complaint?.user?.role === "EMPLOYEE" && (
          <Box className="right-header-content">
            {(!viewComplaintDetail.complaint.status ||
              viewComplaintDetail.complaint.status === "pending") && (
              <Button style={styles.resolvedBtn} onClick={handleMarkResolved}>
                Mark as resolved
              </Button>
            )}
          </Box>
        )}
      </Box>

      <Box className="complaint-info">
        <Box className="description-heading">Description</Box>
        <Box className="complaint-content">
          <Typography
            className="description-content"
            style={styles.contentField}
          >
            {viewComplaintDetail?.complaint?.description || notAvailable}
          </Typography>
        </Box>
      </Box>
      <Box className="complain-by">
        <Typography fontWeight="bold" variant="h5" className="cmp-heading">
          Complaint Submitted By
        </Typography>
        <Box className="admin-info">
          <Box className="profile-pic">
            <img
              src={viewComplaintDetail?.complaint?.user?.image || placeholder}
              alt="profile picture"
            />
          </Box>
          <Box className="admin-details">
            <Typography className="pri-heading" style={styles.name}>
              {viewComplaintDetail?.complaint?.user?.username || notAvailable}
            </Typography>
            <Typography className="gray-text">
              {viewComplaintDetail?.complaint?.user?.email || notAvailable}
            </Typography>
            <Typography className="gray-text">
              {viewComplaintDetail?.complaint?.user?.contact || notAvailable}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewAdminComplaint;
