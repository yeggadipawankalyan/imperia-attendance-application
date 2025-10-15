import { useLocation, Link } from "react-router-dom";
// import PropTypes from "prop-types";

export default function Breadcrumbs({ baseLabel = "Home", basePath = "/" }) {
  const location = useLocation();

  const pathSegments = location.pathname
    .replace(basePath, "") // Remove base path from full path
    .split("/")
    .filter((segment) => segment);

  return (
    <nav aria-label="breadcrumb mt-0">
      <ol className="breadcrumb">
        {/* Custom Base */}
        <li className="breadcrumb-item">
          <Link to={basePath}>{baseLabel}</Link>
        </li>

        {/* Remaining Dynamic Segments */}
        {pathSegments.map((segment, index) => {
          const fullPath =
            basePath +
            "/" +
            pathSegments.slice(0, index + 1).join("/");

          const isLast = index === pathSegments.length - 1;
          const label = decodeURIComponent(segment)
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <li
              key={fullPath}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
              {...(isLast ? { "aria-current": "page" } : {})}
            >
              {isLast ? label : <Link to={fullPath}>{label}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// Breadcrumbs.propTypes = {
//   baseLabel: PropTypes.string,
//   basePath: PropTypes.string,
// };
