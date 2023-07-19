import React from "react";
import { useQuery, useMutation } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Divider } from "@mui/material";
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";
import placeholder from "../../../Assets/placeholder.jpg";
import {
  cornFlowerBlue,
  dangerButton,
  seaGreenBtn,
} from "../../../Utils/ColorConstants";
import { fetchRequest, updateRequestStatus } from "./AdminRequestApi";
import "./AdminViewRequest.css";

const styles = {
  backBtn: { color: "gray" },
  pendingBtn: {
    backgroundColor: cornFlowerBlue,
    color: "white",
    borderRadius: "8px",
  },
  subDate: { margin: "0% 2%", fontWeight: "bold" },
  reqBtnStyle: {
    color: "white",
    borderRadius: "8px",
    padding: "3%",
    fontWeight: "bold",
    margin: "0% 2%",
  },
  descField: { textAlign: "justify" },
};

const AdminViewRequest = () => {
  let notAvailable = "N/A";
  const { id } = useParams();
  const navigateTo = useNavigate();

  const {
    data: userRequest,
    isLoading,
    isError,
  } = useQuery(["userRequest", id], () => fetchRequest(id));

  const mutation = useMutation(updateRequestStatus, {
    onSuccess: () => {
      navigateTo(-1);
    },
  });

  const formattedDate = userRequest?.request?.createdAt
    ? new Date(userRequest?.request?.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : null;

  const handleGoBack = () => {
    navigateTo(-1);
  };

  const handleRejectRequest = (requestId) => {
    mutation.mutate({ id: requestId, status: "rejected" });
  };

  const handleAcceptRequest = (requestId) => {
    mutation.mutate({ id: requestId, status: "approved" });
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
    <>
      <Box className="container">
        <Box className="component-header">
          <Box className="left-header-content">
            <Button style={styles.backBtn} onClick={handleGoBack}>
              <BackArrow />
              Back
            </Button>
            <h1>Request ID : {userRequest?.request?.id || notAvailable}</h1>
            <Button style={styles.pendingBtn}>
              {userRequest?.request?.status}{" "}
            </Button>
            <Typography sx={styles.subDate}>
              Submission Date: {formattedDate || notAvailable}
            </Typography>
          </Box>
          <Box className="right-header-req">
            {userRequest?.request?.status == "pending" && (
              <>
                <Button
                  style={{
                    ...styles.reqBtnStyle,
                    backgroundColor: dangerButton,
                  }}
                  onClick={() => handleRejectRequest(id)}
                >
                  Reject Request
                </Button>

                <Button
                  style={{
                    ...styles.reqBtnStyle,
                    backgroundColor: seaGreenBtn,
                  }}
                  onClick={() => handleAcceptRequest(id)}
                >
                  Approve Request
                </Button>
              </>
            )}
          </Box>
        </Box>

        <Box className="request-info">
          <Box className="description-heading">Description</Box>
          <Box className="request-content">
            <Typography
              className="description-content"
              style={styles.descField}
            >
              {userRequest?.request?.description || notAvailable}
            </Typography>
          </Box>
        </Box>

        <Box className="request-info">
          <Box className="description-heading">Item Name</Box>
          <Box className="request-content">
            <Typography
              className="description-content"
              style={styles.descField}
            >
              {userRequest?.request?.itemName || notAvailable}
            </Typography>
          </Box>
        </Box>

        <Box className="request-info">
          <Box className="description-heading">Category</Box>
          <Box className="request-content">
            <Typography
              className="description-content"
              style={styles.descField}
            >
              {userRequest?.request?.category || notAvailable}
            </Typography>
          </Box>
        </Box>
        <Box className="request-info">
          <Box className="description-heading">Sub-Category</Box>
          <Box className="request-content">
            <Typography
              className="description-content"
              style={styles.descField}
            >
              {userRequest?.request?.subcategory?.name || notAvailable}
            </Typography>
          </Box>
        </Box>
        <Divider />

        <Box className="req-info">
          <Box className="profile-pic">
            <img
              src={userRequest?.request?.user?.image || placeholder}
              alt="profile pic "
            />
          </Box>
          <Box className="req-details">
            <span className="pri-heading">
              {userRequest?.request?.user?.username || notAvailable}
            </span>
            <p className="gray-text">
              {userRequest?.request?.user?.email || notAvailable}
            </p>
            <p className="gray-text">
              {userRequest?.request?.user?.contact || notAvailable}
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminViewRequest;
