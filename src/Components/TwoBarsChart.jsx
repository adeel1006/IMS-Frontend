import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { cornFlowerBlue, seaGreenBtn } from "../Utils/ColorConstants";
// const adminChartdata = [
//   { name: "Electronics", number: 100},
//   { name: "Furniture", number: 400},
//   { name: "Stationary", number: 800},
// ];

const TwoBarsChart = ({data}) => {
  return (
    <>
      <BarChart style={{paddingTop:"2%"}}  width={800} height={300} data={data}>
        <XAxis dataKey="name" stroke="gray" />
        <YAxis />
        <Tooltip />
        <Bar fill={cornFlowerBlue} dataKey="number" barSize={25} />
        <Bar fill={seaGreenBtn} dataKey="number" barSize={25} />
      </BarChart>
    </>
  );
};

export default TwoBarsChart;
