import { Route } from "react-router-dom";
import ViewAchievements from "../../pages/Student/Achievements/ViewAchievements";
import TransportLayout from "../../layouts/TransportLayout.jsx/TransportLayout";
import DriverForm from "../../pages/Transport/DriverForm";
import Drivers from "../../pages/Transport/Drivers/Drivers";
import Routes from "../../pages/Transport/Routes/Route";
import Vehicles from "../../pages/Transport/Vehicles/Vehicles";
import TransportFees from "../../pages/Transport/TransportFees/TransportFees";
import StudentTransport from "../../pages/Transport/StudentTransport/StudentTransport";

export default function TransportRoutes() {
  return (
    <>
      <Route path="/transport" element={<TransportLayout />}>
        <Route index element={<Drivers />} />
        <Route path="/transport/routes" element={<Routes />} />
        <Route path="/transport/vehicles" element={<Vehicles />} />
        <Route path="/transport/transportFees" element={<TransportFees />} />
        <Route path="/transport/studentTransport" element={<StudentTransport />} />
      </Route>
        <Route path="/transport/driverForm" element={<DriverForm />} />
    </>
  );
}
