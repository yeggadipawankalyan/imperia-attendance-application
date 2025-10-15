import CardGrid from "../../../../components/CardGrid/CardGrid";

const cardsData = [
  {
    title: "Create Discount",
    description: "Create Bank and assign to the fees collection",
    link: "create-discount",
  },
  {
    title: "Create Reason for Flat discount",
    description: "Create Fee categories and update the fees",
    link: "create-reason-flat-discount",
  },
];

export default function Discounts() {
  return (
    <>
      <h2 className="brinavv-color heading underline-heading">
        Discounts
      </h2>
      <CardGrid cards={cardsData} />
    </>
  );
}
