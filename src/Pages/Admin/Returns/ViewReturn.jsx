import React from "react";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";
import { Box, Typography, Button, Divider } from "@mui/material";
import placeholder from "../../../Assets/placeholder.jpg";
import SelectBox from "../../../Components/SelectBox";
import { returnOptions } from "../../../Utils/testingData";
import { cornFlowerBlue } from "../../../Utils/ColorConstants";
import { fetchReturnUserInfo } from "./returnsApi";
import "./ViewReturn.css";

const styles = {
  backBtn: { color: "gray" },
  pendingBtn: {
    backgroundColor: cornFlowerBlue,
    color: "white",
    borderRadius: "8px",
  },
  subDate: { margin: "0% 2%", fontWeight: "bold" },
  contentField: { textAlign: "justify" },
  userField: { marginTop: "2%" },
};
const ViewReturn = () => {
  let notAvailable = "N/A";
  const { id } = useParams();
  const navigateTo = useNavigate();
  const {
    data: returnUserData,
    isLoading,
    isError,
  } = useQuery(["returnUserData", id], () => fetchReturnUserInfo(id));

  const formattedDate = returnUserData?.request?.createdAt
    ? new Date(returnUserData?.request?.createdAt).toLocaleDateString("en-GB", {
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
    return <div className="container">Error occurred while fetching Data.</div>;
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
            <h1>Return ID : {returnUserData?.request?.id || notAvailable} </h1>
            <Button style={styles.pendingBtn}>
              {returnUserData?.request?.status || notAvailable}
            </Button>
            <Typography sx={styles.subDate}>
              Submission Date: {formattedDate || notAvailable}
            </Typography>
          </Box>

          {/* <Box className="right-header-content">
            <SelectBox
              minWidth={250}
              className="selectBox"
              placeHolder={"Mark as Repair/Replace"}
              options={returnOptions}
            />
          </Box> */}
        </Box>

        <Box className="return-info">
          <Box className="description-heading">Description</Box>
          <Box className="return-content">
            <Typography
              className="description-content"
              style={styles.contentField}
            >
              {returnUserData?.request?.description || notAvailable}
            </Typography>
          </Box>
        </Box>

        <Box className="return-info">
          <Box className="description-heading">Item Name</Box>
          <Box className="return-content">
            <Typography
              className="description-content"
              style={styles.contentField}
            >
              {returnUserData?.request?.itemName || notAvailable}
            </Typography>
          </Box>
        </Box>

        <Box className="return-info">
          <Box className="description-heading">Category</Box>
          <Box className="return-content">
            <Typography
              className="description-content"
              style={styles.contentField}
            >
              {returnUserData?.request?.category || notAvailable}
            </Typography>
          </Box>
        </Box>
        <Box className="return-info">
          <Box className="description-heading">Sub-Category</Box>
          <Box className="return-content">
            <Typography
              className="description-content"
              style={styles.contentField}
            >
              {returnUserData?.request?.subcategory?.name || notAvailable}
            </Typography>
          </Box>
        </Box>

        <Divider />

        <Box sx={styles.userField}>
          <span className="box-heading">Return By:</span>
          <Box className="user-card">
            <Box className="profile-pic">
              <img
                src={returnUserData?.request?.user?.image || placeholder}
                alt="profile"
              />
            </Box>
            <Box className="details">
              <Typography variant="h4" className="Box-heading">
                {returnUserData?.request?.user?.username || notAvailable}
              </Typography>
              <Typography className="dept">
                {returnUserData?.request?.user?.department || notAvailable}
              </Typography>
              <Typography className="email">
                {returnUserData?.request?.user?.email || notAvailable}
              </Typography>
              <Typography className="contact">
                {returnUserData?.request?.user?.contact || notAvailable}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ViewReturn;
