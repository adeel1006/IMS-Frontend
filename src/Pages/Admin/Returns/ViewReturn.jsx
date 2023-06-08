import React from "react";
import "./ViewReturn.css";
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";
import { Box, Typography, Button, Divider } from "@mui/material";
import avatar from "../../../Assets/avatar.png";
import SelectBox from "../../../Components/SelectBox";
import { returnOptions } from "../../../Utils/testingData";
const ViewReturn = () => {
  return (
    <>
      <Box className="container">
        <Box className="component-header">
          <Box className="left-header-content">
            <Button style={{ color: "gray" }}>
              <BackArrow />
              Back
            </Button>
            <h1>Return ID : 64524 </h1>
            <Button
              style={{
                backgroundColor: "rgb(38, 150, 255)",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Pending
            </Button>
            <Typography sx={{ margin: "0% 2%", fontWeight: "bold" }}>
              Submission Date: 11/11/22
            </Typography>
          </Box>

          <Box className="right-header-content">
            <SelectBox
              minWidth={250}
              className="selectBox"
              placeHolder={"Mark as Repair/Replace"}
              options={returnOptions}
            />
          </Box>
        </Box>

        <Box className="return-info">
          <Box className="description-heading">Description</Box>
          <Box className="return-content">
            <Typography
              className="description-content"
              style={{ textAlign: "justify" }}
            >
              I'm writing to return a new gadget for my office. I'm currently
              using a very old and outdated computer, and it's starting to show
              its age. I'm having trouble running the latest software, and the
              hardware is starting to fail. I'm requesting a new laptop that
              would be able to handle the demands of my work. I would also like
              a new printer, as the current one is constantly jamming. I'm
              confident that these new gadgets would help me to be more
              productive in my work, and I would be grateful for your
              consideration
            </Typography>
          </Box>
        </Box>

        <Box className="return-info">
          <Box className="description-heading">Item Name</Box>
          <Box className="return-content">
            <Typography
              className="description-content"
              style={{ textAlign: "justify" }}
            >
              Macbook Pro
            </Typography>
          </Box>
        </Box>

        <Box className="return-info">
          <Box className="description-heading">Category</Box>
          <Box className="return-content">
            <Typography
              className="description-content"
              style={{ textAlign: "justify" }}
            >
              Electronics
            </Typography>
          </Box>
        </Box>
        <Box className="return-info">
          <Box className="description-heading">Sub-Category</Box>
          <Box className="return-content">
            <Typography
              className="description-content"
              style={{ textAlign: "justify" }}
            >
              Notebooks & Laptops
            </Typography>
          </Box>
        </Box>

        <Divider />

        <Box sx={{ marginTop: "2%" }}>
          <span className="box-heading">Return Submitted By:</span>
          <Box className="user-card">
            <Box className="profile-pic">
              <img src={avatar} alt="profile" />
            </Box>
            <Box className="details">
              <Typography variant="h4" className="Box-heading">
                Steve Smith
              </Typography>
              <Typography className="dept">Department: Development</Typography>
              <Typography className="email">steve@gigalabs.co</Typography>
              <Typography className="contact">(555) 555 555</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ViewReturn;
