
import React, {  forwardRef } from "react";
import { FiCalendar } from "react-icons/fi";
import "react-datepicker/dist/react-datepicker.css";


// ✅ Custom Date Input Component
const CustomDateInput = forwardRef(({ value, onClick, placeholder }, ref) => (
  <div style={{ position: "relative" }}>
    <input
      type="text"
      className="form-control "
      onClick={onClick}
      ref={ref}
      value={value}
      placeholder={placeholder}
      readOnly
      style={{ paddingRight: "2.5rem" }}
    />
    <FiCalendar
      style={{
        position: "absolute",
        right: "10px",
        fontSize: "1.4rem",
        top: "50%",
        transform: "translateY(-50%)",
        color: "#555",
        pointerEvents: "none",
      }}
    />
  </div>
));

export default CustomDateInput;