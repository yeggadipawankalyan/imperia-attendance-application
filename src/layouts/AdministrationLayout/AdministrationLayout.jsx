import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TabNavigation from "../../components/TabNavigation/TabNavigation";
import { useState, useEffect } from "react";

const tabs = [
  { label: "Dashboard", value: "dashboard", path: "/administration/dashboard" },
  { label: "Admissions", value: "admissions", path: "/administration/admissions" },
  { label: "Enquires", value: "enquires", path: "/administration/enquires" },
  { label: "Visitor's", value: "visitors", path: "/administration/visitors" },
  { label: "Transfer", value: "transfer", path: "/administration/transfer" },
  { label: "Reports", value: "reports", path: "/administration/reports" },
];

export default function AdministrationLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    // Determine active tab based on current pathname
    const currentTab = tabs.find(tab => 
      location.pathname.startsWith(tab.path) || 
      (tab.path === "/administration/dashboard" && location.pathname === "/administration")
    );
    
    if (currentTab) {
      setActiveTab(currentTab.value);
    }
  }, [location.pathname]);

  const handleTabChange = (tabValue) => {
    setActiveTab(tabValue);
    const selectedTab = tabs.find(tab => tab.value === tabValue);
    if (selectedTab) {
      // Use client-side navigation
      navigate(selectedTab.path);
    }
  };

  return (
    <div className="container-fluid">
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <div className="mt-3">
        <Outlet />
      </div>
    </div>
  );
}
