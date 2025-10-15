import { Route } from "react-router-dom";
import FeeDetails from "../../pages/Fee/FeeDetails/FeeDetails";
import FeeLayout from "../../layouts/FeeLayout/FeeLayout";
import Dashboard from "../../pages/Fee/Dashboard/Dashboard";
import AcademicsYear from "../../pages/Fee/AcademicsYear/AcademicsYear";
import FeeRefund from "../../pages/Fee/FeeRefund/FeeRefund";
import Reports from "../../pages/Fee/Reports/Reports";
import PushNotifications from "../../pages/Fee/PushNotification/PushNotifications";
import MakePayment from "../../pages/Fee/MakePayment/MakePayment";
import StudentFeeDetails from "../../pages/Fee/FeeDetails/StudentFeeDetails/StudentFeeDetails";

export default function FeeRoutes() {
  return (
    <>
      <Route path="/fee" element={<FeeLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/fee/details" element={<FeeDetails />} />
        <Route path="/fee/make-payment" element={<MakePayment />} />
        <Route path="/fee/academic-year" element={<AcademicsYear />} />
        <Route path="/fee/fee-refund" element={<FeeRefund />} />
        <Route path="/fee/reports" element={<Reports />} />
        <Route path="/fee/push-notifications" element={<PushNotifications />} />
      </Route>
      <Route path="/fee/student-fee-details" element={<StudentFeeDetails />} />
    </>
  );
}
