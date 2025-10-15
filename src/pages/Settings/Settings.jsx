// import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import CardGrid from '../../components/CardGrid/CardGrid';


const cardsData = [
  {
    title: "Academics Management",
    description: "Manage academic settings, including classes, streams, and subjects.",
    link: "academics",
  },
  {
      title: "HR Settings",
      description: "Set up and maintain Human Resources",
      link: "hr-settings",
    },
    {
      title: "Fee Settings",
      description: "Configure and manage fee structures, discounts, and payment options",
      link: "fee-settings"
    },
  //   title: "HR Settings",
  //   description: "Set up and maintain Human Resources",
  //   link: "hr-settings",
  // },
  {
    title: "Exam Branch",
    description: "Configure and manage exam-related settings and schedules.",
    link: "exam-settings",
  },
  //   {
  //     title: "Update the Streams to Classes",
  //     description: "Set Weekdays and class timing sets for each batch",
  //     link: "/settingD/updatestreamclasses",
  //   },
  //   {
  //     title: "Manage class timing set",
  //     description: "Create and edit class timing sets",
  //     link: "/settingD/manageclt",
  //   },
  //   {
  //     title: "Set weekdays & class timing setting",
  //     description: "Set weekdays and class timing sets for each batch",
  //     link: "/settingD/WeekdayTiming",
  //   },
  //   {
  //     title: "Manage time tables",
  //     description: "Create and manage timetable allocations.",
  //     link: "/settingD/managetimetable_oneday",
  //   },
  //   {
  //     title: "Add Lessons/add Subject Content",
  //     description: "Create and edit class timing sets",
  //     link: "/settingD/AddLessonSubjectContent",
  //   },
  //   {
  //     title: "Create Subjects And Assign Employee",
  //     description: "Create and edit class timing sets.",
  //     link: "/settingD/create-subjects-assign-faculty",
  //   }
];

export default function Settings() {
  return (
    <>
      <h1 className='brinavv-color heading underline-heading'>Settings</h1>
      {/* <div
  className="p-1 d-flex rounded-3 flex-wrap gap-2"
  style={{ width: "fit-content", backgroundColor: "#f3f4f6" }}
>
  <div className="flex-fill text-center px-3 py-2 rounded-1 border border-2 bg-danger text-white text-wrap" style={{ width: "200px" }}>
    Department
  </div>
  <div className="flex-fill text-center px-3 py-2 rounded-1 border border-1 bg-white text-dark" style={{ width: "200px" }}>
    Class
  </div>
  <div className="flex-fill text-center px-3 py-2 rounded-1 border border-1 bg-white text-dark" style={{ width: "200px" }}>
    Subject
  </div>
</div> */}
      <CardGrid cards={cardsData} />
    </>
  )
}
