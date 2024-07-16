import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const Bargraph = ({ counts }) => {
  const { 0: score0, 1: score1, "-1": scoreMinus1 } = counts;

  const data = [
    { title: "Score 0", value: score0, color: "#E38627" },
    { title: "Score 1", value: score1, color: "#C13C37" },
    { title: "Score -1", value: scoreMinus1, color: "#6A2135" },
  ];

  return (
    <div style={{ width: "100px", height: "100px" }}>
      <PieChart width={50} height={50}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="title"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Bargraph;
