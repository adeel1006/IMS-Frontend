import React from "react";
import "./Request.css";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { rows } from "../../../Utils/testingData";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import AddIcon from "@mui/icons-material/Add";
import DataTable from "../../../Components/DataTable";

const Request = () => {
  return (
    <>
      <Box className="request-container">
        <Box className="request-header">
          <Box className="request-left-header">
            <Typography variant="h3">Requests</Typography>
          </Box>

          <Box className="request-right-header">
            <Button
              style={{
                color: "white",
                backgroundColor: seaGreenBtn,
                borderRadius: "10px",
              }}
            >
              <AddIcon />
              <Link className="link-style" to="#">
                Create Request
              </Link>
            </Button>
          </Box>
        </Box>
        <Box className="request-table">
          <DataTable rows={rows} />
        </Box>
      </Box>
    </>
  );
};

export default Request;
