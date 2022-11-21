import React from "react";
import { useQuery } from "@apollo/client";
import { PieChart } from "react-minimal-pie-chart";
import { QUERY_AGGREGATED_PERSONAL_CHART } from "../utils/queries";

const defaultLabelStyle = {
  fontSize: "5px",
  fontFamily: "sans-serif",
};

const Chart = () => {
  const { loading, data } = useQuery(QUERY_AGGREGATED_PERSONAL_CHART);
  const aggregatedPersonalChart = data?.aggregatedPersonalChart || [];

  const colors = ["#86BBD8", "#C13C37", "#C4B454", "#AFE1AF", "#CF9FFF"];
  const chartData = aggregatedPersonalChart.map((item, index) => {
    const temp = {
      title: item._id,
      value: item.amount,
      color: colors[index % colors.length],
    };
    return temp;
  });

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <PieChart
          data={chartData}
          radius={30}
          label={({ dataEntry }) => Math.round(dataEntry.percentage) + "% "}
          labelStyle={defaultLabelStyle}
        />
      )}
    </div>
  );
};

export default Chart;
