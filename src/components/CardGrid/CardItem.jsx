import { Link } from "react-router-dom";
import "./CardGrid.css";

export default function CardItem({ title, description, link, color = "#8b0000" }) {
  return (
    <Link to={link} className="card custom-card text-decoration-none text-dark">
      <div className="card-body position-relative">
        <h5 className="card-title fw-bold" style={{ color }}>{title}</h5>
        <p className="card-text">{description}</p>
        <span className="view-more">View more &gt;</span>
      </div>
    </Link>
  );
}
