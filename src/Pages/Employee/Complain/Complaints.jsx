import React from "react";
import { Box, Typography, Button } from "@mui/material";
import DataTable from "../../../Components/DataTable";
import AddIcon from "@mui/icons-material/Add";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import { rows } from "../../../Utils/testingData";
import { Link } from "react-router-dom";
import "./Complaints.css";
const Complaints = () => {
  return (
    <>
      <Box className="complaints-container">
        <Box className="complaints-header">
          <Box className="complaints-left-header">
            <Typography variant="h3">Complaints</Typography>
          </Box>

          <Box className="complaints-right-header">
            <Button style={{ color: "white", backgroundColor: seaGreenBtn, borderRadius:"10px" }}>
              <AddIcon />
              <Link className="link-style" to="/addComplaint">
                Create Complain
              </Link>
            </Button>
          </Box>
        </Box>
        <Box className="complaints-table">
          <DataTable rows={rows} />
        </Box>
      </Box>
    </>
  );
};

export default Complaints;
