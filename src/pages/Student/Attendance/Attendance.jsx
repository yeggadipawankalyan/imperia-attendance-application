import React, { useState } from "react";
import SelectedFilters from "../../../components/FilterSelector/SelectedFilters";
import AcademicYearDropdown from "../../../components/AcademicYearDropdown/AcademicYearDropdown";
import DataTable from "../../../components/Table/DataTable";
import SearchInput from "../../../components/SearchInput/SearchInput";
import ColumnVisibilityToggler from "../../../components/ColumnVisibilityToggler/ColumnVisibilityToggler";
import StatusBadge from "../../../components/StatusBadge/StatusBadge";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Attendance() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState(""); // For academic year

  const columns = [
    { label: "Student Name", key: "name" },
    { label: "Id.No", key: "idNo" },
    { label: "Gender", key: "gender" },
    { label: "Present/Absent", key: "present/absent" },
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
  const studentData = [];

  // Filter data by search and academic year
  const filteredData = studentData.filter((student) => {
    const matchesSearch = Object.values(student)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear ? student.year === selectedYear : true;
    return matchesSearch && matchesYear;
  });

  const [filters, setFilters] = useState({
    Class: "5th",
    Stream: "IIt",
    Section: "A",
  });

  const handleRemove = (key) => {
    const updated = { ...filters };
    delete updated[key];
    setFilters(updated);
  };

   const handleActions = (row) => (
      <div className="d-flex">
        <FaRegEdit
          style={{ cursor: "pointer" }}
          onClick={() => console.log("cc")}
          title="Edit"
          className="icon-size"
        />
        <RiDeleteBinLine
          style={{ cursor: "pointer" }}
          onClick={() => console.log("Delete", row)}
          title="Delete"
          className="icon-size"
        />
      </div>
    );
  return (
    <>
      <div className="d-flex justify-content-between p-1">
        <div className="d-flex">
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
      <DataTable columns={filteredColumns} data={filteredData} actions={handleActions} />
    </>
  );
}
