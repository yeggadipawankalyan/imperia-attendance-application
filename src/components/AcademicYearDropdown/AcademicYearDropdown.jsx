import { useState, useRef, useEffect } from "react";
import "./AcademicsYearDropdown.css";

// 🔧 Get current academic year
function getAcademicYear(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const startYear = month >= 6 ? year : year - 1;
  const endYear = startYear + 1;
  return `${startYear}-${String(endYear).slice(-2)}`;
}

// 🔧 Generate list of academic years
function generateAcademicYears(count = 5) {
  const current = new Date();
  const currentStartYear =
    current.getMonth() >= 6 ? current.getFullYear() : current.getFullYear() - 1;
  return Array.from({ length: count }, (_, i) => {
    const start = currentStartYear - i;
    const end = start + 1;
    return `${start}-${String(end).slice(-2)}`;
  });
}

export default function AcademicYearDropdown({ onSelect = () => {} }) {
  const [selectedYear, setSelectedYear] = useState(getAcademicYear());
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const years = generateAcademicYears(6);

  const handleSelect = (year) => {
    setSelectedYear(year);
    onSelect(year);
    setOpen(false);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="btn btn-bg-color text-size text-white custom-dropdown-toggle dropdown-toggle"
        onClick={() => setOpen((prev) => !prev)}
      >
        {selectedYear}
      </button>
      {open && (
        <ul className="dropdown-menu show custom-dropdown-menu p-1 mt-1 ">
          {years.map((year) => (
            <li key={year}>
              <button
                className={`dropdown-item rounded-2 text-size mb-1 ${
                  year === selectedYear ? "btn-bg-color  text-white" : ""
                }`}
                onClick={() => handleSelect(year)}
              >
                {year}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
