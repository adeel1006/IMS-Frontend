import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import SortIcon from "../../../Components/SortIcon";
import SearchBar from "../../../Components/SearchBar";
import SelectBox from "../../../Components/SelectBox";
import AddIcon from "@mui/icons-material/Add";
import { cornFlowerBlue, seaGreenBtn } from "../../../Utils/ColorConstants";
import DataTable from "../../../Components/DataTable";
import {
  fetchAdminComplaints,
  fetchEmployeesComplaints,
} from "./AdminComplainApi";
import { complaintStatus } from "../../../Utils/constants";
import { updateAdmUserComplaints } from "../../../Redux/Reducers/complaintSlice";
import "./AdminComplaints.css";

const styles = {
  addBtnStyle: {
    color: "white",
    backgroundColor: seaGreenBtn,
    borderRadius: "10px",
  },
  activeBtn: {
    color: "white",
    backgroundColor: cornFlowerBlue,
    fontWeight: "bold",
  },
  blackTextBtn: { color: "black" },
  noData: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const AdminComplaints = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [employeeTab, setEmployeeTab] = useState(true);
  const [SubmittedTab, setSubmittedTab] = useState(false);
  const navigateTo = useNavigate();

  const {
    data: employeeComplaints,
    isLoading,
    isError,
  } = useQuery("employeeComplaints", fetchEmployeesComplaints);

  const {
    data: admUserComplaints,
    isAdmLoading,
    isAdmError,
  } = useQuery("admUserComplaints", fetchAdminComplaints);

  const handleAddBtn = () => {
    navigateTo(`/adminAddComplaints`);
  };

  const specificEmpComplaintTableData = employeeComplaints?.map((item) => {
    const { id, description, submissionDate, status, action, user } = item;
    const username = user?.username || "N/A";
    const Description = description !== null ? description : "Not available";
    const Status = status !== null ? status : "pending";
    const handleNullAction = action !== null ? action : "View";
    const formattedDate = new Date(submissionDate).toISOString().slice(0, 10);
    return {
      Id: id,
      EmployeeName: username,
      Description: Description,
      SubmissionDate: formattedDate,
      Status: Status,
      Action: handleNullAction,
    };
  });

  const empTableData = specificEmpComplaintTableData?.filter((item) => {
    const values = Object.values(item).map((value) =>
      String(value).toLowerCase()
    );
    if (!selectedStatus) {
      return true;
    }
    return (
      values.some((value) => value.includes(searchQuery.toLowerCase())) &&
      item.Status === selectedStatus
    );
  });

  const specificAdmComplaintTableData = admUserComplaints?.complaints?.map(
    (item) => {
      const { id, description, submissionDate, status, action } = item;
      const Description = description !== null ? description : "Not available";
      const Status = status !== null ? status : "pending";
      const handleNullAction = action !== null ? action : "View";
      const formattedDate = new Date(submissionDate).toISOString().slice(0, 10);
      return {
        Id: id,
        Description: Description,
        SubmissionDate: formattedDate,
        Status: Status,
        Action: handleNullAction,
      };
    }
  );

  const submittedAdmTableData = specificAdmComplaintTableData?.filter(
    (item) => {
      const values = Object.values(item).map((value) =>
        String(value).toLowerCase()
      );
      if (!selectedStatus) {
        return true;
      }
      return (
        values.some((value) => value.includes(searchQuery.toLowerCase())) &&
        item.Status === selectedStatus
      );
    }
  );
  //Store in redux store for the usage in admin dashboard
  useEffect(() => {
    dispatch(updateAdmUserComplaints(specificAdmComplaintTableData));
  }, [admUserComplaints]);

  if (isLoading || isAdmLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError || isAdmError) {
    return (
      <div className="container">Error occurred while fetching complaints.</div>
    );
  }

  return (
    <Box className="container">
      <Box className="comp-header">
        <Box className="comp-left-header">
          <Typography variant="h3">Complaints</Typography>
          <SearchBar setSearchQuery={setSearchQuery} className="searchBar" />
          <SelectBox
            className="selectBox"
            placeHolder={"Select Status"}
            options={complaintStatus}
            onChange={(event) => setSelectedStatus(event.target.value)}
          />
        </Box>

        <Box className="right-box">
          {/* <Box className="s-icon">
            <SortIcon value="AZ" defaultDirection="asc" />
          </Box> */}
          <Box className="addcomp-btn">
            <Button style={styles.addBtnStyle} onClick={handleAddBtn}>
              <AddIcon />
              Add Complaint
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
                {!empTableData.length && (
                  <div className="container" style={styles.noData}>
                    No data available
                  </div>
                )}
                <DataTable
                  rows={empTableData}
                  linkString={`/adminViewComplaints/`}
                />
              </Box>
            )}
          </>
          <>
            {SubmittedTab && (
              <Box className="request-table">
                {!submittedAdmTableData.length && (
                  <div className="container" style={styles.noData}>
                    No data available
                  </div>
                )}
                <DataTable
                  rows={submittedAdmTableData}
                  linkString={`/adminViewComplaints/`}
                />
              </Box>
            )}
          </>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminComplaints;
