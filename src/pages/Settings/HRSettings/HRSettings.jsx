import BackButton from "../../../components/BackButton/BackButton";
import CardGrid from "../../../components/CardGrid/CardGrid";

const cardsData = [
  {
    title: "Employee Configuration",
    description: "Create and manage employee departments, categories, and positions.",
    link: "employee-configuration",
  },
  {
    title: "Leave Management",
    description: "Configure leave types, policies, and manage employee leave requests.",
    link: "leave-management",
  },
  {
    title: "Payroll Management",
    description: "Configure payroll settings, manage salary structures, and process employee payroll.",
    link: "payroll-management",
  },
];

export default function HRSettings() {
  return (
    <>
    <div className="d-flex gap-3">
      <BackButton iconPosition="left" path="/settings" className="bg-white shadow-lg"/>
      <h2 className="brinavv-color heading underline-heading">
        HR Settings
      </h2>
    </div>
      <CardGrid cards={cardsData} />
    </>
  );
}
