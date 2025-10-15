import { Outlet, useLocation } from "react-router-dom";
import TabNavigation from "../../components/TabNavigation/TabNavigation";
import { useState } from "react";

const tabs = [
  { label: "Students", value: "students", path: "/students" },
  { label: "Attendance", value: "attendance", path: "/students/attendance" },
  { label: "Academics", value: "academics", path: "/students/academics" },
  { label: "Result", value: "result", path: "/students/result" },
  {
    label: "Achievements",
    value: "achievements",
    path: "/students/achievements",
  },
];

export default function StudentLayout() {
  let path_value = "";
  const location = useLocation();
  if (location.pathname === "/students") {
    path_value = "students";
  }
  if (location.pathname === "/students/attendance") {
    path_value = "attendance";
  }
  if (location.pathname === "/students/achievements") {
    path_value = "achievements";
  }
  const [activeTab, setActiveTab] = useState(path_value);
  return (
    <div className="container-fluid">
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
