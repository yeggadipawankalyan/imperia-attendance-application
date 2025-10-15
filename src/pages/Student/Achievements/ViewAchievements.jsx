import React, { useState, useEffect } from "react";
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

  // Example data loading
  useEffect(() => {
    // Replace this with an actual API call
    const mockData = [
      {
        id: 1,
        achievementName: "Math Olympiad Winner",
        type: "Academic",
        description: "Won gold medal in international math olympiad.",
        year: "2023-24",
      },
      {
        id: 2,
        achievementName: "State Level Cricket",
        type: "Sports",
        description: "Represented school in state level cricket championship.",
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
    // Normally submit to backend here
    const newEntry = {
      ...formData,
      id: tableData.length + 1,
      achievementName: formData.achievement,
      type: "N/A",
      description: formData.description,
      year: selectedYear || "2024-25", // default to current year if none selected
    };
    setTableData((prev) => [...prev, newEntry]);
    setShowModal(false);
  };

  const handleView = (row) => {
    alert(`Viewing achievement: ${row.achievementName}`);
    // Add navigation or modal display logic here
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

  const filteredData = tableData.filter((student) => {
    const matchesSearch = Object.values(student)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear ? student.year === selectedYear : true;
    return matchesSearch && matchesYear;
  });

  return (
    <>
      <div className="d-flex gap-3 mb-3">
        <BackButton
          iconPosition="left"
          path="/students/achievements"
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
          <FaPlus className="" />
        </MyButton>
      </div>
      <div>
        <span className="text-size brinavv-color">Student No. :</span><span className="text-size text-secondary">1002</span>
        <br></br>
        <span className="text-size brinavv-color">Name :</span><span className="text-size text-secondary">Rahul</span>
        <br></br>
        <span className="text-size brinavv-color">Class :</span><span className="text-size text-secondary">5th</span>
        <br></br>
        <span className="text-size brinavv-color">Stream :</span><span className="text-size text-secondary">IIT</span>
        <br></br>
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
    </>
  );
}
