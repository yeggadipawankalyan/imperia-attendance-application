import { Route } from "react-router-dom";
import AdministrationLayout from "../../layouts/AdministrationLayout/AdministrationLayout";
import Dashboard from "../../pages/Administration/Administration/Dashboard/Administration";
import Admissions from "../../pages/Administration/Admissions/Admissions";
import Enquires from "../../pages/Administration/Enquires/Enquires";
import Visitors from "../../pages/Administration/Visitors/Visitors";
import Transfer from "../../pages/Administration/Transfer/Transfer";
import Reports from "../../pages/Administration/Reports/Reports";

export default function AdministrationRoutes() {
  return (
    <>
      <Route path="/administration" element={<AdministrationLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="enquires" element={<Enquires />} />
        <Route path="visitors" element={<Visitors />} />
        <Route path="transfer" element={<Transfer />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </>
  );
}
