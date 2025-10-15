import { Outlet, useLocation } from "react-router-dom";
import TabNavigation from "../../components/TabNavigation/TabNavigation";
import { useState, useEffect } from "react";

const tabs = [
  { label: "Dashboard", value: "dashboard", path: "/dashboard" },
  { label: "Fee Detail", value: "fee-detail", path: "/dashboard/fee-detail" },
  { label: "Make Payment", value: "make-payment", path: "/dashboard/make-payment" },
  { label: "Academic Year", value: "academic-year", path: "/dashboard/academic-year" },
  { label: "Fee Refund", value: "fee-refund", path: "/dashboard/fee-refund" },
  { label: "Reports", value: "reports", path: "/dashboard/reports" },
  { label: "Push Notifications", value: "push-notification", path: "/dashboard/push-notification" },
];

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState();
  const location = useLocation();

  useEffect(() => {
    const matchedTab = tabs.find(tab => location.pathname === tab.path);
    if (matchedTab) {
      setActiveTab(matchedTab.value);
    } else {
      setActiveTab("dashboard");
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
