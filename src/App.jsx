import Layout from "./layouts/MainLayout/Layout";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Employee from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import SettingLayout from "./layouts/SettingsLayout/SettingLayout";
import SettingRoutes from "./routes/Settings/SettingRoutes";
import StudentRoutes from "./routes/Student/StudentRoutes";
import './App.css'; // Import your global styles
import EmployeeRoutes from "./routes/Employee/EmployeeRoutes";
import ExamRoutes from "./routes/Exam/ExamRoutes";
import AdministrationRoutes from "./routes/Administration/AdministrationRoutes";
import FeeRoutes from "./routes/Fee/FeeRoutes";
import AcademicsRoutes from "./routes/Academics/AcademicsRoutes";
import TransportRoutes from "./routes/Transport/TransportRoutes";
import DashboardRoutes from "./routes/Dashboard/DashboardRoutes";

// App.jsx
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Navigate to="/dashboard" replace />} />
          {/* <Route index element={<Dashboard />} /> */}
          {/* <Route path="/students" element={<Student />} /> */}
          {/* <Route path="/settings" element={<SettingRoutes />} /> */}
          {DashboardRoutes()}
          {EmployeeRoutes()}
          {SettingRoutes()}
          {StudentRoutes()}
          {AcademicsRoutes()}
          {ExamRoutes()}
          {AdministrationRoutes()}
          {FeeRoutes()}
          {TransportRoutes()}
        </Route>
        <Route path="/login" element={<Login />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>

  );
}

export default App;
