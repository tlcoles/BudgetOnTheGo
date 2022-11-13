import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const defaultLabelStyle = {
  fontSize: "5px",
  fontFamily: "sans-serif",
};

function Chart() {
  const data = [
    { title: "One", value: 10, color: "#E38627" },
    { title: "Two", value: 15, color: "#C13C37" },
    { title: "Three", value: 20, color: "#6A2135" },
  ];
  return (
    <div>
      <PieChart
        data={data}
        label={({ dataEntry }) =>
          Math.round(dataEntry.percentage) + "% " + dataEntry.title
        }
        labelStyle={defaultLabelStyle}
      />
    </div>
  );
}

export default Chart;
