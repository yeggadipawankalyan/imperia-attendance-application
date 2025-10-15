import { Route } from "react-router-dom";
import ExamLayout from "../../layouts/ExamLayout/ExamLayout";
import Exams from "../../pages/Exam/Exams/Exams";
import Result from "../../pages/Exam/Result/Result";
import AllClassResult from "../../pages/Exam/Result/CkeckResult/AllClassResult/AllClassResult";
import StudentResult from "../../pages/Exam/Result/CkeckResult/AllClassResult/StudentResult/StudentResult";
import BoardOperations from "../../pages/Exam/Board Operations/BoardOperations";

export default function ExamRoutes() {
  return (
    <>
      <Route path="/exams" element={<ExamLayout />}>
        <Route index element={<Exams />} />
        <Route path="sitting-plan" element={<div>Sitting Plan</div>} />
        <Route path="result" element={<Result />} />
        <Route path="result/class-view" element={<AllClassResult />} />

        <Route path="assign-faculty" element={<div>Assign Faculty</div>} />
        <Route path="board-operations" element={<BoardOperations />} />
      </Route>
      <Route path="exam/result/class-view/student-view" element={<StudentResult />} />
    </>
  )
}