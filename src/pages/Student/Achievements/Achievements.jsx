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
  // eslint-disable-next-line no-unused-vars
  const [columnsData, setColumns] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const navigate = useNavigate()

  const mockClassData = [
    {
      _id: "1",
      name: "Suryansh Singh",
      idNo: "ST001",
      gender: "Male",
      achievement: "Science Olympiad Gold",
      year: "2023-24",
    },
    {
      _id: "2",
      name: "Ananya Sharma",
      idNo: "ST002",
      gender: "Female",
      achievement: "State Level Swimming",
      year: "2024-25",
    },
  ];

  const columns = [
    { label: "Student Name", key: "name" },
    { label: "Id.No", key: "idNo" },
    { label: "Gender", key: "gender" },
    { label: "Achievement", key: "achievement" },
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
    alert(`Viewing: ${row.name}'s achievement`);
    navigate("/students/achievements/view")
    // Implement navigation or modal view here
  };

  const handleFormSubmit = (formData) => {
    const newEntry = {
      _id: editingData ? editingData._id : Date.now().toString(),
      name: formData.studentName,
      idNo: formData.studentIdNo,
      gender: formData.gender || "N/A",
      achievement: formData.achievement,
      year: selectedYear || "2024-25",
    };

    if (editingData) {
      setTableData((prev) =>
        prev.map((item) =>
          item._id === editingData._id ? newEntry : item
        )
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
    setTableData(mockClassData); // Load initial mock data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredData = tableData.filter((student) => {
    const matchesSearch = Object.values(student)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear ? student.year === selectedYear : true;
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
            <FaPlus className="" />
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
              name: "studentIdNo",
              label: "Student Id No.",
              type: "text",
              placeholder: "Student Id No.",
              required: true,
            },
            {
              name: "studentName",
              label: "Name",
              type: "text",
              placeholder: "Name",
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
              name: "className",
              label: "Class",
              type: "text",
              placeholder: "Enter class name",
              required: true,
            },
            {
              name: "section",
              label: "Section",
              type: "text",
              placeholder: "Enter section",
              required: true,
            },
            {
              name: "stream",
              label: "Stream",
              type: "text",
              placeholder: "Enter stream",
              required: true,
            },
            {
              name: "achievement",
              label: "Achievement",
              type: "text",
              placeholder: "Enter achievement title",
              required: true,
            },
            {
              name: "description",
              label: "Description",
              type: "textarea",
              placeholder: "Enter description",
              required: false,
            },
          ]}
        />
      )}
    </div>
  );
}
