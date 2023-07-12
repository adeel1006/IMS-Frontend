import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import SearchBar from "../../../Components/SearchBar";
import SelectBox from "../../../Components/SelectBox";
import DataTable from "../../../Components/DataTable";
import { updateFilteredData } from "../../../Redux/Reducers/complaintSlice";
import {
  httpRequest,
  fetchSuperAdminComplaints,
} from "../../../Utils/httpRequestsStrings";
import { complaintStatus } from "../../../Utils/constants";
import "./Complaints.css";

const Complaints = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const fetchComplaints = async () => {
    let accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(
      `${httpRequest + fetchSuperAdminComplaints}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  };

  const {
    data: complaints,
    isLoading,
    isError,
  } = useQuery("complaints", fetchComplaints);

  const specificTableData = complaints?.map((item) => {
    const { id, title, description, user, submissionDate, status, action } =
      item;
    const email = user?.email || "";
    const handleNullStatus = status !== null ? status : "pending";
    const handleNullAction = action !== null ? action : "View";
    const formattedDate = new Date(submissionDate).toISOString().slice(0, 10);
    return {
      Id: id,
      Email: email,
      Title: title,
      Description: description,
      SubmissionDate: formattedDate,
      Status: handleNullStatus,
      Action: handleNullAction,
    };
  });
  const filteredTableData = specificTableData?.filter((item) => {
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

  useEffect(() => {
    dispatch(updateFilteredData(filteredTableData));
  }, [complaints]);

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="container">Error occurred while fetching complaints.</div>
    );
  }

  return (
    <>
      <Box className="complaints-container">
        <Box className="complaints-header">
          <Box className="complaints-left-header">
            <Typography variant="h3">Complaints</Typography>
            <SearchBar setSearchQuery={setSearchQuery} minWidth={350} />
            <SelectBox
              className="selectBox"
              placeHolder={"Select Status"}
              options={complaintStatus}
              onChange={(event) => setSelectedStatus(event.target.value)}
            />
          </Box>
        </Box>
        <Box className="complaints-table">
          <DataTable
            rows={filteredTableData}
            linkString={`/superAdminComplaintDetails/`}
          />
        </Box>
      </Box>
    </>
  );
};

export default Complaints;
