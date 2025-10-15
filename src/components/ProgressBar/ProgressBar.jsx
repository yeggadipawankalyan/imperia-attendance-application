import React from "react";

export default function ProgressBar({ percent }) {
  let bgColor = "bg-success";
  if (percent < 50) bgColor = "bg-danger";
  else if (percent < 80) bgColor = "bg-warning";

  return (
    <div className="progress" style={{ height: "8px", width: "100px" }}>
      <div
        className={`progress-bar ${bgColor}`}
        role="progressbar"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}
