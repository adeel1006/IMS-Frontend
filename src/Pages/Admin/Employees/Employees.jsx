import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import SelectBox from "../../../Components/SelectBox";
import SearchBar from "../../../Components/SearchBar";
import DataTable from "../../../Components/DataTable";
import AddIcon from "@mui/icons-material/Add";
import { departments } from "../../../Utils/constants";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import { fetchEmployeesList } from "./AdminEmployeeApi";
import "./Employees.css";

const styles = {
  addBtnStyle: {
    color: "white",
    backgroundColor: seaGreenBtn,
    borderRadius: "10px",
  },
  noData: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Employees = () => {
  let notAvailable = "Not Available";
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const navigateTo = useNavigate();

  const handleAddBtn = () => {
    navigateTo(`/addEmployee`);
  };

  const {
    data: employeesList,
    isLoading,
    isError,
  } = useQuery("employeesList", fetchEmployeesList);

  const specificEmpTableData = employeesList?.map((item) => {
    const { id, username, email, contact, department } = item;
    const FullName = username || notAvailable;
    const Contact = contact || notAvailable;
    const Department = department || notAvailable;

    const Action = "View";

    return {
      Id: id,
      FullName: FullName,
      Email: email,
      Contact: Contact,
      Department: Department,
      Action: Action,
    };
  });

  const tableData = specificEmpTableData?.filter((item) => {
    const values = Object.values(item).map((value) =>
      String(value).toLowerCase()
    );
    if (!selectedDepartment) {
      return true;
    }
    return (
      values.some((value) => value.includes(searchQuery.toLowerCase())) &&
      item.Department === selectedDepartment
    );
  });

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="container">
        Error occurred while fetching Employees Data.
      </div>
    );
  }

  return (
    <Box className="emp-container">
      <Box className="emp-header">
        <Box className="emp-left-header">
          <Typography variant="h3">Employees</Typography>
          <SearchBar className="searchBar" setSearchQuery={setSearchQuery} />
          <SelectBox
            className="selectBox"
            placeHolder={"Select Department"}
            options={departments}
            onChange={(event) => setSelectedDepartment(event.target.value)}
          />
        </Box>

        <Box className="emp-right-header">
          <Button style={styles.addBtnStyle} onClick={handleAddBtn}>
            <AddIcon />
            Add Employee
          </Button>
        </Box>
      </Box>
      <Box className="emp-table">
        {!tableData.length && (
          <div className="container" style={styles.noData}>
            No data available
          </div>
        )}
        <DataTable rows={tableData} linkString={`/viewEmployee/`} />
      </Box>
    </Box>
  );
};

export default Employees;
