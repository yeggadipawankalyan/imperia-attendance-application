import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../../../components/BackButton/BackButton";
import ChipsSwitcher from "../../../../../components/ChipsSwitcher/ChipsSwitcher";
import DataTable from "../../../../../components/Table/DataTable";
import StatusBadge from "../../../../../components/StatusBadge/StatusBadge";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import MyButton from "../../../../../components/Button/Button";
import TabSwitcher from "../../../../../components/TabSwitcher/TabSwitcher";
import DynamicFormModal from "../../../../../components/Modals/ClassModal/DynamicFormModal";
import AssignPG from "./AssignPG";

// Tabs for categories
const categoryTabs = [
  { label: "All", value: "all" },
  { label: "Earnings", value: "earnings" },
  { label: "Deductions", value: "deductions" },
];

// Tabs for groups
const groupTabs = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

// Main Tab options
const tabOptions = [
  { label: "Categories", value: "category" },
  { label: "Group", value: "group" },
  { label: "Assign", value: "assign" },
];

// Columns
const categoryColumns = [
  { label: "Category Type", key: "type" },
  { label: "Code", key: "code" },
  {
    label: "Status",
    key: "isActive",
    render: (val) => <StatusBadge status={val} />,
  },
];

const groupColumns = [
  { label: "Group Name", key: "groupName" },
  { label: "Group Code", key: "groupCode" },
  {
    label: "Status",
    key: "isActive",
    render: (val) => <StatusBadge status={val} />,
  },
];

// Example Data
const earningsData = [
  { type: "Basic Salary", code: "E001", isActive: true },
  { type: "HRA", code: "E002", isActive: true },
  { type: "Bonus", code: "E003", isActive: false },
];

const deductionsData = [
  { type: "PF Contribution", code: "D001", isActive: true },
  { type: "Professional Tax", code: "D002", isActive: false },
  { type: "Loan Deduction", code: "D003", isActive: true },
];

export default function PayrollCategory() {
  const [activeChip, setActiveChip] = useState(categoryTabs[0].value);
  const [activeGroupChip, setActiveGroupChip] = useState(groupTabs[0].value);
  const [activeTab, setActiveTab] = useState(tabOptions[0].value);
  const [groupsData, setGroupsData] = useState([
    { groupName: "Admin Group", groupCode: "G001", isActive: true },
    { groupName: "Staff Group", groupCode: "G002", isActive: false },
    { groupName: "Finance Group", groupCode: "G003", isActive: true },
  ]);

  const groupFields = [
  {
    name: "groupName",
    label: "Group Name",
    type: "text",
    placeholder: "Enter group name",
    required: true,
  },
  {
    name: "groupCode",
    label: "Group Code",
    type: "text",
    placeholder: "Enter group code",
    required: true,
  },
  {
    name: "isActive",
    label: "Active",
    type: "checkbox",
  },
];

  const [showModal, setShowModal] = useState(false);
  const [editingData, setEditingData] = useState(null);

  const navigate = useNavigate();

  const handleEdit = (row) => {
    setEditingData(row);
    setShowModal(true);
  };

  const handleDelete = (row) => {
    setGroupsData(groupsData.filter((g) => g.groupCode !== row.groupCode));
  };

  const handleFormSubmit = (formData) => {
    if (editingData) {
      // Update existing group
      setGroupsData((prev) =>
        prev.map((g) =>
          g.groupCode === editingData.groupCode ? { ...formData } : g
        )
      );
    } else {
      // Add new group
      setGroupsData((prev) => [...prev, formData]);
    }
    setShowModal(false);
    setEditingData(null);
  };

  const handleActions = (row) => (
    <div className="d-flex gap-2">
      {activeTab === "group" && (
        <div
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => navigate("payroll-group")}
        >
          Assign
        </div>
      )}

      <FaRegEdit
        style={{ cursor: "pointer" }}
        onClick={() => handleEdit(row)}
        title="Edit"
        className="icon-size"
      />
      <RiDeleteBinLine
        style={{ cursor: "pointer", color: "red" }}
        onClick={() => handleDelete(row)}
        title="Delete"
        className="icon-size"
      />
    </div>
  );

  // Filtered data for groups
  const filteredGroups = groupsData.filter((item) => {
    if (activeGroupChip === "all") return true;
    if (activeGroupChip === "active") return item.isActive;
    if (activeGroupChip === "inactive") return !item.isActive;
    return true;
  });

  return (
    <>
      <div className="d-flex gap-3 mb-3">
        <BackButton
          iconPosition="left"
          path="/settings/hr-settings/payroll-management"
          className="bg-white shadow-lg"
        />
        <h2 className="brinavv-color heading underline-heading">
          Payroll Categories
        </h2>
      </div>

      <TabSwitcher
        tabs={tabOptions}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="d-flex justify-content-end mb-2">
        {activeTab !== "assign" && (
          <MyButton
            active={true}
            onClick={() =>
              activeTab === "category"
                ? navigate("create-payroll-category")
                : (setShowModal(true), setEditingData(null))
            }
          >
            {activeTab === "category"
              ? "Create Payroll Category"
              : "Create Group"}
          </MyButton>
        )}
      </div>

      {/* Categories Section */}
      {activeTab === "category" && (
        <div>
          <ChipsSwitcher
            tabs={categoryTabs}
            activeTab={activeChip}
            onTabChange={setActiveChip}
          />

          {activeChip === "all" ? (
            <>
              <h4 className="mt-4 text-spacing">Earnings</h4>
              <DataTable
                columns={categoryColumns}
                data={earningsData}
                actions={handleActions}
                rowsPerPage={10}
                pagination={false}
              />

              <h4 className="mt-4 text-spacing">Deductions</h4>
              <DataTable
                columns={categoryColumns}
                data={deductionsData}
                actions={handleActions}
                rowsPerPage={10}
                pagination={false}
              />
            </>
          ) : activeChip === "earnings" ? (
            <DataTable
              columns={categoryColumns}
              data={earningsData}
              actions={handleActions}
              rowsPerPage={10}
            />
          ) : (
            <DataTable
              columns={categoryColumns}
              data={deductionsData}
              actions={handleActions}
              rowsPerPage={10}
            />
          )}
        </div>
      )}

      {/* Groups Section */}
      {activeTab === "group" && (
        <div>
          <ChipsSwitcher
            tabs={groupTabs}
            activeTab={activeGroupChip}
            onTabChange={setActiveGroupChip}
          />

          <DataTable
            columns={groupColumns}
            data={filteredGroups}
            actions={handleActions}
            rowsPerPage={10}
          />
        </div>
      )}

      {/* Group Form Modal */}
      {activeTab === "group" && (
        <DynamicFormModal
  show={showModal}
  handleClose={() => setShowModal(false)}
  onSubmit={handleFormSubmit}
  title={editingData ? "Edit Group" : "Add Group"}
  submitLabel={editingData ? "Update Group" : "Add Group"}
  initialData={editingData}
  fields={groupFields}
/>
      )}

      {activeTab === "assign" && <AssignPG />}
    </>
  );
}
