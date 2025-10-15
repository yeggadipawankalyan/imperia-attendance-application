import { Outlet } from "react-router-dom";

export default function ReportLayout() {
  return (
    <div className="container-fluid">
      <Outlet />
    </div>
  );
}