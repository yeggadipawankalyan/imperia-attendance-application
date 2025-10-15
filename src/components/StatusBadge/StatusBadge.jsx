// components/StatusBadge.jsx
import React from "react";

export default function StatusBadge({ status }) {
  const isActive = status //?.toLowerCase() === "active";

  return (
    <span
      className={`text-black rounded-3 px-2 py-1 d-inline-flex align-items-center gap-2 ${
        isActive ? "bg-light-success text-success" : "bg-light-danger text-danger"
      }`}
      style={{
        fontWeight: 500,
        fontSize: "0.75rem",
        border: "1px solid #f4eded",
      }}
    >
      <span
        className="rounded-circle d-inline-block text-black"
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: isActive ? "#198754" : "#dc3545",
        }}
      ></span>
      {typeof status === 'boolean' ? (status ? "Active" : "Inactive"):(status)}
    </span>
  );
}
