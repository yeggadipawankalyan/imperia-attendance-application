import { Outlet } from "react-router-dom";

export default function HRLayout() {
  return (
    <div className="container-fluid">
      <Outlet />
    </div>
  );
}