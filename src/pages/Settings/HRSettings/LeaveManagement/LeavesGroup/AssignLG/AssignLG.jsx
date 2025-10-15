import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../../../../components/BackButton/BackButton";
import StatusBadge from "../../../../../../components/StatusBadge/StatusBadge";
import DataTable from "../../../../../../components/Table/DataTable";
import MyButton from "../../../../../../components/Button/Button";
import { FaEye } from "react-icons/fa6";

export default function AssignLG() {
  const [selection, setSelection] = useState("");
  const [tableData, setTableData] = useState([]);
  const [columnsData, setColumns] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]); // Track selected rows
  const navigate = useNavigate();

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
    {
      id: 3,
      leave_type: "Maternity Leave",
      leave_code: "ML03",
      isActive: true,
    },
    {
      id: 4,
      leave_type: "Paternity Leave",
      leave_code: "PL04",
      isActive: true,
    },
    { id: 5, leave_type: "Unpaid Leave", leave_code: "UL05", isActive: false },
  ];

  useEffect(() => {
    const fetchData = async () => {
      if (selection === "single") {
        setColumns(columns);
        setTableData(leaveData);
      } else {
        setColumns([
          { label: "Group Name", key: "groupName" },
          {
            label: "Status",
            key: "isActive",
            render: (val) => <StatusBadge status={val} />,
          },
        ]);
        const groupData = [
          { id: 1, groupName: "HR Team", isActive: true },
          { id: 2, groupName: "Engineering Team", isActive: true },
          { id: 3, groupName: "Finance Team", isActive: false },
          { id: 4, groupName: "Marketing Team", isActive: true },
        ];

        setTableData(groupData);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection]);

const handleSave = () => {
  if (!selectedRows.length) {
    alert("No row selected! Please select a row.");
    return;
  }

  // Find the full row object using the selected ID
  const selectedRowData = tableData.find((row) => row.id === selectedRows[0]);

  console.log("Selected Row Data:", selectedRowData);

  // Simulate a save process before navigating
  setTimeout(() => {
    navigate(-1); // Go back after a short delay
  }, 800); // Adjust timeout as needed
};

  const handleActions = () => (
      <div className="d-flex">
        
        <FaEye
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/settings/hr-settings/leave-management/leaves-groups/view-group")}
          title="View"
          className="icon-size"
        />
      </div>
    );

  return (
    <>
      {/* Header */}
      <div className="d-flex gap-3 mb-4">
        <BackButton
          iconPosition="left"
          path="/settings/hr-settings/leave-management/leaves-groups"
          className="bg-white shadow-lg"
        />
        <h2 className="brinavv-color heading">Assign Leaves and Groups</h2>
      </div>

      {/* Radio Selection */}
      <div className=" d-flex gap-3 mb-4">
        <div>
          <input
            className="form-check-input input-focus"
            type="radio"
            id="singleLeave"
            name="assignOption"
            checked={selection === "single"}
            onChange={() => setSelection("single")}
          />
          <label
            htmlFor="singleLeave"
            className="form-check-label text-size text-spacing ms-1"
          >
            Single Leave
          </label>
        </div>

        <div>
          <input
            className="form-check-input input-focus"
            type="radio"
            id="assignGroup"
            name="assignOption"
            checked={selection === "group"}
            onChange={() => setSelection("group")}
          />
          <label
            htmlFor="assignGroup"
            className="form-check-label text-size text-spacing ms-1"
          >
            Assign Group
          </label>
        </div>
      </div>

      {/* Conditional Rendering */}
      {selection === "single" && (
        <div>
          <DataTable
            columns={columnsData}
            data={tableData}
            rowsPerPage={10}
            pagination={false}
            showRadio={true}
            onRowSelect={(selected) => console.log("Selected Row ID:", selected)}
          />
          <div className="d-flex justify-content-end gap-3 mb-2">
            <MyButton active={true} onClick={handleSave}>
              Save
            </MyButton>
          </div>
        </div>
      )}

      {selection === "group" && (
        <div>
          <DataTable
            columns={columnsData}
            data={tableData}
            rowsPerPage={10}
            pagination={false}
            showRadio={true}
            onRowSelect={(selected) => console.log("Selected Row ID:", selected)}
            actions={handleActions}
          />
          <div className="d-flex justify-content-end gap-3 mb-2">
            <MyButton active={true} onClick={handleSave}>
              Save
            </MyButton>
          </div>
        </div>
      )}
    </>
  );
}
