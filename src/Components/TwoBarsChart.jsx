import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { cornFlowerBlue, seaGreenBtn } from "../Utils/ColorConstants";
import { Box, Typography } from "@mui/material";


const TwoBarsChart = ({ data }) => {
  return (
    <>
      <BarChart
        style={{ paddingTop: "2%" }}
        width={800}
        height={300}
        data={data}
      >
        <XAxis dataKey="name" stroke="gray" />
        <YAxis />
        <Tooltip />
        <Bar fill={cornFlowerBlue} dataKey="number" barSize={25} />
        <Bar fill={seaGreenBtn} dataKey="number" barSize={25} />
      </BarChart>
      <Typography
        sx={{
          color: "gray",
          fontSize: "small",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Box
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: cornFlowerBlue,
            margin: "0% 1%",
          }}
        ></Box>
        Assigned Items
        <Box
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: seaGreenBtn,
            margin: "0% 1%",
          }}
        ></Box>
        Remaining Items
      </Typography>
    </>
  );
};

export default TwoBarsChart;
