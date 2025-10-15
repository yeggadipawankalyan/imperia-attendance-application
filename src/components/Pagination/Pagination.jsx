import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxPagesToShow = 3,
  rowsPerPage,
  onRowsPerPageChange,
  rowsPerPageOptions = [5, 10, 25, 50, 100],
}) {
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= maxPagesToShow + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      const left = Math.max(currentPage - 1, 2);
      const right = Math.min(currentPage + 1, totalPages - 1);

      if (left > 2) pages.push("...");
      for (let i = left; i <= right; i++) {
        pages.push(i);
      }
      if (right < totalPages - 1) pages.push("...");

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
      {/* Rows Per Page */}
      <div className="d-flex align-items-center gap-2">
        <label className="mb-0" style={{ fontSize: "14px" }}>
          Rows per page:
        </label>
        <select
          className="form-select form-select-sm"
          style={{ width: "80px" }}
          value={rowsPerPage}
          onChange={(e) => {
            onRowsPerPageChange(Number(e.target.value));
            onPageChange(1); // Reset to first page
          }}
        >
          {rowsPerPageOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Pagination Buttons */}
      <div
        className="d-flex gap-2 align-items-center flex-wrap justify-content-end"
        style={{
          padding: "8px 12px",
          borderRadius: "10px",
        }}
      >
        <button
          className="btn btn-light btn-sm rounded-2 p-2 px-3"
          onClick={() => handleClick(1)}
          disabled={currentPage === 1}
          style={{ boxShadow: "none" }}
        >
          <FiChevronsLeft />
        </button>

        <button
          className="btn btn-light btn-sm rounded-2 p-2 px-3"
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ boxShadow: "none" }}
        >
          <FiChevronLeft />
        </button>

        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span
              key={index}
              className="px-2 text-muted"
              style={{ fontSize: "14px" }}
            >
              ...
            </span>
          ) : (
            <button
              key={index}
              className={`btn btn-sm rounded-2 p-2 px-3 ${
                currentPage === page ? "btn-primary text-white" : "btn-light"
              }`}
              onClick={() => handleClick(page)}
              style={{ boxShadow: "none", minWidth: "34px" }}
            >
              {page}
            </button>
          )
        )}

        <button
          className="btn btn-light btn-sm rounded-2 p-2 px-3"
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ boxShadow: "none" }}
        >
          <FiChevronRight />
        </button>

        <button
          className="btn btn-light btn-sm rounded-2 p-2 px-3"
          onClick={() => handleClick(totalPages)}
          disabled={currentPage === totalPages}
          style={{ boxShadow: "none" }}
        >
          <FiChevronsRight />
        </button>
      </div>
    </div>
  );
}
