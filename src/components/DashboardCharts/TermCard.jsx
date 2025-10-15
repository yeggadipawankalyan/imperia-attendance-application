// FeeCard.jsx
import React from "react";
import "./TermCard.scss"; 
import { FaArrowRight } from "react-icons/fa6";

const TermCard = ({ term, amount, paisa}) => {
  return (
    <div className="fee-card">
      <div className="fee-card-header d-flex justify-content-between align-items-center">
        <span>{term}</span>
        <span><FaArrowRight /></span>
      </div>
      <div className="fee-card-amount">₹{amount}<small className="feesAmountText text-large">.{paisa}</small></div>
    </div>
  );
};

export default TermCard;
