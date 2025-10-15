import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import DataTable from "../../../../../components/Table/DataTable";
import TabSwitcher from "../../../../../components/TabSwitcher/TabSwitcher";
import MyButton from "../../../../../components/Button/Button";
import StatusBadge from "../../../../../components/StatusBadge/StatusBadge";
import BackButton from "../../../../../components/BackButton/BackButton";
import DynamicFormModal from "../../../../../components/Modals/ClassModal/DynamicFormModal";
import Assign from "./Assign";

export default function LeavesGroups() {
  const [showModal, setShowModal] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const [activeTab, setActiveTab] = useState("leave");
  const [tableData, setTableData] = useState([]);
  const [columnsData, setColumns] = useState([]);
  const navigate = useNavigate();

  const classData = [
    // {
    //   _id: "687a2d3bd5e6fb565947c081",
    //   className: "class 1",
    //   isActive: true,
    // },
  ];

  const columns = [
    { label: "Leave Type", key: "leave_type" },
    { label: "Code", key: "leave_code" },
    {
      label: "Status",
      key: "isActive",
      render: (val) => <StatusBadge status={val} />,
    },
  ];

  const tabOptions = [
    { label: "Leave", value: "leave" },
    { label: "Group Leaves", value: "group-leaves" },
    { label: "Assign", value: "assign" },
  ];

  const handleAddClick = () => {
    {
      activeTab === "leave"
        ? navigate("create-leave")
        : (setEditingData(null), setShowModal(true));
    }
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
      <div style={{ cursor: "pointer" }} onClick={() =>
          navigate(
            "/settings/hr-settings/leave-management/leaves-groups/view-group"
          )
        }>Assign</div>
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
      if (activeTab === "leave") {
        setColumns(columns);
        setTableData(classData);
      } else {
        setColumns([
          { label: "Group Name", key: "groupName" },
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
      <div className="d-flex gap-3 mb-4">
        <BackButton
          iconPosition="left"
          path="/settings/hr-settings/leave-management"
          className="bg-white shadow-lg"
        />
        <h2 className="brinavv-color heading underline-heading">
          Create Leaves and Groups
        </h2>
      </div>
      <TabSwitcher
        tabs={tabOptions}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      {(activeTab === "leave" || activeTab === "group-leaves") && (
        <div className="d-flex justify-content-end mb-2">
          <MyButton active={true} onClick={handleAddClick}>
            {activeTab === "leave" ? "Add New Leaves" : "Add Group"}
          </MyButton>
        </div>
      )}

      {(activeTab === "leave" || activeTab === "group-leaves") && (
        <DataTable
          columns={columnsData}
          data={tableData}
          actions={handleActions}
          rowsPerPage={10}
        />
      )}

      {activeTab === "group-leaves" && (
        <DynamicFormModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          onSubmit={handleFormSubmit}
          title={editingData ? "Edit Group" : "Add Group"}
          submitLabel={editingData ? "Update Group" : "Add Group"}
          initialData={editingData}
          fields={[
            {
              name: "groupName",
              label: "Group Name",
              type: "text",
              placeholder: "Enter group name",
              required: true,
            },
            {
              name: "description",
              label: "Group Description",
              type: "textarea",
              placeholder: "Enter group description",
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
      {activeTab === "assign" && <Assign />}
    </div>
  );
}
