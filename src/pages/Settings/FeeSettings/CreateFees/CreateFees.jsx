import CardGrid from "../../../../components/CardGrid/CardGrid";

const cardsData = [
  {
    title: "Tuition fee",
    description: "Create Bank and assign to the fees collection",
    link: "tuition-fee",
  },
  {
    title: "Other Fee's",
    description: "Create Fee categories and update the fees",
    link: "others-fee",
  },
  {
    title: "Create Term shedule",
    description: "Create the term schedule according to the Academic",
    link: "create-term-shedule",
  },
];

export default function CreateFees() {
  return (
    <>
      <h2 className="brinavv-color heading underline-heading">
        Create Fee
      </h2>
      <CardGrid cards={cardsData} />
    </>
  );
}
