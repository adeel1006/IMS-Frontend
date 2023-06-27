import { Box } from "@mui/material";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { cornFlowerBlue } from "../Utils/ColorConstants";



const DashboardChart = ({data}) => {
  const maxNumber = Math.max(...data.map((item) => item.number));
  return (
    <>
      <Box width="100%" overflow="auto">
        <BarChart width={1400} height={300} data={data}>
          <XAxis dataKey="month" stroke="gray" />
          <YAxis domain={[0, maxNumber]} />
          <Tooltip />
          <Bar dataKey="number" fill={cornFlowerBlue} barSize={50} />
        </BarChart>
      </Box>
    </>
  );
};

export default DashboardChart;
