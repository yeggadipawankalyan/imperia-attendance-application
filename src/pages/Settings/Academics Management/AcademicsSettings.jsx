import CardGrid from "../../../components/CardGrid/CardGrid";

const cardsData = [
  {
    title: "Create Class & Stream",
    description: "Create and edit class timing sets",
    link: "create-class-stream",
  },
  {
    title: "Update the Streams to Classes",
    description: "Set Weekdays and class timing sets for each batch",
    link: "update-streams-classes",
  },
  // {
  //   title: "Manage class timing set",
  //   description: "Create and edit class timing sets",
  //   link: "/settingD/manageclt",
  // },
  // {
  //   title: "Set weekdays & class timing setting",
  //   description: "Set weekdays and class timing sets for each batch",
  //   link: "/settingD/WeekdayTiming",
  // },
  // {
  //   title: "Manage time tables",
  //   description: "Create and manage timetable allocations.",
  //   link: "/settingD/managetimetable_oneday",
  // },
  {
    title: "Add Lessons/Add Subject Content",
    description: "Create and edit class timing sets",
    link: "add-course-content",
  },
  {
    title: "Manage time tables",
    description: "Create and manage timetable allocations.",
    link: "manage-time-table",
  },
  // {
  //   title: "Add Lessons/add Subject Content",
  //   description: "Create and edit class timing sets",
  //   link: "/settingD/AddLessonSubjectContent",
  // },
  // {
  //   title: "Create Subjects And Assign Employee",
  //   description: "Create and edit class timing sets.",
  //   link: "/settingD/create-subjects-assign-faculty",
  // },
];

export default function AcademicsSettings() {
  return (
    <>
      <h2 className="brinavv-color heading underline-heading">Academics Management</h2>
      <CardGrid cards={cardsData} />
    </>
  );
}
