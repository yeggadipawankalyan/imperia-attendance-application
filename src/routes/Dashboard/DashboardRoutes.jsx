import { Route } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Dashboard from "../../pages/Dashboard/Dashboard";
export default function DashboardRoutes() {
  return (
    <>
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* Default dashboard landing */}
        <Route index element={<Dashboard />} />

        {/* Other dashboard-related child routes
        <Route path="fee-detail" element={<FeeDetail />} />
        <Route path="make-payment" element={<MakePayment />} />
        <Route path="academic-year" element={<AcademicYear />} />
        <Route path="fee-refund" element={<FeeRefund />} /> */}
      </Route>
    </>
  );
}
