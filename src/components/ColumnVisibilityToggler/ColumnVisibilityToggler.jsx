// components/ColumnVisibilityToggler.jsx
import { Dropdown } from "react-bootstrap";

export default function ColumnVisibilityToggler({
  columns = [],
  visibleColumns = [],
  onToggle = () => {},
}) {
  return (
    <Dropdown align="end">
      <Dropdown.Toggle className=" rounded-2 secondary-color border-0 text-size text-black" size="sm">
        Columns
      </Dropdown.Toggle>

      <Dropdown.Menu className="p-2" style={{ minWidth: "200px" }}>
        {columns.map((col) => (
          <div key={col.key} className="form-check">
            <input
              className="form-check-input input-focus"
              type="checkbox"
              id={`toggle-${col.key}`}
              checked={visibleColumns.includes(col.key)}
              onChange={() => onToggle(col.key)}
            />
            <label className="form-check-label  ms-1" htmlFor={`toggle-${col.key}`}>
              {col.label}
            </label>
          </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
