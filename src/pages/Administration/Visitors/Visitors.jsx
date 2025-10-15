import React, { useState } from 'react';
import TabSwitcher from '../../../components/TabSwitcher/TabSwitcher';
import SearchInput from '../../../components/SearchInput/SearchInput';
import AcademicYearDropdown from '../../../components/AcademicYearDropdown/AcademicYearDropdown';
import SelectedFilters from '../../../components/FilterSelector/SelectedFilters';
import SelectionCard from '../../../components/SelectionCard/SelectionCard';
import DataTable from '../../../components/Table/DataTable';
import StatusBadge from '../../../components/StatusBadge/StatusBadge';
import { FaPlus, FaRegEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import DynamicFormModal from '../../../components/Modals/ClassModal/DynamicFormModal';
import MyButton from '../../../components/Button/Button';

export default function Visitors() {
  const [activeTab, setActiveTab] = useState('today');
  const tabOptions = [
    { label: 'Today', value: 'today' },
    { label: 'Pickups', value: 'pickups' },
    { label: 'Cancel', value: 'cancel' },
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [filters, setFilters] = useState({});
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false); // NEW
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [editingData, setEditingData] = useState(null);
  const [tableData, setTableData] = useState([
    {
      class: 'Class 1',
      allotment: 'Admin',
      pickupPerson: 'Raju Raj',
      phoneNo: '+91 123456789',
      relation: 'Father',
      date: '01-02-2025',
      time: '11:00 AM',
      status: 'approved'
    }
  ]);

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

  const handleEdit = (row) => {
    setEditingData(row);
    setShowEditModal(true);
  };

  const handleEditSubmit = (formData) => {
    if (editingData) {
      setTableData((prev) =>
        prev.map((item) =>
          item.pickupPerson === editingData.pickupPerson &&
          item.phoneNo === editingData.phoneNo
            ? { ...item, ...formData }
            : item
        )
      );
    }
    setShowEditModal(false);
    setEditingData(null);
  };

  const handleDelete = (row) => {
    setTableData((prev) =>
      prev.filter((item) =>
        !(item.pickupPerson === row.pickupPerson && item.phoneNo === row.phoneNo)
      )
    );
  };

  const handleDeleteSubmit = (formData) => {
    if (formData.confirmation === 'CONFIRM' && selectedRow) {
      setTableData((prev) =>
        prev.filter((item) =>
          !(item.pickupPerson === selectedRow.pickupPerson &&
            item.phoneNo === selectedRow.phoneNo)
        )
      );
    }
    setShowDeleteModal(false);
    setSelectedRow(null);
  };

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleAddSubmit = (formData) => {
    const newEntry = {
      class: "Class 1",
      allotment: "Admin",
      pickupPerson: formData.pickupPerson,
      phoneNo: "+91 9999999999",
      relation: "Father",
      date: formData.date,
      time: formData.time,
      status: "pending"
    };
    setTableData(prev => [...prev, newEntry]);
    setShowAddModal(false);
  };

  const addFormFields = [
    {
      name: "date",
      label: "Date",
      type: "date",
      required: true,
    },
    {
      name: "time",
      label: "Time",
      type: "time",
      required: true,
    },
    {
      name: "reason",
      label: "Reason",
      type: "select",
      required: true,
      options: [
        { label: "Medical", value: "medical" },
        { label: "Personal", value: "personal" },
        { label: "Emergency", value: "emergency" },
      ],
    },
    {
      name: "pickupPerson",
      label: "Pickup Person",
      type: "select",
      required: true,
      options: [
        { label: "Raju Raj", value: "Raju Raj" },
        { label: "Sita Ram", value: "Sita Ram" },
        { label: "Other", value: "Other" },
      ],
    },
    {
      name: "photo",
      label: "Upload Photo",
      type: "file",
      required: true,
    },
  ];

  const editFormFields = [
    {
      name: "pickupPerson",
      label: "Pickup Person",
      type: "text",
      placeholder: "Enter Pickup Person",
      required: true,
    },
    {
      name: "phoneNo",
      label: "Phone Number",
      type: "text",
      placeholder: "Enter Phone Number",
      required: true,
    },
    {
      name: "relation",
      label: "Relation",
      type: "text",
      placeholder: "Enter Relation",
      required: true,
    },
    {
      name: "date",
      label: "Date",
      type: "date",
      required: true,
    },
    {
      name: "time",
      label: "Time",
      type: "time",
      required: true,
    }
  ];

  const deleteFormFields = [
    {
      type: 'custom',
      name: 'confirmation',
      render: ({ value, onChange }) => (
        <div className="text-center">
          <p className="mb-4">Are you sure you want to cancel the pass?</p>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Type CONFIRM to proceed"
            value={value || ''}
            onChange={e => onChange(e.target.value)}
          />
          <div className="d-flex justify-content-center gap-3">
            <button
              type="button"
              className="btn btn-secondary px-4"
              onClick={() => setShowDeleteModal(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-danger px-4"
            >
              Submit
            </button>
          </div>
        </div>
      )
    }
  ];

  const classData = [
    { value: 1, label: 'Class 1' },
    { value: 2, label: 'Class 2' },
    { value: 3, label: 'Class 3' },
    { value: 4, label: 'Class 4' },
    { value: 5, label: 'Class 5' },
    { value: 6, label: 'Class 6' },
    { value: 7, label: 'Class 7' },
    { value: 8, label: 'Class 8' },
    { value: 9, label: 'Class 9' },
    { value: 10, label: 'Class 10' },
  ];

  const columns = [
    { label: 'Class', key: 'class' },
    { label: 'Allotment', key: 'allotment' },
    { 
      label: 'Pickup Person', 
      key: 'pickupPerson',
      render: (value, row) => (
        <div>
          <div>Person: <p>{row.pickupPerson}</p></div>
        </div>
      )
    },
    { 
      label: 'Phone Number', 
      key: 'phoneNo',
      render: (value) => <p>{value}</p>
    },
    { 
      label: 'Relation', 
      key: 'relation',
      render: (value) => <p>{value}</p>
    },
    { 
      label: 'Date', 
      key: 'date',
      render: (value) => <p>{value}</p>
    },
    { 
      label: 'Time', 
      key: 'time',
      render: (value) => <p>{value}</p>
    },
    { 
      label: 'Status', 
      key: 'status',
      render: (status) => <StatusBadge status={status} />
    }
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRemove = (key) => {
    const updated = { ...filters };
    delete updated[key];
    setFilters(updated);
  };

  return (
    <div className="container-fluid">
      <TabSwitcher
        tabs={tabOptions}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="d-flex gap-2 mb-2 justify-content-end">
        <div className="mb-3" style={{ maxWidth: "300px" }}>
          <SearchInput
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            iconColor="#000000"
          />
        </div>
        <AcademicYearDropdown onSelect={setSelectedYear} />
        <div>
        <MyButton active={true} onClick={handleAddClick}>
          <FaPlus className="" />
        </MyButton>
        </div>
      </div>
      <SelectedFilters filters={filters} onRemove={handleRemove} />
      
      <div className='d-flex gap-2 my-3'>
        <div >
          <SelectionCard 
            title="Classes"
            data={classData}
            type="checkbox"
            selected={selectedClasses}
            onChange={setSelectedClasses}
            name="classes"
          />
        </div>     
        <div >
          <DataTable
            columns={columns}
            data={tableData}
            actions={activeTab === 'today' ? handleActions : undefined}
            pagination={false}
          />
        </div>
      </div>

      {/* Edit Modal */}
      <DynamicFormModal
        show={showEditModal}
        handleClose={() => { setShowEditModal(false); setEditingData(null); }}
        onSubmit={handleEditSubmit}
        title={editingData ? "Edit Pass" : "Edit Pass Timings"}
        submitLabel={editingData ? "Update" : "Submit"}
        initialData={editingData}
        fields={editFormFields}
      />

      {/* Add Modal */}
      <DynamicFormModal
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
        onSubmit={handleAddSubmit}
        title="Create Gate Pass"
        submitLabel="Submit"
        fields={addFormFields}
      />
    </div>
  );
}
