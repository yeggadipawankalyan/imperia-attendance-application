import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCog,
  FaUserTie,
  FaUniversity,
  FaBook,
  FaMoneyBillWave,
  FaUsersCog,
  FaChartBar,
  FaBus,
  FaBed,
  FaRegClipboard,
} from "react-icons/fa";
import styles from "./Sidebar.module.css";

const menuItems = [
  { icon: <FaHome />, label: "Dashboard", path: "/" },
  { icon: <FaUser />, label: "Students", path: "/students" },
  { icon: <FaUserTie />, label: "Employee", path: "/faculty" },
  { icon: <FaUniversity />, label: "Administration", path: "/administration" },
  { icon: <FaBook />, label: "Academics", path: "/academic" },
  { icon: <FaRegClipboard />, label: "Exam", path: "/exams" },
  { icon: <FaMoneyBillWave />, label: "Fee", path: "/fee" },
  { icon: <FaUsersCog />, label: "HR", path: "/hr" },
  { icon: <FaChartBar />, label: "Reports", path: "/reports" },
  { icon: <FaBus />, label: "Transport", path: "/transport" },
  { icon: <FaBed />, label: "Hostel", path: "/hostel" },
  { icon: <FaCog />, label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`d-flex flex-column p-1 ${styles.sidebar} ${
        isHovered ? styles.expanded : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {menuItems.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) =>
            `d-flex align-items-center text-decoration-none ${
              styles.menuItem
            } ${isActive ? styles.active : "text-dark"}`
          }
        >
          <div
            className={`d-flex align-items-center justify-content-center icon-size ${styles.icon}`}
          >
            {item.icon}
          </div>
          <span
            className={`ms-2 text-size ${styles.label} ${isHovered ? styles.show : ""}`}
          >
            {item.label}
          </span>
        </NavLink>
      ))}
    </div>
  );
}
