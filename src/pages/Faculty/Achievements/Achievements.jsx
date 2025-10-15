import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaPlus } from "react-icons/fa";
import DataTable from "../../../components/Table/DataTable";
import DynamicFormModal from "../../../components/Modals/ClassModal/DynamicFormModal";
import ColumnVisibilityToggler from "../../../components/ColumnVisibilityToggler/ColumnVisibilityToggler";
import SearchInput from "../../../components/SearchInput/SearchInput";
import AcademicYearDropdown from "../../../components/AcademicYearDropdown/AcademicYearDropdown";
import MyButton from "../../../components/Button/Button";

export default function Achievements() {
  const [showModal, setShowModal] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [columnsData, setColumns] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const navigate = useNavigate();

  const mockEmployeeData = [
    {
      _id: "1",
      name: "Rahul Mehta",
      idNo: "EMP001",
      gender: "Male",
      department: "Mathematics",
      subject: "Algebra",
      totalAchievements: 3,
      year: "2023-24",
    },
    {
      _id: "2",
      name: "Neha Sharma",
      idNo: "EMP002",
      gender: "Female",
      department: "Science",
      subject: "Physics",
      totalAchievements: 5,
      year: "2024-25",
    },
  ];

  const columns = [
    { label: "Employee Name", key: "name" },
    { label: "Id.No.", key: "idNo" },
    { label: "Gender", key: "gender" },
    { label: "Department", key: "department" },
    { label: "Subject", key: "subject" },
    { label: "Total Achievements", key: "totalAchievements" },
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

  const handleAddClick = () => {
    setEditingData(null);
    setShowModal(true);
  };

  const handleView = (row) => {
    alert(`Viewing: ${row.name}'s achievements`);
    navigate("/faculty/achievements/view");
  };

  const handleFormSubmit = (formData) => {
    const newEntry = {
      _id: editingData ? editingData._id : Date.now().toString(),
      name: formData.employeeName,
      idNo: formData.employeeIdNo,
      gender: formData.gender || "N/A",
      department: formData.department,
      subject: formData.subject,
      totalAchievements: formData.totalAchievements || 0,
      year: selectedYear || "2024-25",
    };

    if (editingData) {
      setTableData((prev) =>
        prev.map((item) => (item._id === editingData._id ? newEntry : item))
      );
    } else {
      setTableData((prev) => [...prev, newEntry]);
    }

    setShowModal(false);
  };

  const handleActions = (row) => (
    <div className="d-flex gap-2">
      <FaEye
        style={{ cursor: "pointer" }}
        onClick={() => handleView(row)}
        title="View"
        className="icon-size"
      />
    </div>
  );

  useEffect(() => {
    setColumns(columns);
    setTableData(mockEmployeeData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredData = tableData.filter((employee) => {
    const matchesSearch = Object.values(employee)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear ? employee.year === selectedYear : true;
    return matchesSearch && matchesYear;
  });

  return (
    <div>
      <div className="d-flex justify-content-between p-1 mb-3">
        <div>
          <ColumnVisibilityToggler
            columns={columns}
            visibleColumns={visibleColumns}
            onToggle={handleToggleColumn}
          />
        </div>
        <div className="d-flex gap-2 align-items-end">
          <div style={{ maxWidth: "300px" }}>
            <SearchInput
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              iconColor="#000000"
            />
          </div>
          <AcademicYearDropdown onSelect={setSelectedYear} />
          <MyButton active={true} onClick={handleAddClick}>
            <FaPlus />
          </MyButton>
        </div>
      </div>

      <DataTable
        columns={filteredColumns}
        data={filteredData}
        actions={handleActions}
        rowsPerPage={10}
      />

      {showModal && (
        <DynamicFormModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          onSubmit={handleFormSubmit}
          title={editingData ? "Edit Achievement" : "Add Achievement"}
          submitLabel={editingData ? "Update" : "Add Achievement"}
          fields={[
            {
              name: "employeeIdNo",
              label: "Employee Id No.",
              type: "text",
              placeholder: "Employee Id No.",
              required: true,
            },
            {
              name: "employeeName",
              label: "Name",
              type: "text",
              placeholder: "Employee Name",
              required: true,
            },
            {
              name: "gender",
              label: "Gender",
              type: "text",
              placeholder: "Gender",
              required: true,
            },
            {
              name: "department",
              label: "Department",
              type: "text",
              placeholder: "Department",
              required: true,
            },
            {
              name: "subject",
              label: "Subject",
              type: "text",
              placeholder: "Subject",
              required: true,
            },
            {
              name: "totalAchievements",
              label: "Total Achievements",
              type: "textarea",
              placeholder: "Enter total achievements details",
              required: true,
            },
          ]}
        />
      )}
    </div>
  );
}
