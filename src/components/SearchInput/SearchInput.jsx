import React from "react";
import { FiSearch } from "react-icons/fi";
import "./SearchInput.css"; // Optional for custom styles

export default function SearchInput({
  value = "",
  onChange = () => {},
  placeholder = "Search...",
  className = "",
  inputClass = "",
  iconColor = "#6c757d",
  iconSize = 16,
}) {
  return (
    <div className={`search-input-container ${className}`}>
      <FiSearch className="search-icon" size={iconSize} color={iconColor} />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`form-control secondary-color ps-5 py-1 input-focus ${inputClass}`}
      />
    </div>
  );
}
