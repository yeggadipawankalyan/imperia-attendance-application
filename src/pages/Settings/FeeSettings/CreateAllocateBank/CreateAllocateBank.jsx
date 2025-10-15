
import { useState } from "react";
import DynamicFormModal from "../../../../components/Modals/ClassModal/DynamicFormModal";
import DataTable from "../../../../components/Table/DataTable";
import MyButton from "../../../../components/Button/Button";
import StatusBadge from "../../../../components/StatusBadge/StatusBadge";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export default function CreateAllocateBank() {
  const [showModal, setShowModal] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const [tableData, setTableData] = useState([
    { id: 1, bankName: "HDFC", isActive: true },
    { id: 2, bankName: "ICIC", isActive: true },
    { id: 3, bankName: "HDFC", isActive: true },
    { id: 4, bankName: "HDFC", isActive: true },
  ]);

  const handleEdit = (row) => {
    setEditingData(row);
    setShowModal(true);
  };

  const handleDelete = (row) => {
    setTableData((prev) => prev.filter((item) => item.id !== row.id));
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

  const columnsData = [
    // { label: "#", key: "id" },
    { label: "Bank", key: "bankName" },
    {
      label: "Status",
      key: "isActive",
      render: (val) => <StatusBadge status={val} />,
    },
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

  return (
    <>
     <h2 className="mb-2 brinavv-color underline-heading heading">Create & Allocate Bank</h2>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <MyButton active={true} onClick={handleAddClick}>
          + Add New Bank
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
        title={editingData ? "Edit Bank" : "Add Bank"}
        submitLabel={editingData ? "Update Bank" : "Submit"}
        initialData={editingData}
        fields={[
          {
            name: "bankName",
            label: "Bank",
            type: "text",
            placeholder: "Enter Bank Name",
            required: true,
          },
          {
            name: "accountNo",
            label: "Account No",
            type: "text",
            placeholder: "Enter Account No",
            required: true,
          },
          {
            name: "ifscCode",
            label: "IFSC Code",
            type: "text",
            placeholder: "Enter IFSC Code",
            required: true,
          },
          {
            name: "branch",
            label: "Branch",
            type: "text",
            placeholder: "Enter The Branch",
            required: true,
          },
          {
            name: "isActive",
            label: "Active",
            type: "checkbox",
          },
        ]}
      />
    </>
  );
}