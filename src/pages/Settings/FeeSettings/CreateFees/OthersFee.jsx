import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import DataTable from "../../../../components/Table/DataTable";
import TabSwitcher from "../../../../components/TabSwitcher/TabSwitcher";
import DynamicFormModal from "../../../../components/Modals/ClassModal/DynamicFormModal";
import MyButton from "../../../../components/Button/Button";
import StatusBadge from "../../../../components/StatusBadge/StatusBadge";
import BackButton from "../../../../components/BackButton/BackButton";
import SelectionCard from '../../../../components/SelectionCard/SelectionCard';
import CustomCheckbox from '../../../../components/CustomCheckBox/CustomCheckBox';
import Input from '../../../../components/Input/Input';

export default function OthersFee() {
  const [showModal, setShowModal] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const [activeTab, setActiveTab] = useState("category");
  const [tableData, setTableData] = useState([]);
  const [columnsData, setColumns] = useState([]);
  const [academicYearInput, setAcademicYearInput] = useState('2025-2026');

  // Data for Assign Fee Category tab
  const [selectedCategory, setSelectedCategory] = useState(['1']);
  const [selectedClasses, setSelectedClasses] = useState(['class1', 'class2', 'class3']);
  const [selectAllClasses, setSelectAllClasses] = useState(true);
  const [selectedStreams, setSelectedStreams] = useState(['iit', 'medico', 'general']);
  const [feeInputs, setFeeInputs] = useState({
    academicYear: '',
    iit: '',
    medico: '',
    general: '',
    standard: '',
  });
  const [assignTableData, setAssignTableData] = useState([
    {
      id: 1,
      academicYear: '2025-2026',
      category: 'Admission Fee',
      class: 'All',
      streams: 'All',
      fee: '1000',
    },
  ]);

  const feeCategoryData = [
    {
      _id: "1",
      categoryName: "Admission Fee",
      description: "ALL class admission fee",
      isActive: true,
    },
  ];

  const categories = [
    { label: 'Admission fee', value: '1' },
    { label: 'Late fee', value: '2' },
    { label: "Sport's fee", value: '3' },
    { label: 'Donation', value: '4' },
  ];
  const classes = [
    { label: 'Class 1', value: 'class1' },
    { label: 'Class 2', value: 'class2' },
    { label: 'Class 3', value: 'class3' },
    { label: 'Class 4', value: 'class4' },
    { label: 'Class 5', value: 'class5' },
    { label: 'Class 6', value: 'class6' },
    { label: 'Class 7', value: 'class7' },
    { label: 'Class 8', value: 'class8' },
    { label: 'Class 9', value: 'class9' },
    { label: 'Class 10', value: 'class10' },
  ];
  const streams = [
    { label: 'IIT', value: 'iit' },
    { label: 'MEDICO', value: 'medico' },
    { label: 'GENERAL', value: 'general' },
  ];

  const columns = [
    { label: "Fee Category", key: "categoryName" },
    { label: "Description", key: "description" },
    {
      label: "Status",
      key: "isActive",
      render: (val) => <StatusBadge status={val} />,
    },
  ];

  const tabOptions = [
    { label: "Create Fee Category", value: "category" },
    { label: "Assign Fee Category", value: "assign" },
    { label: "Academic Year Fee", value: "academic" },
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
        onClick={() => handleDelete(row)}
        title="Delete"
        className="icon-size"
      />
    </div>
  );

  const handleDelete = (row) => {
    setTableData((prev) => prev.filter((item) => item._id !== row._id));
  };

  // Handlers for Assign Fee Category tab
  const handleCategoryChange = (val) => {
    setSelectedCategory((prev) =>
      prev.includes(val)
        ? prev.filter((v) => v !== val)
        : [...prev, val]
    );
  };
  const handleClassChange = (val) => {
    setSelectedClasses((prev) =>
      prev.includes(val)
        ? prev.filter((v) => v !== val)
        : [...prev, val]
    );
  };
  const handleSelectAllClasses = (checked) => {
    setSelectAllClasses(checked);
    setSelectedClasses(checked ? classes.map((c) => c.value) : []);
  };
  const handleStreamsChange = (vals) => {
    setSelectedStreams(vals);
  };
  const handleFeeInputChange = (e) => {
    const { name, value } = e.target;
    setFeeInputs((prev) => ({ ...prev, [name]: value }));
  };
  const handleAssignUpdate = () => {
    setAssignTableData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        academicYear: feeInputs.academicYear,
        category: categories.find((c) => c.value === selectedCategory[0])?.label || '',
        class: selectAllClasses ? 'All' : selectedClasses.map((c) => classes.find(cl => cl.value === c)?.label).join(', '),
        streams: selectedStreams.length === streams.length ? 'All' : selectedStreams.map(s => streams.find(st => st.value === s)?.label).join(', '),
        fee: feeInputs.general,
      },
    ]);
  };
  const handleAssignActions = (row) => (
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
    // Only one table for now, but pattern allows for tab switching
    setColumns(columns);
    setTableData(feeCategoryData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  return (
    <div>
      <div className="d-flex gap-3">
        <BackButton iconPosition="left" path="/settings" className="bg-white shadow-lg" />
        <h2 className="brinavv-color heading underline-heading">Other Fees</h2>
      </div>
      <br />
      <TabSwitcher
        tabs={tabOptions}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      {activeTab === 'category' && (
        <>
          <div className="d-flex justify-content-end mb-2">
            <MyButton active={true} onClick={handleAddClick}>
              Add Fee Category
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
            title={editingData ? "Edit Fee Category" : "Add Fee Category"}
            submitLabel={editingData ? "Update Category" : "Add Category"}
            initialData={editingData}
            fields={[
              {
                name: "categoryName",
                label: "Category Name",
                type: "text",
                placeholder: "Enter category name",
                required: true,
              },
              {
                name: "description",
                label: "Description",
                type: "text",
                placeholder: "Enter description",
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
      )}
      {activeTab === 'assign' && (
        <div className="d-flex flex-column gap-3 p-2">
          <div className="d-flex gap-3">
            {/* Categories */}
            <div className="d-flex flex-column gap-2">
              <SelectionCard
                title="Categories"
                data={categories}
                type="checkbox"
                selected={selectedCategory}
                onChange={setSelectedCategory}
                name="category-selection"
              />
            </div>
            <div className="d-flex gap-3  border  rounded-3 p-2" style={{ width: '100%' }}>
            {/* Classes and Streams */}
            <div className="d-flex flex-column gap-2 ">
              <div className="d-flex gap-3 align-items-start">
                <div className="d-flex flex-column gap-2">
                  <SelectionCard
                    title="Classes"
                    data={classes}
                    type="checkbox"
                    selected={selectedClasses}
                    onChange={setSelectedClasses}
                    name="class-selection"
                  />
                </div>
                <div className="d-flex flex-column gap-2">
                  <SelectionCard
                    title="Streams"
                    data={streams}
                    type="checkbox"
                    selected={selectedStreams}
                    onChange={setSelectedStreams}
                    name="stream-selection"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex flex-column gap-2 " style={{ minWidth: 250}}>
              <Input
                label="Academics Year"
                name="academicYear"
                value={feeInputs.academicYear}
                placeholder="Enter the year"
                onChange={e => setFeeInputs(prev => ({ ...prev, academicYear: e.target.value }))}
              />
              <Input
                label="IIT"
                name="iit"
                value={feeInputs.iit}
                onChange={handleFeeInputChange}
                placeholder="Enter The Fee"
              />
              <Input
                label="Medico"
                name="medico"
                value={feeInputs.medico}
                onChange={handleFeeInputChange}
                placeholder="Enter The Fee"
              />
              <Input
                label="General"
                name="general"
                value={feeInputs.general}
                onChange={handleFeeInputChange}
                placeholder="Enter The Fee"
              />
              <Input
                label="Standard Fee"
                name="standard"
                value={feeInputs.standard}
                onChange={handleFeeInputChange}
                placeholder="Enter The Fee"
              />
              <MyButton className="mt-2" onClick={handleAssignUpdate}>Update</MyButton>
            </div>
            {/* Fee Inputs */}
            </div>
          </div>
          {/* Table below */}
          <DataTable
            columns={[
                  { label: 'Academic year', key: 'academicYear' },
              { label: 'Admission Fee', key: 'fee' },
              { label: 'Class', key: 'class', render: (val) => val === 'All' ? 'All' : val.split(',').map(c => classes.find(cl => cl.value === c)?.label).join(', ') },
              { label: 'Streams', key: 'streams', render: (val) => val === 'All' ? 'All' : val.split(',').map(s => streams.find(st => st.value === s)?.label).join(', ') },
            ]}
            data={assignTableData}
            actions={handleAssignActions}
            pagination={true}
          />
        </div>
      )}
      {activeTab === 'academic' && (
        <div className="mt-3">
          {/* Academic Year input */}
          <div className="mb-3" style={{ color: '#800000', fontWeight: 500 }}>
            Academic Year: <input
              type="text"
              value={academicYearInput}
              onChange={e => setAcademicYearInput(e.target.value)}
              style={{ border: '1px solid #800000', borderRadius: 4, padding: '2px 8px', marginLeft: 8, width: 120 }}
            />
          </div>

          {/* Tuition Fee Table */}
          <div className="mb-4">
            <div style={{ background: '#f3f3f3', fontWeight: 600, padding: '8px 16px', borderTopLeftRadius: 6, borderTopRightRadius: 6 }}>
              Tuition Fee
            </div>
            <DataTable
              columns={[
                { label: 'Class', key: 'class' },
                { label: 'General', key: 'general' },
                { label: 'IIT', key: 'iit' },
                { label: 'Medico', key: 'medico' },
              ]}
              data={[
                { id: 1, class: 'Class 1', general: '30,000.00', iit: '45,0000.00', medico: '55,0000.00' },
                { id: 2, class: 'Class 2', general: '30,000.00', iit: '45,0000.00', medico: '55,0000.00' },
                { id: 3, class: 'Class 3', general: '30,000.00', iit: '45,0000.00', medico: '55,0000.00' },
                { id: 4, class: 'Class 4', general: '30,000.00', iit: '45,0000.00', medico: '55,0000.00' },
                { id: 5, class: 'Class 5', general: '30,000.00', iit: '45,0000.00', medico: '55,0000.00' },
                { id: 6, class: 'Class 6', general: '30,000.00', iit: '45,0000.00', medico: '55,0000.00' },
                { id: 7, class: 'Class 7', general: '30,000.00', iit: '45,0000.00', medico: '55,0000.00' },
                { id: 8, class: 'Class 8', general: '30,000.00', iit: '45,0000.00', medico: '55,0000.00' },
                { id: 9, class: 'Class 9', general: '30,000.00', iit: '45,0000.00', medico: '55,0000.00' },
                { id: 10, class: 'Class 10', general: '30,000.00', iit: '45,0000.00', medico: '55,0000.00' },
              ]}
              actions={(row) => (
                <span style={{ color: '#800000', cursor: 'pointer' }} onClick={() => setActiveTab('assign')}>Edit</span>
              )}
              pagination={false}
            />
          </div>

          {/* Admission Fee Table */}
          <div className="mb-4">
            <div style={{ background: '#f3f3f3', fontWeight: 600, padding: '8px 16px', borderTopLeftRadius: 6, borderTopRightRadius: 6 }}>
              Admission Fee
            </div>
            <DataTable
              columns={[
                { label: 'Class', key: 'class' },
                { label: 'General', key: 'general' },
                { label: 'IIT', key: 'iit' },
                { label: 'Medico', key: 'medico' },
                { label: 'Standard Discount', key: 'discount' },
              ]}
              data={[
                { id: 1, class: 'All class', general: '10%', iit: '15%', medico: '20%', discount: '-' },
              ]}
              actions={(row) => (
                <span style={{ color: '#800000', cursor: 'pointer' }} onClick={() => setActiveTab('assign')}>Edit</span>
              )}
              pagination={false}
            />
          </div>

          {/* Sports Fee Table */}
          <div className="mb-4">
            <div style={{ background: '#f3f3f3', fontWeight: 600, padding: '8px 16px', borderTopLeftRadius: 6, borderTopRightRadius: 6 }}>
              Sports Fee
            </div>
            <DataTable
              columns={[
                { label: 'Class', key: 'class' },
                { label: 'General', key: 'general' },
                { label: 'IIT', key: 'iit' },
                { label: 'Medico', key: 'medico' },
                { label: 'Standard Discount', key: 'discount' },
              ]}
              data={[
                { id: 1, class: 'Class 1', general: '10%', iit: '15%', medico: '20%', discount: '-' },
                { id: 2, class: 'Class 2', general: '-', iit: '-', medico: '-', discount: '15%' },
                { id: 3, class: 'Class 3', general: '5%', iit: '10%', medico: '20%', discount: '-' },
                { id: 4, class: 'Class 4', general: '-', iit: '5%', medico: '10%', discount: '15%' },
              ]}
              actions={(row) => (
                <span style={{ color: '#800000', cursor: 'pointer' }} onClick={() => setActiveTab('assign')}>Edit</span>
              )}
              pagination={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}