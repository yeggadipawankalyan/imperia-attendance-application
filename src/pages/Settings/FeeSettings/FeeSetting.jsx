import CardGrid from "../../../components/CardGrid/CardGrid";

const cardsData = [
  {
    title: "Create & Allocate Bank",
    description: "Create Bank and assign to the fees collection",
    link: "create-allocate-bank",
  },
  {
    title: "Create Fees",
    description: "Create Fee categories and update the fees",
    link: "create-fees",
  },
  {
    title: "Discounts",
    description: "Create and manage timetable allocations.",
    link: "discounts",
  },
  // {
  //   title: "Create the late Fees",
  //   description: "Create and edit class timing sets",
  //   link: "create-late-fees",
  // },
  // {
  //   title: "Create the Refund",
  //   description: "Set weekdays and class timing sets for each batch",
  //   link: "create-refund",
  // },
  // {
  //   title: "Manage timetables",
  //   description: "Create and manage timetable allocations.",
  //   link: "manage-timetables",
  // },
  // {
  //   title: "Add Lessons/add subject content",
  //   description: "Create and edit class timing sets",
  //   link: "add-lessons-subject-content",
  // },
];

export default function FeeSettings() {
  return (
    <>
      <h2 className="brinavv-color heading underline-heading">
        Fee Settings
      </h2>
      <CardGrid cards={cardsData} />
    </>
  );
}
