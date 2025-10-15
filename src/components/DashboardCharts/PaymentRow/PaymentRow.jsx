import React from "react";
import "./PaymentRow.scss";

const PaymentRow = ({ label, value, change, color, paisa}) => {
  return (
    <div className="payment-row" style={{borderLeft: `3px solid ${color}`}}>
      <span className="left-row label">{label}</span>
      <div className="right-row d-flex flex-row justify-content-between">
        <h5 className="value py-0 m-0">{value}<span>.{paisa}</span></h5>
        <span className="change">{change} <span>vs last month</span></span>
      </div>
    </div>
  );
};

export default PaymentRow;
