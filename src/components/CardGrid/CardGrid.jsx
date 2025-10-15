import CardItem from "./CardItem";
import "./CardGrid.css";

export default function CardGrid({  cards = [], color = "#8b0000" }) {
  return (
    <div className="py-2 px-4">
      {/* <div className="section-heading mb-4">
        <h3 className="fw-bold d-inline-block" style={{ color }}>
          {heading}
        </h3>
        <div className="heading-underline" style={{ backgroundColor: color }}></div>
      </div> */}

      <div className="row g-4">
        {cards.map((card, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">
            <CardItem {...card} color={color} />
          </div>
        ))}
      </div>
    </div>
  );
}
