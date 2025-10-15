import { useState, useEffect } from "react";
import BackButton from "../../../components/BackButton/BackButton";
import DataTable from "../../../components/Table/DataTable";
import { BsDownload } from "react-icons/bs";
import { FaEye, FaPlus } from "react-icons/fa";
import SearchInput from "../../../components/SearchInput/SearchInput";
import AcademicYearDropdown from "../../../components/AcademicYearDropdown/AcademicYearDropdown";
import MyButton from "../../../components/Button/Button";
import DynamicFormModal from "../../../components/Modals/ClassModal/DynamicFormModal";

export default function ViewAchievements() {
  const [selectedYear, setSelectedYear] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        achievementName: "Employee of the Year",
        type: "Performance",
        description: "Awarded for outstanding contributions in 2023.",
        year: "2023-24",
      },
      {
        id: 2,
        achievementName: "Best Innovator",
        type: "Innovation",
        description: "Recognized for innovative teaching techniques.",
        year: "2024-25",
      },
    ];
    setTableData(mockData);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleFormSubmit = (formData) => {
    const newEntry = {
      ...formData,
      id: tableData.length + 1,
      achievementName: formData.achievement,
      type: "N/A",
      description: formData.description,
      year: selectedYear || "2024-25",
    };
    setTableData((prev) => [...prev, newEntry]);
    setShowModal(false);
  };

  const handleView = (row) => {
    alert(`Viewing achievement: ${row.achievementName}`);
  };

  const handleActions = (row) => (
    <div className="d-flex gap-2">
      <FaEye
        style={{ cursor: "pointer" }}
        onClick={() => handleView(row)}
        title="View"
        className="icon-size"
      />
      <BsDownload
        style={{ cursor: "pointer" }}
        onClick={() => alert("Certificate Downloaded")}
        title="Download"
        className="icon-size"
      />
    </div>
  );

  const tableColumns = [
    { label: "Achievement Name", key: "achievementName" },
    { label: "Type", key: "type" },
    { label: "Description", key: "description" },
  ];

  const filteredData = tableData.filter((employee) => {
    const matchesSearch = Object.values(employee)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear ? employee.year === selectedYear : true;
    return matchesSearch && matchesYear;
  });

  return (
    <>
      <div className="d-flex gap-3 mb-3">
        <BackButton
          iconPosition="left"
          path="/faculty/achievements"
          className="bg-white shadow-lg"
        />
        <h2 className="brinavv-color heading letter-spacing">Achievements</h2>
      </div>

      <div className="d-flex justify-content-end gap-2">
        <div>
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

      <div className="mt-3">
        <span className="text-size brinavv-color">Employee No. :</span>
        <span className="text-size text-secondary">EMP1002</span>
        <br />
        <span className="text-size brinavv-color">Name :</span>
        <span className="text-size text-secondary">Rahul Sharma</span>
        <br />
        <span className="text-size brinavv-color">Department :</span>
        <span className="text-size text-secondary">Mathematics</span>
        <br />
        <span className="text-size brinavv-color">Stream :</span>
        <span className="text-size text-secondary">IIT Foundation</span>
        <br />
      </div>

      <DataTable
        columns={tableColumns}
        actions={handleActions}
        data={filteredData}
      />

      {showModal && (
        <DynamicFormModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          onSubmit={handleFormSubmit}
          title="Add Achievement"
          submitLabel="Add Achievement"
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
              name: "department",
              label: "Department",
              type: "text",
              placeholder: "Enter department",
              required: true,
            },
            {
              name: "designation",
              label: "Designation",
              type: "text",
              placeholder: "Enter designation",
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
    </>
  );
}
