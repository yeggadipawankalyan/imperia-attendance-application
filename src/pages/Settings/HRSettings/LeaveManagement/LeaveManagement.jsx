import CardGrid from "../../../../components/CardGrid/CardGrid";

const cardsData = [
  {
    title: "Create Leaves & Group them",
    description: "Add and manage employee leave types and Group the leaves",
    link: "leaves-groups",
  },
  {
    title: "Leave Configuration",
    description: "Configure the leave year, credit method and credit date to use the auto-reset feature",
    link: "",
  },
];

export default function LeaveManagement() {
  return (
    <>
      <h2 className="brinavv-color heading underline-heading">
        Leave Management
      </h2>
      <CardGrid cards={cardsData} />
    </>
  );
}
