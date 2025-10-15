import { useState } from "react";
import DataTable from "../../../../components/Table/DataTable";
import MyButton from "../../../../components/Button/Button";
import DynamicFormModal from "../../../../components/Modals/ClassModal/DynamicFormModal";
import TabSwitcher from "../../../../components/TabSwitcher/TabSwitcher";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export default function TuitionFee() {
  const [showModal, setShowModal] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const [activeTab, setActiveTab] = useState("tuition");
  const [selectedBank, setSelectedBank] = useState("SBI Bank");
  const [tableData, setTableData] = useState([
    { id: 1, className: "Class 1", general: "30,000.00", iit: "45,0000.00", medico: "55,0000.00" },
    { id: 2, className: "Class 2", general: "30,000.00", iit: "45,0000.00", medico: "55,0000.00" },
    { id: 3, className: "Class 3", general: "30,000.00", iit: "45,0000.00", medico: "55,0000.00" },
    { id: 4, className: "Class 4", general: "30,000.00", iit: "45,0000.00", medico: "55,0000.00" },
    { id: 5, className: "Class 5", general: "30,000.00", iit: "45,0000.00", medico: "55,0000.00" },
    { id: 6, className: "Class 6", general: "30,000.00", iit: "45,0000.00", medico: "55,0000.00" },
    { id: 7, className: "Class 7", general: "30,000.00", iit: "45,0000.00", medico: "55,0000.00" },
    { id: 8, className: "Class 8", general: "30,000.00", iit: "45,0000.00", medico: "55,0000.00" },
    { id: 9, className: "Class 9", general: "30,000.00", iit: "45,0000.00", medico: "55,0000.00" },
    { id: 10, className: "Class 10", general: "30,000.00", iit: "45,0000.00", medico: "55,0000.00" },
  ]);

  const columnsData = [
    // { label: "#", key: "id" },
    { label: "Class", key: "className" },
    { label: "General", key: "general" },
    { label: "IIT", key: "iit" },
    { label: "Medico", key: "medico" },
  ];

  const handleDelete = (row) => {
    setTableData((prev) => prev.filter((item) => item.id !== row.id));
  };


  const handleEdit = (row) => {
    setEditingData(row);
    setShowModal(true);
  };

  const tabOptions = [
    { label: "Tuition Fee", value: "tuition" },
    { label: "Academic Year Fee", value: "academic" },
  ];

  const handleAddClick = () => {
    setEditingData(null);
    setShowModal(true);
  };

  const handleFormSubmit = (data) => {
    if (editingData) {
      setTableData((prev) =>
        prev.map((item) => (item.id === editingData.id ? { ...item, ...data } : item))
      );
    } else {
      setTableData((prev) => [
        ...prev,
        { ...data, id: prev.length ? prev[prev.length - 1].id + 1 : 1 },
      ]);
    }
    setShowModal(false);
  };

  const handleActions = (row) => (
    <div className="d-flex">
      <FaRegEdit
        style={{ cursor: "pointer" }}
        onClick={() => handleEdit(row)}
        title="Edit"
        className="icon-size"
      />
      <RiDeleteBinLine
        style={{ cursor: "pointer" }}
        onClick={() => handleDelete(row)}
        title="Delete"
        className="icon-size"
      />
    </div>
  );

  return (
    <>
      <h2 className="mb-2 brinavv-color underline-heading heading">Create Tuition Fee</h2>
      <TabSwitcher
        tabs={tabOptions}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
        <div style={{ flex: 1 }} />
        <MyButton active={true} onClick={handleAddClick}>
          + Add New Fees
        </MyButton>
      </div>
      <DataTable
        columns={columnsData}
        data={tableData}
        actions={handleActions}
        rowsPerPage={10}
      />
      <DynamicFormModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        onSubmit={handleFormSubmit}
        title={editingData ? "Edit Tuition Fees" : "Add Tuition Fees"}
        submitLabel={editingData ? "Update" : "Submit"}
        initialData={editingData}
        fields={[
          {
            name: "className",
            label: "Class",
            type: "text",
            placeholder: "Class",
            required: true,
            disabled: !!editingData,
          },
          {
            name: "iit",
            label: "IIT Fee",
            type: "text",
            placeholder: "Enter The Fee Amount",
            required: true,
          },
          {
            name: "medico",
            label: "Medico Fee",
            type: "text",
            placeholder: "30,000.00",
            required: true,
          },
          {
            name: "academicYear",
            label: "Academic Year",
            type: "text",
            placeholder: "Enter The Academic Year",
            required: true,
          },
          {
            name: "general",
            label: "General Fee",
            type: "text",
            placeholder: "30,000.00",
            required: true,
          },
        ]}
      />
    </>
  );
}