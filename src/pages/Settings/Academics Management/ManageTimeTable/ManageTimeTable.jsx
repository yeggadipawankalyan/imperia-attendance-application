import { useState } from "react";
import DataTable from "../../../../components/Table/DataTable";
import DynamicFormModal from "../../../../components/Modals/ClassModal/DynamicFormModal";
import MyButton from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../../components/BackButton/BackButton";

export default function ManageTimeTable() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [tableData, setTableData] = useState([
    { id: 1, name: "Timetable" },
    { id: 2, name: "10th Timetable" },
    { id: 3, name: "Timetable" },
    { id: 4, name: "test 1" },
    { id: 5, name: "test 2" },
  ]);

  const columns = [
    { label: "Name", key: "name" },
  ];

  const handleAdd = (formData) => {
    setTableData([...tableData, { id: Date.now(), name: formData.name }]);
  };

  const handleDelete = (id) => {
    setTableData(tableData.filter((row) => row.id !== id));
  };

  const handleActions = (row) => (
    <>
      <span style={{ color: "brown", cursor: "pointer", marginRight: 8 }} onClick={() => navigate("/settings/academics/manage-class-timings")}>View class timings</span>
      /
      <span style={{ color: "brown", cursor: "pointer", marginLeft: 8 }} onClick={() => handleDelete(row.id)}>Delete</span>
    </>
  );

  return (
    <div>
      {/* <h2 className="mb-2 brinavv-color underline-heading heading">Manage class timing sets</h2> */}
      <div className="d-flex gap-3">
      <BackButton iconPosition="left" path="/settings" className="bg-white shadow-lg"/>
      <h2 className="brinavv-color heading underline-heading">
        Manage class timing sets
      </h2>
    </div>
      <div className="d-flex justify-content-end mb-2">
        <MyButton active={true} onClick={() => setShowModal(true)}>
          New
        </MyButton>
      </div>
      <DataTable
        columns={columns}
        data={tableData}
        actions={handleActions}
      />
      <DynamicFormModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        onSubmit={handleAdd}
        title="Manage class timing sets"
        submitLabel="Submit"
        fields={[
          {
            name: "name",
            label: "Name*",
            type: "text",
            placeholder: "Enter",
            required: true,
          },
        ]}
      />
    </div>
  );
}