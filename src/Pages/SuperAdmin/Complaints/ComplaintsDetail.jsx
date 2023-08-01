import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";
import logo from "../../../Assets/logoBlack.png";
import avatar from "../../../Assets/avatar.png";
import { cornFlowerBlue, seaGreenBtn } from "../../../Utils/ColorConstants";
import { complaintByID, httpRequest } from "../../../Utils/httpRequestsStrings";
import "./ComplaintsDetail.css";

const styles = {
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
  orgFont: { fontSize: "1.7em" },
  description: { textAlign: "justify" }
};

const ComplaintsDetail = () => {
  const [complaintData, setComplaintData] = useState(null);
  const { id } = useParams();
  const navigateTo = useNavigate();
  let notAvailable = "N/A";
  const handleGoBack = () => {
    navigateTo(-1);
  };

  useEffect(() => {
    const fetchComplaintDetail = async () => {
      try {
        let accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(
          `${httpRequest}${complaintByID}${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setComplaintData(response.data);
      } catch (error) {
        throw new Error(error.message);
      }
    };

    fetchComplaintDetail();
  }, [id]);

  const handleMarkResolved = async () => {
    try {
      await axios.patch(
        `${httpRequest}${complaintByID}${id}`,
        { status: "resolved" },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const mutation = useMutation(handleMarkResolved, {
    onSuccess: (data) => {
      navigateTo(-1);
    },
  });

  if (!complaintData) {
    return <div>Loading...</div>;
  }

  return (
    <Box className="container">
      <Box className="component-header">
        <Box className="left-header-content">
          <Button style={{ color: "gray" }} onClick={handleGoBack}>
            <BackArrow />
            Back
          </Button>
          <h1>Complaint ID : {complaintData?.complaint?.id}</h1>
          <Button style={styles.pendingBtn}>
            {complaintData?.complaint?.status || "Pending"}
          </Button>
        </Box>

        <Box className="right-header-content">
          {(!complaintData.complaint.status ||
            complaintData.complaint.status === "Pending") && (
            <Button
              style={styles.resolvedBtn}
              onClick={mutation.mutate}
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? "Loading..." : "Mark as resolved"}
            </Button>
          )}
        </Box>
      </Box>

      <Box className="complaint-info">
        <Box className="description-heading">Description</Box>
        <Box className="complaint-content">
          <Typography
            className="description-content"
            style={styles.description}
          >
            {complaintData?.complaint?.description || notAvailable}
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
              src={complaintData?.complaint?.user?.image || avatar}
              alt="profile picture"
            />
          </Box>
          <Box className="admin-details">
            <Typography className="pri-heading" style={styles.orgFont}>
              {complaintData?.complaint?.user?.username || notAvailable}
            </Typography>
            <Typography className="gray-text">
              {complaintData?.complaint?.user?.email || notAvailable}
            </Typography>
            <Typography className="gray-text">
              {complaintData?.complaint?.user?.contact || notAvailable}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="complain-by-org">
        <Typography fontWeight="bold" variant="h5" className="cmp-heading">
          Organization
        </Typography>
        <Box className="admin-info">
          <Box className="profile-pic">
            <img
              className="imagesLogos"
              src={complaintData?.complaint?.user?.organization?.logo || logo}
              alt="Logo"
            />
          </Box>
          <Box className="admin-details">
            <Typography className="pri-heading" style={styles.orgFont}>
              {complaintData?.complaint?.user?.organization ||
                notAvailable}
            </Typography>
            <Typography className="gray-text">
              {complaintData?.complaint?.user?.organization || notAvailable}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ComplaintsDetail;
