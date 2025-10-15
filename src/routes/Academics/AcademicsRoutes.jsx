import { Route } from "react-router-dom";
import AcademicLayout from "../../layouts/AcademicLayout/AcademicLayout";
import Class from "../../pages/Academics/Class/Class";
import AssignSubject from "../../pages/Academics/AssignSubject/AssignSubject";
import TimeTable from "../../pages/Academics/TimeTable/TimeTable";
import SwapTimeTable from "../../pages/Academics/SwapTimeTable/SwapTimeTable";
import LessonPlan from "../../pages/Academics/LessonPlan/LessonPlan";
import IndividualClass from "../../pages/Academics/LessonPlan/IndividualClass/IndividualClass";
import AddSubjectContent from "../../pages/Academics/LessonPlan/IndividualClass/AddSubjectContent/AddSubjectContent";
import Results from "../../pages/Academics/Results/Results";
import ShuffleSection from "../../pages/Academics/ShuffleSection/ShuffleSection";
import IndividualSection from "../../pages/Academics/ShuffleSection/IndividualSection/IndividualSection";

export default function AcademicsRoutes() {
  return (
    <>
      <Route path="/academic" element={<AcademicLayout />}>
        <Route index element={<Class />} />
        <Route path="/academic/assign-subject" element={<AssignSubject />} />
        <Route path="/academic/time-table" element={<TimeTable />} />
        <Route path="/academic/swap-time-table" element={<SwapTimeTable />} />
        <Route path="/academic/lesson-plan" element={<LessonPlan />} />
        <Route path="/academic/results" element={<Results />} />
        <Route path="/academic/shuffle-section" element={<ShuffleSection />} />
        <Route path="/academic/shuffle-section/individual-section" element={<IndividualSection />} />
      </Route>
      <Route path="/academic/lesson-plan/individual-class" element={<IndividualClass />} />
      <Route path="/academic/lesson-plan/individual-class/add-subject-content" element={<AddSubjectContent />} />
    </>
  )
}
