import { Outlet, useLocation } from "react-router-dom";
import TabNavigation from "../../components/TabNavigation/TabNavigation";
import { useEffect, useState } from "react";

const tabs = [
  { label: "Dashboard", value: "fee", path: "/fee" },
  { label: "Fee Details", value: "dashboard", path: "/fee/details" },
  { label: "Make Payment", value: "makePayment", path: "/fee/make-payment" },
  { label: "Academic Year", value: "academicYear", path: "/fee/academic-year" },
  { label: "Fee Refund", value: "feeRefund", path: "/fee/fee-refund" },
  { label: "Reports", value: "reports", path: "/fee/reports" },
  { label: "Push Notifications", value: "pushNotifications", path: "/fee/push-notifications" },
];

export default function FeeLayout() {
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
