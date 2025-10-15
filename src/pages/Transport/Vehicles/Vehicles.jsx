import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaPlus } from "react-icons/fa";
import DataTable from "../../../components/Table/DataTable";
import DynamicFormModal from "../../../components/Modals/ClassModal/DynamicFormModal";
import ColumnVisibilityToggler from "../../../components/ColumnVisibilityToggler/ColumnVisibilityToggler";
import SearchInput from "../../../components/SearchInput/SearchInput";
import AcademicYearDropdown from "../../../components/AcademicYearDropdown/AcademicYearDropdown";
import MyButton from "../../../components/Button/Button";

export default function Vehicles() {
  const [showModal, setShowModal] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [columnsData, setColumns] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const navigate = useNavigate();

  const mockVehicleData = [
    {
      _id: "1",
      idNo: "V001",
      vehicle_number: "KA01AB1234",
      type: "Bus",
      route_no: "R101",
      capacity: "40",
      Vehicle_Condition: "Good",
      status: "Active",
      year: "2023-24",
    },
    {
      _id: "2",
      idNo: "V002",
      vehicle_number: "KA02CD5678",
      type: "Van",
      route_no: "R102",
      capacity: "15",
      Vehicle_Condition: "Excellent",
      status: "Active",
      year: "2024-25",
    },
  ];

  const columns = [
    { label: "Id.No.", key: "idNo" },
    { label: "Vehicle_number", key: "vehicle_number" },
    { label: "Type", key: "type" },
    { label: "Route NO.", key: "route_no" },
    { label: "Capacity", key: "capacity" },
    { label: "Vehicle Condition", key: "Vehicle_Condition" },
    { label: "Status", key: "status" },
    { 
      label: "Operations", 
      key: "operations",
      render: (row) => (
        <div className="d-flex gap-2">
          <span className="fw-normal">View/Delete/Edit</span>
        </div>
      )
    },
  ];

  const [visibleColumns, setVisibleColumns] = useState(
    columns.map((col) => col.key)
  );

  const handleToggleColumn = (key) => {
    setVisibleColumns((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const filteredColumns = columns.filter((col) =>
    visibleColumns.includes(col.key)
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddClick = () => {
    setEditingData(null);
    setShowModal(true);
  };

  const handleFormSubmit = (formData) => {
    const newEntry = {
      _id: editingData ? editingData._id : Date.now().toString(),
      idNo: formData.idNo,
      vehicle_number: formData.vehicle_number,
      type: formData.type,
      route_no: formData.route_no,
      capacity: formData.capacity,
      Vehicle_Condition: formData.Vehicle_Condition,
      status: formData.status,
      year: selectedYear || "2024-25",
    };

    if (editingData) {
      setTableData((prev) =>
        prev.map((item) => (item._id === editingData._id ? newEntry : item))
      );
    } else {
      setTableData((prev) => [...prev, newEntry]);
    }

    setShowModal(false);
  };

  useEffect(() => {
    setColumns(columns);
    setTableData(mockVehicleData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredData = tableData.filter((vehicle) => {
    const matchesSearch = Object.values(vehicle)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear ? vehicle.year === selectedYear : true;
    return matchesSearch && matchesYear;
  });

  return (
    <div>
      <div className="d-flex justify-content-between p-1 mb-3">
        <div>
          <ColumnVisibilityToggler
            columns={columns}
            visibleColumns={visibleColumns}
            onToggle={handleToggleColumn}
          />
        </div>
        <div className="d-flex gap-2 align-items-end">
          <div style={{ maxWidth: "300px" }}>
            <SearchInput
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search vehicles..."
              iconColor="#000000"
            />
          </div>
          <AcademicYearDropdown onSelect={setSelectedYear} />
          <MyButton active={true} onClick={handleAddClick}>
            <FaPlus />
          </MyButton>
        </div>
      </div>

      <DataTable
        columns={filteredColumns}
        data={filteredData}
        rowsPerPage={10}
      />

      {showModal && (
        <DynamicFormModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          onSubmit={handleFormSubmit}
          title={editingData ? "Edit Vehicle" : "Add Vehicle"}
          submitLabel={editingData ? "Update" : "Add Vehicle"}
          fields={[
            {
              name: "idNo",
              label: "Vehicle ID No.",
              type: "text",
              placeholder: "Vehicle ID Number",
              required: true,
            },
            {
              name: "vehicle_number",
              label: "Vehicle Number",
              type: "text",
              placeholder: "Vehicle Registration Number",
              required: true,
            },
            {
              name: "type",
              label: "Vehicle Type",
              type: "select",
              options: [
                { value: "Bus", label: "Bus" },
                { value: "Van", label: "Van" },
                { value: "Car", label: "Car" },
                { value: "Mini Bus", label: "Mini Bus" },
              ],
              required: true,
            },
            {
              name: "route_no",
              label: "Route Number",
              type: "text",
              placeholder: "Route Number",
              required: true,
            },
            {
              name: "capacity",
              label: "Capacity",
              type: "number",
              placeholder: "Passenger Capacity",
              required: true,
            },
            {
              name: "Vehicle_Condition",
              label: "Vehicle Condition",
              type: "select",
              options: [
                { value: "Excellent", label: "Excellent" },
                { value: "Good", label: "Good" },
                { value: "Fair", label: "Fair" },
                { value: "Poor", label: "Poor" },
              ],
              required: true,
            },
            {
              name: "status",
              label: "Status",
              type: "select",
              options: [
                { value: "Active", label: "Active" },
                { value: "Inactive", label: "Inactive" },
                { value: "Maintenance", label: "Maintenance" },
              ],
              required: true,
            },
          ]}
        />
      )}
    </div>
  );
}