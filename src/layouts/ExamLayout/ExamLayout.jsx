import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import TabNavigation from "../../components/TabNavigation/TabNavigation";

const tabs = [
  { label: "Exams", value: "exams", path: "/exams" },
  { label: "Sitting Plan", value: "sitting-plan", path: "/exams/sitting-plan" },
  { label: "Result", value: "result", path: "/exams/result" },
  { label: "Assign Faculty", value: "assign-faculty", path: "/exams/assign-faculty" },
  { label: "Board Operations", value: "board-operations", path: "/exams/board-operations" },
];

export default function ExamLayout() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

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
