import { Route } from "react-router-dom";
import StudentLayout from "../../layouts/StudentLayout/StudentLayout";
import Student from "../../pages/Student/Student/Student";
import Attendance from "../../pages/Student/Attendance/Attendance";
import Achievements from "../../pages/Student/Achievements/Achievements";
import ViewAchievements from "../../pages/Student/Achievements/ViewAchievements";
import Results from "../../pages/Student/Results/Results";
import AllClassResult from "../../pages/Student/Results/AllClassResult/AllClassResult";
import StudentResult from "../../pages/Student/Results/AllClassResult/StudentResult/StudentResult";
import Academics from "../../pages/Student/Academics/Academics";

export default function StudentRoutes() {
  return (
    <>
      <Route path="/students" element={<StudentLayout />}>
        <Route index element={<Student />} />
        <Route path="/students/attendance" element={<Attendance />} />
        <Route path="/students/academics" element={<Academics />} />
        <Route path="/students/result" element={<Results />} />
        <Route path="result/class-view" element={<AllClassResult />} />
        <Route path="/students/achievements" element={<Achievements />} />
        <Route path="students/academics" element={<Academics />} />
      </Route>

      <Route path="/students/achievements/view" element={<ViewAchievements />}></Route>
      <Route path="students/result/class-view/student-view" element={<StudentResult />} />
    </>
  );
}
