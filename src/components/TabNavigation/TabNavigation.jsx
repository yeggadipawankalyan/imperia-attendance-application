// TabNavigation.jsx
import { useNavigate } from "react-router-dom";
import "./TabNavigation.css";

export default function TabNavigation({ tabs, activeTab, onTabChange }) {
  const navigate = useNavigate();

  const handleClick = (tab) => {
    onTabChange(tab.value);       // Update active tab
    navigate(tab.path);           // Navigate to tab-specific path
  };

  return (
    <div className="d-flex">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`btn border-0 rounded-0 px-3 py-2 fw-semibold tab-btn ${
            activeTab === tab.value
              ? "brinavv-color tab-active"
              : "text-black tab-inactive"
          }`}
          onClick={() => handleClick(tab)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
