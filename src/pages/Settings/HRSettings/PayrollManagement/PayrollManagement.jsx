import BackButton from "../../../../components/BackButton/BackButton";
import CardGrid from "../../../../components/CardGrid/CardGrid";

const cardsData = [
  {
    title: "Create Payroll Category and Groups",
    description:
      "Set up and manage different payroll categories for your organization.",
    link: "payroll-category",
  },
];

export default function PayrollManagement() {
  return (
    <>
      <div className="d-flex gap-3 ">
        <BackButton
          iconPosition="left"
          path="/settings/hr-settings"
          className="bg-white shadow-lg"
        />
        <h2 className="brinavv-color heading underline-heading">
          Payroll Management
        </h2>
      </div>
      <CardGrid cards={cardsData} />
    </>
  );
}
