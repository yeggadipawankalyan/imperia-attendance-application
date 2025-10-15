import React from "react";
import "./Input.css";

export default function Input({
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  label = "",
  required = false,
  disabled = false,
  icon = null,
  error = "",
  className = "",
  inputClass = "",
  ...rest
}) {
  return (
    <div className={`w-100 ${className}`}>
      {label && (
        <label htmlFor={name} className="form-label fw-medium mb-1">
          {label}
          {required && <span className="text-danger"> *</span>}
        </label>
      )}
      <div className="position-relative">
        {icon && (
          <div className="input-icon">
            {icon}
          </div>
        )}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`form-control input-focus ${icon ? "ps-5 " : ""} ${inputClass}`}
          {...rest}
        />
      </div>
      {error && <div className="text-danger mt-1 small">{error}</div>}
    </div>
  );
}
