import React, { useState } from "react";
import "./ClassStatusCard.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SingleStatusCard = ({ title, categories, status, allocated, available }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="card shadow-sm mb-3 text-spacing ">
      <div
        className="card-header d-flex justify-content-between align-items-center"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer", backgroundColor: "#f8f9fa" }}
      >
        <span className="fw-semibold">{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isOpen && (
        <div className="card-body d-flex justify-content-between text-center py-2">
          {categories.map((category, index) => (
            <div className="flex-fill" key={index}>
              <div className="text-start">{category}</div>
              <div
                className={`status-text text-start ${
                  status[category] === "Assigned" ? "assigned" : "not-assigned"
                }`}
              >
                {status[category]}
              </div>
            </div>
          ))}
          <div className="flex ps-3 me-5 border-start">
            <div>Allocated</div>
            <div className="text-danger">{allocated}</div>
          </div>
          <div className="flex">
            <div>Available</div>
            <div className="text-danger">{available}</div>
          </div>
        </div>
      )}
    </div>
  );
};

const ClassStatusCard = ({ data = [] }) => {
  return (
    <>
      {data.map((item, index) => (
        <SingleStatusCard
          key={index}
          title={item.title}
          categories={item.categories}
          status={item.status}
          allocated={item.allocated}
          available={item.available}
        />
      ))}
    </>
  );
};

export default ClassStatusCard;
