import React, { useEffect, useState } from "react";
import ChipsSwitcher from "../../../../../components/ChipsSwitcher/ChipsSwitcher";
import DataTable from "../../../../../components/Table/DataTable";

export default function AssignPG() {
  const [activeTab, setActiveTab] = useState("all");
  const [tableData, setTableData] = useState([]);
  const [columnsData, setColumns] = useState([]);

  const tabs = [
    { label: "All", value: "all" },
    { label: "Department", value: "department" },
  ];

  const allColumns = [
    { label: "Employee Name", key: "employeeName" },
    { label: "Employee Id", key: "employeeId" },
    { label: "Leave Group", key: "leaveGroup" },
    { label: "Department", key: "department" },
    { label: "Position", key: "position" },
    {
      label: (
        <>
          <div className="text-center">
            Leaves
            <div className="d-flex justify-content-center gap-3">
              <span>T</span>
              <span>P</span>
              <span>A</span>
            </div>
          </div>
        </>
      ),
      key: "leaves",
    },
    {
      label: "Status",
      key: "isActive",
      render: (val) => <StatusBadge status={val} />,
    },
  ];
  const departmentColumns = [
    { label: "Department Name", key: "departmentName" },
    { label: "No. of Employees", key: "employeeCount" },
    { label: "Assigned", key: "assigned" },
    { label: "Not Assigned", key: "notAssigned" },
    { label: "Total Groups", key: "totalGroups" },
    {
      label: "Status",
      key: "isActive",
      render: (val) => <StatusBadge status={val} />,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      if (activeTab === "all") {
        setColumns(allColumns);
        setTableData([]);
      } else {
        setColumns(departmentColumns);
        setTableData([]);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const handleActions = () => (
    <div className="d-flex">
      <FaEye
        style={{ cursor: "pointer" }}
        // onClick={() =>
        //   navigate(
        //     "/settings/hr-settings/leave-management/leaves-groups/view-group"
        //   )
        // }
        title="View"
        className="icon-size"
      />
    </div>
  );
  return (
    <div className="mt-4">
      <ChipsSwitcher
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <DataTable
        columns={columnsData}
        data={tableData}
        actions={handleActions}
        rowsPerPage={10}
      />
    </div>
  );
}
