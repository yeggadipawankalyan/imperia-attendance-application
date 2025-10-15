import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./ProgressChart.scss";

// Colors for slices


const ProgressChart = ({ percentage }) => {

  const COLORS = ["#3b82f6", "#f59e0b", "#f97316"];
  const data = [
    { name: "Payment", value: 35, color: COLORS[0] },
    { name: "paid", value: 20, color: COLORS[1] },
    { name: "Pending", value: 50, color: COLORS[2] },
  ];

  return (
    <div className="progress-chart">
      <ResponsiveContainer width={200} height={250}>
        <PieChart>
          <Pie
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius={65}
            outerRadius={100}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === 0 ? COLORS[0] : COLORS[index]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="center-text">
        <span>{percentage}%</span>
      </div>
    </div>
  );
};

export default ProgressChart;
