import { Route } from "react-router-dom";
import SettingLayout from '../../layouts/SettingsLayout/SettingLayout';
import AcademicsSettings from '../../pages/Settings/Academics Management/AcademicsSettings';
import Settings from "../../pages/Settings/Settings";
import ClassStream from "../../pages/Settings/Academics Management/ClassStream/ClassStream";
import UpdateStremsClasses from "../../pages/Settings/Academics Management/UpdateStreamsClasses/UpdateStremsClasses";
import HRSettings from "../../pages/Settings/HRSettings/HRSettings";
import EmployeeConfig from "../../pages/Settings/HRSettings/EmployeeConfig/EmployeeConfig";
import LeaveManagement from "../../pages/Settings/HRSettings/LeaveManagement/LeaveManagement";
import LeavesGroups from "../../pages/Settings/HRSettings/LeaveManagement/LeavesGroup/LeavesGroup";
import LeaveForm from "../../pages/Settings/HRSettings/LeaveManagement/LeavesGroup/LeaveForm";
import FeeSettings from "../../pages/Settings/FeeSettings/FeeSetting";
import CreateAllocateBank from "../../pages/Settings/FeeSettings/CreateAllocateBank/CreateAllocateBank";
import CreateFees from "../../pages/Settings/FeeSettings/CreateFees/CreateFees";
import Discounts from "../../pages/Settings/FeeSettings/Discounts/Discounts";
import TuitionFee from "../../pages/Settings/FeeSettings/CreateFees/TuitionFee";
import ManageTimeTable from "../../pages/Settings/Academics Management/ManageTimeTable/ManageTimeTable";
import ManageClassTimings from "../../pages/Settings/Academics Management/ManageTimeTable/ManageClassTimings";
import ExamSettings from "../../pages/Settings/ExamSettings/ExamSettings";
import CreateExam from "../../pages/Settings/ExamSettings/CreateExams/CreateExam";
import AddExamShedule from "../../pages/Settings/ExamSettings/Add Exam Shedule/AddExamShedule";
import AssignExamShedule from "../../pages/Settings/ExamSettings/Add Exam Shedule/Assign Exam Shedule/AssignExamShedule";
import AssignSchedule from "../../pages/Settings/ExamSettings/Add Exam Shedule/Assign Exam Shedule/Assign Schedule/AssignSchedule";
import AllocatedScheduleView from "../../pages/Settings/ExamSettings/Add Exam Shedule/Allocated Schedule View/AllocatedScheduleView";
import AssignExam from "../../pages/Settings/ExamSettings/Add Exam Shedule/Assign Exam/AssignExam";
import AddRooms from "../../pages/Settings/ExamSettings/AddRooms/AddRooms";
import OthersFee from "../../pages/Settings/FeeSettings/CreateFees/OthersFee";
import ViewGroup from "../../pages/Settings/HRSettings/LeaveManagement/LeavesGroup/Groups/ViewGroup";
import AssignLG from "../../pages/Settings/HRSettings/LeaveManagement/LeavesGroup/AssignLG/AssignLG";
import PayrollManagement from "../../pages/Settings/HRSettings/PayrollManagement/PayrollManagement";
import PayrollCategory from "../../pages/Settings/HRSettings/PayrollManagement/PayrollCategory/PayrollCategory";
import CreatePayrollCategory from "../../pages/Settings/HRSettings/PayrollManagement/PayrollCategory/CreatePayrollCategory";
import PayrollGroup from "../../pages/Settings/HRSettings/PayrollManagement/PayrollCategory/PayrollGroup";

import AddCourseContent from "../../pages/Settings/Academics Management/AddCourseContent/AddCourseContent";
import IndividualClassContent from "../../pages/Settings/Academics Management/AddCourseContent/IndividualClassContent/IndividualClassContent";
import AssignSubjects from "../../pages/Settings/Academics Management/AddCourseContent/IndividualClassContent/AssignSubjects/AssignSubjects";
import AddSubjectContent from "../../pages/Settings/Academics Management/AddCourseContent/IndividualClassContent/AssignSubjects/AddSubjectContent/AddSubjectContent";

export default function SettingRoutes() {
  return (
    <>
      <Route path="/settings" element={<SettingLayout />}>
        <Route index element={<Settings />} />

        {/*Academics Routes*/}
        <Route path="academics" element={<AcademicsSettings />} />
        <Route path="academics/create-class-stream" element={<ClassStream />} />
        <Route path="academics/update-streams-classes" element={<UpdateStremsClasses />} />
        <Route path="academics/add-course-content" element={<AddCourseContent />} />
        <Route path="academics/add-course-content/class-content" element={<IndividualClassContent />} />
        <Route path="academics/add-course-content/class-content/assign-subjects" element={<AssignSubjects />} />
        <Route path="academics/add-course-content/class-content/assign-subjects/add-subject-content" element={<AddSubjectContent />} />
        <Route path="academics/manage-time-table" element={<ManageTimeTable />} />
        <Route path="academics/manage-class-timings" element={<ManageClassTimings />} />

       {/*HR Routes*/}
       <Route path="hr-settings" element={<HRSettings />} />
       <Route path="hr-settings/employee-configuration" element={<EmployeeConfig />} />
       <Route path="hr-settings/leave-management" element={<LeaveManagement />} />
       <Route path="hr-settings/leave-management/leaves-groups" element={<LeavesGroups />} />
       <Route path="hr-settings/leave-management/leaves-groups/create-leave" element={<LeaveForm />} />
       <Route path="hr-settings/leave-management/leaves-groups/view-group" element={<ViewGroup />} />
       <Route path="hr-settings/leave-management/leaves-groups/assign-leave-group" element={<AssignLG />} />
       <Route path="hr-settings/payroll-management" element={<PayrollManagement />} />
       <Route path="hr-settings/payroll-management/payroll-category" element={<PayrollCategory />} />
       <Route path="hr-settings/payroll-management/payroll-category/create-payroll-category" element={<CreatePayrollCategory />} />
       <Route path="hr-settings/payroll-management/payroll-category/payroll-group" element={<PayrollGroup />} />

       {/* Fee Routes */}
       <Route path="fee-settings" element={<FeeSettings />} />
       <Route path="fee-settings/create-allocate-bank" element={<CreateAllocateBank />} />
       <Route path="fee-settings/create-fees" element={<CreateFees />} />
       <Route path="fee-settings/discounts" element={<Discounts />} />
       <Route path="fee-settings/create-fees/tuition-fee" element={<TuitionFee />} />
       <Route path="fee-settings/create-fees/others-fee" element={<OthersFee />} />
        {/*HR Routes*/}
        <Route path="hr-settings" element={<HRSettings />} />
        <Route path="hr-settings/employee-configuration" element={<EmployeeConfig />} />

        {/*Exam Settings*/}
        <Route path="exam-settings" element={<ExamSettings />} />
        <Route path="exam-settings/create-exams" element={<CreateExam />} />
        <Route path="exam-settings/add-exams-schedule" element={<AddExamShedule />} />
        <Route path="exam-settings/add-exams-schedule/assign-exam-schedule/:examSchedule" element={<AssignExamShedule />} />
        <Route path="exam-settings/add-exams-schedule/assign-exam-schedule/:examSchedule/assign-schedule" element={<AssignSchedule />} />
        <Route path="exam-settings/add-exams-schedule/assign-exam-schedule/:examSchedule/allocated-view" element={<AllocatedScheduleView />}/>
        <Route path="exam-settings/add-exams-schedule/assign-exam-schedule/:examSchedule/assign-exam" element={<AssignExam />} />
        <Route path="exam-settings/add-rooms" element={<AddRooms />} />
      </Route>

    </>
  );
}
