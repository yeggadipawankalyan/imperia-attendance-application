import { useState } from "react";
import DataTable from "../../../components/Table/DataTable";
import ColumnVisibilityToggler from "../../../components/ColumnVisibilityToggler/ColumnVisibilityToggler";
import SearchInput from "../../../components/SearchInput/SearchInput";
import AcademicYearDropdown from "../../../components/AcademicYearDropdown/AcademicYearDropdown";
import StatusBadge from "../../../components/StatusBadge/StatusBadge";
import SelectedFilters from "../../../components/FilterSelector/SelectedFilters";

export default function Faculty() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState(""); // For academic year

  const columns = [
    { label: "Employee Name", key: "name" },
    { label: "Id.No", key: "idNo" },
    { label: "Gender", key: "gender" },
    {label: "Subject", key: "subject"},
    {label: "Class Allocation", key: "classAllocation"},
    {
      label: "Status",
      key: "status",
      render: (val) => <StatusBadge status={val} />,
    },
  ];

  const [visibleColumns, setVisibleColumns] = useState(
    columns.map((col) => col.key)
  );

  const handleToggleColumn = (key) => {
    setVisibleColumns((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const filteredColumns = columns.filter((col) =>
    visibleColumns.includes(col.key)
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Sample student data with academic years
  const employeeData = [
  ];

  // Filter data by search and academic year
  const filteredData = employeeData.filter((student) => {
    const matchesSearch = Object.values(student)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear ? student.year === selectedYear : true;
    return matchesSearch && matchesYear;
  });

  const [filters, setFilters] = useState({
    Class: "Class 1",
    Section: "A",
    Status: "Active",
  });

  const handleRemove = (key) => {
    const updated = { ...filters };
    delete updated[key];
    setFilters(updated);
  };

  return (
    <>
      <div className="d-flex justify-content-between p-1">
        <div className="d-flex mt-1">
          <ColumnVisibilityToggler
            columns={columns}
            visibleColumns={visibleColumns}
            onToggle={handleToggleColumn}
          />
        </div>
        <div className="d-flex gap-2">
          <div className="mb-3" style={{ maxWidth: "300px" }}>
            <SearchInput
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              iconColor="#000000"
            />
          </div>
          <AcademicYearDropdown onSelect={setSelectedYear} />
        </div>
      </div>
      <SelectedFilters filters={filters} onRemove={handleRemove} />
      <DataTable columns={filteredColumns} data={filteredData} />
    </>
  );
}
