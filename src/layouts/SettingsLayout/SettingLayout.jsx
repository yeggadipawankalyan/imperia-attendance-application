import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function SettingLayout() {
  return (
    <div className="container-fluid p-0">
      {/* <Breadcrumbs baseLabel="Settings" basePath="/settings" /> */}
      <Outlet />
    </div>
  );
}
