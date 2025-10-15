import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import DataTable from "../../../../components/Table/DataTable";
import TabSwitcher from "../../../../components/TabSwitcher/TabSwitcher";
import DynamicFormModal from "../../../../components/Modals/ClassModal/DynamicFormModal";
import MyButton from "../../../../components/Button/Button";
import StatusBadge from "../../../../components/StatusBadge/StatusBadge";

export default function ClassStream() {
  const [showModal, setShowModal] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const [activeTab, setActiveTab] = useState("class");
  const [tableData, setTableData] = useState([]);
  const [columnsData, setColumns] = useState([]);

  const classData = [
    {
      _id: "687a2d3bd5e6fb565947c081",
      className: "class 1",
      isActive: true,
    },
  ];

  const columns = [
    { label: "Class Name", key: "className" },
    {
      label: "Status",
      key: "isActive",
      render: (val) => <StatusBadge status={val} />,
    },
  ];

  const tabOptions = [
    { label: "Class", value: "class" },
    { label: "Stream", value: "stream" },
  ];

  const handleAddClick = () => {
    setEditingData(null); // add mode
    setShowModal(true);
  };

  const handleEdit = (row) => {
    setEditingData(row); // edit mode
    setShowModal(true);
  };

  const handleFormSubmit = (newData) => {
    if (editingData) {
      // Edit mode
      setTableData((prev) =>
        prev.map((item) =>
          item._id === editingData._id ? { ...item, ...newData } : item
        )
      );
    } else {
      // Add mode
      setTableData((prev) => [
        ...prev,
        { ...newData, _id: Date.now().toString() },
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
        onClick={() => console.log("Delete", row)}
        title="Delete"
        className="icon-size"
      />
    </div>
  );

  useEffect(() => {
    const fetchData = async () => {
      if (activeTab === "class") {
        setColumns(columns);
        setTableData(classData);
      } else {
        setColumns([
          { label: "Stream Name", key: "streamName" },
          {
            label: "Status",
            key: "isActive",
            render: (val) => <StatusBadge status={val} />,
          },
        ]);
        setTableData([]);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  return (
    <div>
      <h2 className="mb-2 brinavv-color heading">Create Class & Stream</h2>
      <TabSwitcher
        tabs={tabOptions}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="d-flex justify-content-end mb-2">
        <MyButton active={true} onClick={handleAddClick}>
          {activeTab === "class" ? "Add New Class" : "Add New Stream"}
        </MyButton>
      </div>

      <DataTable
        columns={columnsData}
        data={tableData}
        actions={handleActions}
        rowsPerPage={10}
      />

      {activeTab === "class" && (
        <DynamicFormModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          onSubmit={handleFormSubmit}
          title={editingData ? "Edit Class" : "Add New Class"}
          submitLabel={editingData ? "Update Class" : "Add Class"}
          initialData={editingData}
          fields={[
            {
              name: "className",
              label: "Class Name",
              type: "text",
              placeholder: "Enter class name",
              required: true,
            },
            {
              name: "isActive",
              label: "Active",
              type: "checkbox",
            },
          ]}
        />
      )}

      {activeTab === "stream" && (
        <DynamicFormModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          onSubmit={handleFormSubmit}
          title={editingData ? "Edit Stream" : "Add Stream"}
          submitLabel={editingData ? "Update Stream" : "Add Stream"}
          initialData={editingData}
          fields={[
            {
              name: "streamName",
              label: "Stream Name",
              type: "text",
              placeholder: "Enter stream name",
              required: true,
            },
            {
              name: "isActive",
              label: "Active",
              type: "checkbox",
            },
          ]}
        />
      )}
    </div>
  );
}
