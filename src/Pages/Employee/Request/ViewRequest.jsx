import React from "react";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { fetchUserRequestDetail } from "./RequestApi";
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";
import { cornFlowerBlue } from "../../../Utils/ColorConstants";
import "./ViewRequest.css";

const styles = {
  backBtn: { color: "gray" },
  pendingBtn: {
    backgroundColor: cornFlowerBlue,
    color: "white",
    borderRadius: "8px",
  },
  subDate: { margin: "0% 2%", fontWeight: "bold" },
  contentStyle: { textAlign: "justify" },
};

const ViewRequest = () => {
  const { id } = useParams();
  const navigateTo = useNavigate();

  const {
    data: requestDetail,
    isLoading,
    isError,
  } = useQuery(["requestDetail", id], () => fetchUserRequestDetail(id));

  const formattedDate = requestDetail?.request?.createdAt
    ? new Date(requestDetail?.request?.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
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
          <h1>Request ID : {requestDetail?.request?.id}</h1>
          <Button style={styles.pendingBtn}>
            {requestDetail?.request?.status || "Pending"}
          </Button>
          <Typography sx={styles.subDate}>
            Submission Date: {formattedDate || "N/A"}
          </Typography>
        </Box>
      </Box>

      <Box className="request-info">
        <Box className="description-heading">Description</Box>
        <Box className="request-content">
          <Typography
            className="description-content"
            style={styles.contentStyle}
          >
            {requestDetail?.request?.description || "Not Available"}
          </Typography>
        </Box>
      </Box>

      <Box className="request-info">
        <Box className="description-heading">Item Name</Box>
        <Box className="request-content">
          <Typography
            className="description-content"
            style={styles.contentStyle}
          >
            {requestDetail?.request?.itemName || "Not Available"}
          </Typography>
        </Box>
      </Box>

      <Box className="request-info">
        <Box className="description-heading">Category</Box>
        <Box className="request-content">
          <Typography
            className="description-content"
            style={styles.contentStyle}
          >
            {requestDetail?.request?.category || "Not Available"}
          </Typography>
        </Box>
      </Box>
      <Box className="request-info">
        <Box className="description-heading">Sub-Category</Box>
        <Box className="request-content">
          <Typography
            className="description-content"
            style={styles.contentStyle}
          >
            {requestDetail?.request?.subcategory?.name || "Not Available"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewRequest;
