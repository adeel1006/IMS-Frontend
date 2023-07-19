import React, { useState } from "react";
import { useQuery } from "react-query";
import { Box, Typography } from "@mui/material";
import { fetchRequestData } from "./AdminRequestApi";
import { requestStatus } from "../../../Utils/constants";
import SelectBox from "../../../Components/SelectBox";
import DataTable from "../../../Components/DataTable";
import SearchBar from "../../../Components/SearchBar";
import SortIcon from "../../../Components/SortIcon";
import "./Requests.css";

const noDataStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Requests = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const {
    data: requestsData,
    isLoading,
    isError,
  } = useQuery("requestsData", fetchRequestData);

  const specificRequestsTableData = requestsData?.map((item) => {
    const {
      id,
      itemName,
      category,
      createdAt,
      status,
      user,
      subcategory,
      action,
    } = item;
    const User = user?.username || "Not Available";
    const Category = category !== null ? category : "Not available";
    const subCategory = subcategory?.name || "Not available";
    const handleNullAction = action !== null ? action : "View";
    const formattedDate = new Date(createdAt).toISOString().slice(0, 10);

    return {
      Id: id,
      EmployeeName: User,
      Name: itemName,
      Category: Category,
      Subcategory: subCategory,
      Date: formattedDate,
      Status: status,
      Action: handleNullAction,
    };
  });

  const tableData = specificRequestsTableData?.filter((item) => {
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

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="container">Error occurred while fetching requests.</div>
    );
  }
  return (
    <Box className="req-container">
      <Box className="req-header">
        <Box className="req-left-header">
          <Typography variant="h3">Requests</Typography>
          <SearchBar className="searchBar" setSearchQuery={setSearchQuery} />
          <SelectBox
            className="selectBox"
            placeHolder={"Select Status"}
            options={requestStatus}
            onChange={(event) => setSelectedStatus(event.target.value)}
          />
        </Box>

        <Box className="req-right-header">
          {/* <SortIcon value="AZ" defaultDirection="asc" /> */}
        </Box>
      </Box>
      <Box className="req-table">
        {!tableData.length && (
          <div className="container" style={noDataStyle}>
            No data available
          </div>
        )}
        <DataTable rows={tableData} linkString={`/adminViewRequest/`} />
      </Box>
    </Box>
  );
};

export default Requests;
