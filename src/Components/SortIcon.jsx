import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const arrowStyle = { fontSize: "inherit", fontWeight: "bold", color: "white" };
const SortIcon = ({ defaultDirection = "asc" }) => {
  const [sortDirection, setSortDirection] = useState(defaultDirection);

  const handleSortClick = () => {
    if (sortDirection === "asc") {
      setSortDirection("desc");
    } else {
      setSortDirection("asc");
    }
  };

  return (
    <IconButton onClick={handleSortClick}>
      <span style={{ marginRight: "1%", fontSize: "small", color: "white" }}>
        AZ
      </span>
      {sortDirection === "asc" ? (
        <ArrowDropUpIcon style={arrowStyle} />
      ) : (
        <ArrowDropDownIcon style={arrowStyle} />
      )}
    </IconButton>
  );
};

export default SortIcon;
