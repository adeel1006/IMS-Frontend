import React from "react";
import { Card, CardContent, Typography, Box, Icon } from "@mui/material";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { seaGreenBtn } from "../Utils/ColorConstants";

const DashboardCard = ({ title, number, icon, tagline }) => {
  return (
    <Card sx={{ width: "fit-content" }} className="container">
      <CardContent>
        <Box sx={{ display: "block" }}>
          <Typography fontWeight="bold">{title}</Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h2" fontWeight="bolder">
              {number}
            </Typography>
            {icon ? (
              <ArrowDropUpIcon
                sx={{ color: seaGreenBtn, fontSize: "xxx-large" }}
              />
            ) : (
              <ArrowDropDownIcon sx={{ color: "red", fontSize: "xxx-large" }} />
            )}
          </Box>
          <Typography variant="caption" sx={{ ml: 1, color: "gray" }}>
            {tagline}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
