import React, { useState } from "react";
import "./AdminComplaints.css";
import SortIcon from "../../../Components/SortIcon";
import { Box, Button, Typography } from "@mui/material";
import SearchBar from "../../../Components/SearchBar";
import SelectBox from "../../../Components/SelectBox";
import { options, rows, tableDataDashboard } from "../../../Utils/testingData";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { cornFlowerBlue, seaGreenBtn } from "../../../Utils/ColorConstants";
import DataTable from "../../../Components/DataTable";

const styles = {
  addBtnStyle: {
    color: "white",
    backgroundColor: seaGreenBtn,
    borderRadius: "10px",
    padding: "6% 0%",
  },
  activeBtn: {
    color: "white",
    backgroundColor: cornFlowerBlue,
    fontWeight: "bold",
  },
  blackTextBtn: { color: "black" },
};

const AdminComplaints = () => {
  const [employeeTab, setEmployeeTab] = useState(true);
  const [SubmittedTab, setSubmittedTab] = useState(false);

  return (
    <>
      <Box className="container">
        <Box className="comp-header">
          <Box className="comp-left-header">
            <Typography variant="h3">Complaints</Typography>
            <SearchBar className="searchBar" />
            <SelectBox
              className="selectBox"
              placeHolder={"Select Status"}
              options={options}
            />
          </Box>

          <Box className="right-box">
            <Box className="s-icon">
              <SortIcon value="AZ" defaultDirection="asc" />
            </Box>
            <Box className="addcomp-btn">
              <Button style={styles.addBtnStyle}>
                <AddIcon />
                <Link className="link-style" to="/addComplaint">
                  Add Complain
                </Link>
              </Button>
            </Box>
          </Box>
        </Box>

        <Box className="content">
          <Box className="left-content">
            <Button
              style={employeeTab ? styles.activeBtn : styles.blackTextBtn}
              onClick={() => {
                setEmployeeTab(true);
                setSubmittedTab(false);
              }}
              className="switch-btn"
            >
              Employees
            </Button>
            <Button
              style={SubmittedTab ? styles.activeBtn : styles.blackTextBtn}
              onClick={() => {
                setEmployeeTab(false);
                setSubmittedTab(true);
              }}
              className="switch-btn"
            >
              Submitted
            </Button>
          </Box>
          <Box className="right-content">
            <>
              {employeeTab && (
                <Box className="inventory-table">
                  <DataTable rows={rows} />
                </Box>
              )}
            </>
            <>
              {SubmittedTab && (
                <Box className="request-table">
                  <DataTable rows={tableDataDashboard} />
                </Box>
              )}
            </>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminComplaints;
