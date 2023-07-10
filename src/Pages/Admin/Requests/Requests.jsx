import React from "react";
import { useQuery } from "react-query";
import { Box, Typography } from "@mui/material";
import { fetchRequestData } from "./AdminRequestApi";
import { options, rows } from "../../../Utils/testingData";
import SelectBox from "../../../Components/SelectBox";
import DataTable from "../../../Components/DataTable";
import SearchBar from "../../../Components/SearchBar";
import SortIcon from "../../../Components/SortIcon";
import "./Requests.css";

const Requests = () => {
  const {
    data: requestsData,
    isLoading,
    isError,
  } = useQuery("requestsData", fetchRequestData);
  // console.log(JSON.stringify(requestsData, null, 2));

  const specificRequestsTableData = requestsData?.map((item) => {
    const { id, itemName, category, createdAt, status, user, subcategory, action } =
      item;
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

  console.log(JSON.stringify(specificRequestsTableData, null, 2));

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
          <SearchBar className="searchBar" />
          <SelectBox
            className="selectBox"
            placeHolder={"Select Status"}
            options={options}
          />
        </Box>

        <Box className="req-right-header">
          <SortIcon value="AZ" defaultDirection="asc" />
        </Box>
      </Box>
      <Box className="req-table">
        <DataTable rows={specificRequestsTableData} linkString={`/adminViewRequest/`} />
      </Box>
    </Box>
  );
};

export default Requests;
