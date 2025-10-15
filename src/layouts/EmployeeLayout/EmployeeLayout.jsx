import { Outlet, useLocation } from "react-router-dom";
import TabNavigation from "../../components/TabNavigation/TabNavigation";
import { useEffect, useState } from "react";

const tabs = [
  { label: "Faculty", value: "faculty", path: "/faculty" },
  { label: "Attendance", value: "attendance", path: "/faculty/attendance" },
  { label: "Academics", value: "academics", path: "/faculty/academics" },
  { label: "Achievements", value: "achievements", path: "/faculty/achievements" },
];

export default function EmployeeLayout() {
  const [activeTab, setActiveTab] = useState();
  const location = useLocation();
  useEffect(() => {
    const matchedTab = tabs.find(tab => location.pathname === tab.path);
    if (matchedTab) {
      setActiveTab(matchedTab.value);
    }
  }, [location.pathname]);
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
