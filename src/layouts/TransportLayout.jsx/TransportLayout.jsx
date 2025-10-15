import { Outlet, useLocation } from "react-router-dom";
import TabNavigation from "../../components/TabNavigation/TabNavigation";
import { useState } from "react";

const tabs = [
  { label: "Vehicles", value: "vehicles", path: "/transport/vehicles" },
  { label: "Drivers", value: "drivers", path: "/transport" },
  { label: "Routes", value: "routes", path: "/tranaport/routes" },
  {
    label: "Student_Transport",
    value: "student_transport",
    path: "/Transport/student_transport",
  },
  {
    label: "Transport_Fees",
    value: "transport_Fees",
    path: "/Transport/transport_Fees",
  },
];

export default function TransportLayout() {
  let path_value = "";
  const location = useLocation();
  if (location.pathname === "/transport/vehicles") {
    path_value = "vehicles";
  }
  if (location.pathname === "/transport") {
    path_value = "drivers";
  }
  if (location.pathname === "/transport/transport_Fees") {
    path_value = "transport_Fees";
  }
  if (location.pathname === "/transport/student_transport") {
    path_value = "student_transport";
  }
//   if (location.pathname === "/transport/driverForm") {
//     path_value = "driverForm";
//   }
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
