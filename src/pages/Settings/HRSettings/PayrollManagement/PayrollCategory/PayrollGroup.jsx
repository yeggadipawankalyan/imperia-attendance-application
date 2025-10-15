import { useEffect, useState } from "react";
import BackButton from "../../../../../components/BackButton/BackButton";
import MyButton from "../../../../../components/Button/Button";
import DataTable from "../../../../../components/Table/DataTable";
import StatusBadge from "../../../../../components/StatusBadge/StatusBadge";
import ChipsSwitcher from "../../../../../components/ChipsSwitcher/ChipsSwitcher";

export default function PayrollGroup() {
  const [columnsData, setColumns] = useState([]);
  const [earningsData, setEarningsData] = useState([]); // Top assigned Earnings
  const [deductionsData, setDeductionsData] = useState([]); // Top assigned Deductions
  const [availableEarnings, setAvailableEarnings] = useState([]); // Bottom Earnings
  const [availableDeductions, setAvailableDeductions] = useState([]); // Bottom Deductions
  const [selectedRows, setSelectedRows] = useState([]); // Track selected rows
  const [mode, setMode] = useState(null); // add/remove
  const [activeChip, setActiveChip] = useState("all"); // All, Active, Inactive

  const chipsTabs = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  const columns = [
    { label: "Category Type", key: "leave_type" },
    { label: "Code", key: "leave_code" },
    {
      label: "Status",
      key: "isActive",
      render: (val) => <StatusBadge status={val} />,
    },
  ];

  // Sample Data
  const leaveData = [
    { id: 1, leave_type: "Basic Salary", leave_code: "E001", isActive: true, category: "earnings" },
    { id: 2, leave_type: "HRA", leave_code: "E002", isActive: true, category: "earnings" },
    { id: 3, leave_type: "Bonus", leave_code: "E003", isActive: false, category: "earnings" },
    { id: 4, leave_type: "PF Contribution", leave_code: "D001", isActive: true, category: "deductions" },
    { id: 5, leave_type: "Professional Tax", leave_code: "D002", isActive: false, category: "deductions" },
  ];

  useEffect(() => {
    setColumns(columns);
    setAvailableEarnings(leaveData.filter((row) => row.category === "earnings"));
    setAvailableDeductions(leaveData.filter((row) => row.category === "deductions"));
  }, []);

  // Apply filtering logic
  const applyFilter = (data) => {
    switch (activeChip) {
      case "active":
        return data.filter((row) => row.isActive);
      case "inactive":
        return data.filter((row) => !row.isActive);
      default:
        return data;
    }
  };

  // Generic Save for Earnings/Deductions
  const handleSave = (type) => {
    if (selectedRows.length === 0) {
      alert("Please select at least one row!");
      return;
    }

    if (type === "earnings") {
      if (mode === "add") {
        const newAdded = availableEarnings.filter((row) =>
          selectedRows.includes(row.id)
        );
        setEarningsData((prev) => [...prev, ...newAdded]);
        setAvailableEarnings((prev) =>
          prev.filter((row) => !selectedRows.includes(row.id))
        );
      }
      if (mode === "remove") {
        const toRemove = earningsData.filter((row) =>
          selectedRows.includes(row.id)
        );
        setAvailableEarnings((prev) => [...prev, ...toRemove]);
        setEarningsData((prev) =>
          prev.filter((row) => !selectedRows.includes(row.id))
        );
      }
    }

    if (type === "deductions") {
      if (mode === "add") {
        const newAdded = availableDeductions.filter((row) =>
          selectedRows.includes(row.id)
        );
        setDeductionsData((prev) => [...prev, ...newAdded]);
        setAvailableDeductions((prev) =>
          prev.filter((row) => !selectedRows.includes(row.id))
        );
      }
      if (mode === "remove") {
        const toRemove = deductionsData.filter((row) =>
          selectedRows.includes(row.id)
        );
        setAvailableDeductions((prev) => [...prev, ...toRemove]);
        setDeductionsData((prev) =>
          prev.filter((row) => !selectedRows.includes(row.id))
        );
      }
    }

    setSelectedRows([]);
    setMode(null);
  };

  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <BackButton
          iconPosition="left"
          path={-1}
          className="bg-white shadow-lg"
        />
        <h2 className="brinavv-color heading underline-heading">
          Payroll Group
        </h2>
      </div>

      {/* Chip Switcher */}
      <ChipsSwitcher
        tabs={chipsTabs}
        activeTab={activeChip}
        onTabChange={setActiveChip}
      />

      {/* Action Buttons */}
      <div className="d-flex justify-content-end gap-3 mb-2">
        <MyButton active={true} onClick={() => setMode("add")}>
          Add
        </MyButton>
        <MyButton active={true} onClick={() => setMode("remove")}>
          Remove
        </MyButton>
      </div>

      {/* Earnings Section */}
      <h4 className="mt-4 mb-2">Earnings</h4>
      <DataTable
        columns={columnsData}
        data={applyFilter(earningsData)}
        rowsPerPage={10}
        pagination={false}
        showCheckBox={mode === "remove"}
        onRowSelect={setSelectedRows}
      />
      {mode === "add" && (
        <DataTable
          columns={columnsData}
          data={applyFilter(availableEarnings)}
          rowsPerPage={10}
          pagination={false}
          showCheckBox={true}
          onRowSelect={setSelectedRows}
        />
      )}
      {mode && (
        <div className="d-flex justify-content-end gap-3 mt-2">
          <MyButton active={true} onClick={() => handleSave("earnings")}>
            Save Earnings
          </MyButton>
        </div>
      )}

      {/* Deductions Section */}
      <h4 className="mt-5 mb-2">Deductions</h4>
      <DataTable
        columns={columnsData}
        data={applyFilter(deductionsData)}
        rowsPerPage={10}
        pagination={false}
        showCheckBox={mode === "remove"}
        onRowSelect={setSelectedRows}
      />
      {mode === "add" && (
        <DataTable
          columns={columnsData}
          data={applyFilter(availableDeductions)}
          rowsPerPage={10}
          pagination={false}
          showCheckBox={true}
          onRowSelect={setSelectedRows}
        />
      )}
      {mode && (
        <div className="d-flex justify-content-end gap-3 mt-2">
          <MyButton active={true} onClick={() => handleSave("deductions")}>
            Save Deductions
          </MyButton>
        </div>
      )}
    </>
  );
}
