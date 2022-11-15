import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const defaultLabelStyle = {
  fontSize: "5px",
  fontFamily: "sans-serif",
};

const data = [
  { title: "Food & Drink", value: 76, color: "#86BBD8" },
  { title: "Travel", value: 50, color: "#C13C37" },
  { title: "Entertainment", value: 35, color: "#C4B454" },
  { title: "Home", value: 20, color: "#AFE1AF" },
  { title: "Other", value: 40, color: "#CF9FFF" },
];

const Chart = () => {
  return (
    <div>
      <PieChart
        data={data}
        radius={30}
        label={({ dataEntry }) => Math.round(dataEntry.percentage) + "% "}
        labelStyle={defaultLabelStyle}
      />
    </div>
  );
};

export default Chart;
