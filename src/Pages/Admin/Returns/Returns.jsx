import React, { useState } from "react";
import { useQuery } from "react-query";
import { Box, Typography } from "@mui/material";
import SearchBar from "../../../Components/SearchBar";
import SelectBox from "../../../Components/SelectBox";
import DataTable from "../../../Components/DataTable";
import { fetchRequestApprovedData } from "./returnsApi";
import { requestTypes } from "../../../Utils/constants";
import "./Returns.css";

const noDataStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Returns = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  let notAvailable = "Not Available";
  const {
    data: returnData,
    isLoading,
    isError,
  } = useQuery("returnData", fetchRequestApprovedData);

  const specificReturnTableData = returnData?.map((item) => {
    const {
      id,
      itemName,
      category,
      createdAt,
      status,
      requestType,
      user,
      subcategory,
      action,
    } = item;
    const User = user?.username || notAvailable;
    const Category = category !== null ? category : notAvailable;
    const subCategory = subcategory?.name || notAvailable;
    const Type = requestType || notAvailable;
    const handleNullAction = action !== null ? action : "View";
    const formattedDate = new Date(createdAt).toISOString().slice(0, 10);

    return {
      Id: id,
      EmployeeName: User,
      ItemName: itemName,
      Category: Category,
      Subcategory: subCategory,
      Type: Type,
      Date: formattedDate,
      Status: status,
      Action: handleNullAction,
    };
  });

  const tableData = specificReturnTableData?.filter((item) => {
    const values = Object.values(item).map((value) =>
      String(value).toLowerCase()
    );
    if (!selectedType) {
      return true;
    }
    return (
      values.some((value) => value.includes(searchQuery.toLowerCase())) &&
      item.Type === selectedType
    );
  });

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return <div className="container">Error occurred while fetching data.</div>;
  }

  return (
    <Box className="return-container">
      <Box className="return-header">
        <Box className="return-left-header">
          <Typography variant="h3">Returns</Typography>
          <SearchBar className="searchBar" setSearchQuery={setSearchQuery} />
          {/* <SelectBox
            className="selectBox"
            placeHolder={"Select Status"}
            options={options}
          /> */}
          <SelectBox
            className="selectBox"
            placeHolder={"Select Type"}
            options={requestTypes}
            onChange={(event) => setSelectedType(event.target.value)}
          />
        </Box>
      </Box>

      <Box className="return-table">
        {!tableData.length && (
          <div className="container" style={noDataStyle}>
            No data available
          </div>
        )}
        <DataTable rows={tableData} linkString={`/viewReturn/`} />
      </Box>
    </Box>
  );
};

export default Returns;
