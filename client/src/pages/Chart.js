import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const defaultLabelStyle = {
  fontSize: "5px",
  fontFamily: "sans-serif",
};

function Chart() {
  const data = [{ title: "One", value: 10, color: "#E38627" }];
  return (
    <div>
      <PieChart data={data} />
    </div>
  );
}

export default Chart;
