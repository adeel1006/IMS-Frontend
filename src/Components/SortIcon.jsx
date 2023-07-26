import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const styles = {
  value: { marginRight: "1%", fontSize: "small", color: "white" },
  arrowStyle: { fontSize: "inherit", fontWeight: "bold", color: "white" },
};

const SortIcon = ({ defaultDirection = "AZ", value }) => {
  const [sortDirection, setSortDirection] = useState(defaultDirection);

  const handleSortClick = () => {
    if (sortDirection === "AZ") {
      setSortDirection("ZA");
    } else {
      setSortDirection("AZ");
    }
  };

  return (
    <IconButton onClick={handleSortClick}>
      <span style={styles.value}>{value}</span>
      {sortDirection === "AZ" ? (
        <ArrowDropUpIcon style={styles.arrowStyle} />
      ) : (
        <ArrowDropDownIcon style={styles.arrowStyle} />
      )}
    </IconButton>
  );
};

export default SortIcon;
