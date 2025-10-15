import { useEffect, useState } from "react";
import DataTable from "../../../../../../components/Table/DataTable";
import BackButton from "../../../../../../components/BackButton/BackButton";
import MyButton from "../../../../../../components/Button/Button";
import StatusBadge from "../../../../../../components/StatusBadge/StatusBadge";

export default function ViewGroup() {
  const [columnsData, setColumns] = useState([]);
  const [tableData, setTableData] = useState([]); // Top table data
  const [availableData, setAvailableData] = useState([]); // Bottom table data
  const [selectedRows, setSelectedRows] = useState([]); // Track selected rows
  const [mode, setMode] = useState(null); // "add" | "remove" | null

  const columns = [
    { label: "Leave Type", key: "leave_type" },
    { label: "Code", key: "leave_code" },
    {
      label: "Status",
      key: "isActive",
      render: (val) => <StatusBadge status={val} />,
    },
  ];

  const leaveData = [
    { id: 1, leave_type: "Annual Leave", leave_code: "AL01", isActive: true },
    { id: 2, leave_type: "Sick Leave", leave_code: "SL02", isActive: false },
    { id: 3, leave_type: "Maternity Leave", leave_code: "ML03", isActive: true },
    { id: 4, leave_type: "Paternity Leave", leave_code: "PL04", isActive: true },
    { id: 5, leave_type: "Unpaid Leave", leave_code: "UL05", isActive: false },
  ];

  useEffect(() => {
    setColumns(columns);
    setAvailableData(leaveData); // start with all in bottom
  }, []);

  // Handle Save for both Add & Remove
  const handleSave = () => {
    if (selectedRows.length === 0) {
      alert("Please select at least one row!");
      return;
    }

    if (mode === "add") {
      const newAdded = availableData.filter((row) =>
        selectedRows.includes(row.id)
      );
      setTableData((prev) => [...prev, ...newAdded]);
      setAvailableData((prev) =>
        prev.filter((row) => !selectedRows.includes(row.id))
      );
    }

    if (mode === "remove") {
      const toRemove = tableData.filter((row) =>
        selectedRows.includes(row.id)
      );
      setAvailableData((prev) => [...prev, ...toRemove]);
      setTableData((prev) =>
        prev.filter((row) => !selectedRows.includes(row.id))
      );
    }

    // Reset after saving
    setSelectedRows([]);
    setMode(null);
  };

  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <BackButton
          iconPosition="left"
          path="/settings/hr-settings/leave-management/leaves-groups"
          className="bg-white shadow-lg"
        />
        <h2 className="brinavv-color heading underline-heading">
          Employees Leave Group
        </h2>
      </div>

      <div className="d-flex justify-content-end gap-3 mb-2">
        <MyButton active={true} onClick={() => setMode("add")}>
          Add
        </MyButton>
        <MyButton active={true} onClick={() => setMode("remove")}>
          Remove
        </MyButton>
      </div>

      {/* Top Table */}
      <DataTable
        columns={columnsData}
        data={tableData}
        rowsPerPage={10}
        pagination={false}
        showCheckBox={mode === "remove"}
        onRowSelect={setSelectedRows}
      />

      {/* Bottom Table only in Add Mode */}
      {mode === "add" && (
        <DataTable
          columns={columnsData}
          data={availableData}
          rowsPerPage={10}
          pagination={false}
          showCheckBox={true}
          onRowSelect={setSelectedRows}
        />
      )}

      {/* One Save Button for both modes */}
      {mode && (
        <div className="d-flex justify-content-end gap-3 mb-2">
          <MyButton active={true} onClick={handleSave}>
            Save
          </MyButton>
        </div>
      )}
    </>
  );
}
