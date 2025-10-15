import { Route } from "react-router-dom";
import EmployeeLayout from "../../layouts/EmployeeLayout/EmployeeLayout";
import Faculty from "../../pages/Faculty/Faculty/Faculty";
import Attendance from "../../pages/Faculty/Attendance/Attendance";
import Academics from "../../pages/Faculty/Academics/Academics";
import Achievements from "../../pages/Faculty/Achievements/Achievements";
import ViewAchievements from "../../pages/Faculty/Achievements/ViewAchievements";


export default function EmployeeRoutes() {
  return (
    <>
      <Route path="/faculty" element={<EmployeeLayout />}>
      <Route index element={<Faculty />}/>
      <Route path="/faculty/attendance" element={<Attendance/>} />
      <Route path="/faculty/academics" element={<Academics />} />
      <Route path="/faculty/achievements" element={<Achievements />} />
        {/* Add more employee routes as needed */}
      </Route>
      <Route path="/faculty/achievements/view" element={<ViewAchievements />} />
    </>
  );
}