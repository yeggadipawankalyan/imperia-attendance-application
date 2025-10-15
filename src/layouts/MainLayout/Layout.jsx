import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Layout() {
  return (
    <div className="container-fluid p-0">
      <div className="row m-0">
        <div className="col-12 p-0">
          <Navbar />
        </div>
      </div>
      <div className="d-flex" style={{ height: "calc(100vh - 60px)" }}>
        <Sidebar />
        <div className="flex-grow-1 bg-white" style={{ height: "100%", overflowY: "auto", padding:"16px" }}>
          {/* <h2>Main Content</h2>
          <p>This area resizes automatically when the sidebar expands or collapses.</p>
          {[...Array(50)].map((_, i) => (
          <p key={i}>This is paragraph {i + 1}</p>
        ))} */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
