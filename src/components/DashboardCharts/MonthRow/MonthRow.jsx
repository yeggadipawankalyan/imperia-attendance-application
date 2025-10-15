import React from "react";
import "./MonthRow.scss";

const MonthRow = ({ label, date, amount, status, paisa }) => {
  return (
    <div className="month-row d-flex flex-column align-items-start gap-2">
      <div className="info d-flex flex-row justify-content-between">
        <p className="label">{label}</p>
        <p className="date">{date}</p>
      </div>
      <div className="d-flex justify-content-between">
        <h4 className="amount mb-0">{amount}<span>.{paisa}</span> </h4>
        <span className={`status ${status.toLowerCase()}`}>{status}</span>
      </div>
    </div>
  );
};

export default MonthRow;
