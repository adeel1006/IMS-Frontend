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
};

const ComplaintsDetail = () => {
  const [complaintData, setComplaintData] = useState(null);
  const { id } = useParams();
  const navigateTo = useNavigate();

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
        throw new Error(error.message)
      }
    };

    fetchComplaintDetail();
  }, [id]);

  const handleMarkResolved = async () => {
    try {
      let accessToken = localStorage.getItem("accessToken");
      await axios.patch(
        `${httpRequest}${complaintByID}${id}`,
        { status: "resolved" },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      navigateTo(-1);
    } catch (error) {
      throw new Error(error.message)
    }
  };

  const mutation = useMutation(handleMarkResolved);

  if (!complaintData) {
    return <div>Loading...</div>;
  }

  return (
    <>
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
              style={{ textAlign: "justify" }}
            >
              {complaintData?.complaint?.description}
            </Typography>
            {/* <Typography sx={{ mt: 2 }} fontWeight="bold">
              Attachments
            </Typography>
            <Box className="attachment-images">
              <img src={logo} alt="logo" />
            </Box> */}
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
              <Typography className="pri-heading" style={{ fontSize: "1.7em" }}>
                {complaintData?.complaint?.user?.username || "Username"}
              </Typography>
              <Typography className="gray-text">
                {complaintData?.complaint?.user?.email}
              </Typography>
              <Typography className="gray-text">
                {complaintData?.complaint?.user?.contact || "contact"}
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
              <Typography className="pri-heading" style={{ fontSize: "1.7em" }}>
                {complaintData?.complaint?.user?.organization ||
                  "Gigalabs (pvt) Ltd."}
              </Typography>
              <Typography className="gray-text">
                {complaintData?.complaint?.user?.organization ||
                  "contact@org.co"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ComplaintsDetail;
