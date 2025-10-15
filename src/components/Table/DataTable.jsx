import { useState, useMemo } from "react";
import "./DataTable.css";
import CustomCheckbox from "../CustomCheckBox/CustomCheckBox";
import Pagination from "../Pagination/Pagination";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";

export default function DataTable({
  columns = [],
  data = [],
  actions = null,
  pagination = true,
  showCheckBox = false,
  showRadio = false, // 👈 new prop for single selection
  onRowSelect = () => {},
}) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState([]);

  // Update parent whenever selection changes
  const updateSelection = (updated) => {
    setSelectedRows(updated);
    onRowSelect(updated);
  };

  const sortedData = useMemo(() => {
    let sortable = [...data];
    if (sortConfig.key) {
      sortable.sort((a, b) => {
        const valA = a[sortConfig.key];
        const valB = b[sortConfig.key];
        if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
        if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return sortable;
  }, [data, sortConfig]);

  const paginatedData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="table-responsive">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="fw-bold">
          Showing {paginatedData.length} of {sortedData.length} items
        </span>
      </div>

      <div className="table-radius border border-secondary overflow-hidden shadow-sm">
        <table className="table mb-0">
          <thead className="table-secondary">
            <tr className="table-header">
              {showCheckBox && <th>Select</th>}
              {showRadio && <th>Select</th>}
              <th>#</th>
              {columns.map((col, idx) => (
                <th className="" key={idx} style={{ userSelect: "none" }}>
                  <span className="d-inline-flex align-items-center gap-1 justify-content-center">
                    {col.label}
                    <HiOutlineArrowsUpDown
                      onClick={() => handleSort(col.key)}
                      style={{
                        transition: "transform 0.2s",
                        transform:
                          sortConfig.key === col.key &&
                          sortConfig.direction === "asc"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        opacity: sortConfig.key === col.key ? 1 : 0.4,
                      }}
                    />
                  </span>
                </th>
              ))}
              {actions && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, i) => (
                <tr key={i} className="table-row">
                  {showCheckBox && (
                    <td>
                      <CustomCheckbox
                        checked={selectedRows.includes(row.id)}
                        onChange={(e) => {
                          const updated = e.target.checked
                            ? [...selectedRows, row.id]
                            : selectedRows.filter((id) => id !== row.id);
                          updateSelection(updated);
                        }}
                      />
                    </td>
                  )}

                  {showRadio && (
                    <td>
                      <input
                        className="form-check-input input-focus"
                        type="radio"
                        name="rowRadio" // 👈 ensures only one can be selected
                        checked={selectedRows[0] === row.id}
                        onChange={() => updateSelection([row.id])}
                      />
                    </td>
                  )}

                  <td>{(currentPage - 1) * rowsPerPage + i + 1}</td>
                  {columns.map((col, idx) => (
                    <td key={idx}>
                      {col.render
                        ? col.render(row[col.key], row)
                        : row[col.key] ?? "-"}
                    </td>
                  ))}
                  {actions && <td>{actions(row)}</td>}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={
                    columns.length + 2 + (showCheckBox || showRadio ? 1 : 0)
                  }
                  className="text-center"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="d-flex flex-wrap justify-content-center align-items-center mt-3">
        {pagination && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            rowsPerPage={rowsPerPage}
            onPageChange={setCurrentPage}
            onRowsPerPageChange={(val) => {
              setRowsPerPage(val);
              setCurrentPage(1);
            }}
          />
        )}
      </div>
    </div>
  );
}
