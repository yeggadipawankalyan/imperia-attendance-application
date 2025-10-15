import { Outlet, useLocation } from "react-router-dom";
import TabNavigation from "../../components/TabNavigation/TabNavigation";
import { useEffect, useState } from "react";

const tabs = [
  { label: "Class", value: "class", path: "/academic" },
  { label: "Assign Subject", value: "assign-subject", path: "/academic/assign-subject" },
  { label: "Time Table", value: "time-table", path: "/academic/time-table" },
  { label: "Swap Time Table", value: "swap-time-table", path: "/academic/swap-time-table" },
  { label: "Lesson plan", value: "lesson-plan", path: "/academic/lesson-plan" },
  { label: "Results", value: "results", path: "/academic/results" },
  { label: "Shuffle Section", value: "shuffle-section", path: "/academic/shuffle-section" },
];

export default function AcademicLayout() {
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
