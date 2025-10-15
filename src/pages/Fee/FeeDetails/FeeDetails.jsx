import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SelectionCard from '../../../components/SelectionCard/SelectionCard'
import DataTable from '../../../components/Table/DataTable'
import ProgressBar from '../../../components/ProgressBar/ProgressBar'
import { FiEye, FiEdit } from 'react-icons/fi';

export default function FeeDetails() {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [selectedSections, setSelectedSections] = useState([]);
  const navigate = useNavigate();

  const classData = Array.from({ length: 10 }, (_, i) => ({
    label: `Class ${i + 1}`,
    value: `class${i + 1}`,
  }));

  const sectionData = ['A', 'B', 'C', 'D', 'E'].map((sec) => ({
    label: sec,
    value: sec,
  }));

  // Helper for text color
  const getColor = (percent) => {
    if (percent < 50) return "red";
    if (percent < 80) return "orange";
    return "teal";
  };

  const columns = [
    { key: 'idNo', label: 'Id_No' },
    { key: 'name', label: 'Name' },
    {
      key: 'status',
      label: 'Status',
      render: (val) => (
        <div className="d-flex align-items-center gap-2">
          <ProgressBar percent={val} />
          <span className="fw-semibold" style={{ fontSize: '12px', color: getColor(val) }}>
            {val}%
          </span>
        </div>
      ),
    },
  ];

  const rows = [
    { idNo: 'xxxx xx2 3', name: 'Jai', status: 80 },
    { idNo: 'xxxx xx2 3', name: 'Jai', status: 60 },
    { idNo: 'xxxx xx2 3', name: 'Jai', status: 30 },
  ];

  const actions = (row) => (
    <div className="d-flex gap-2">
      <FiEye style={{ cursor: 'pointer' }} onClick={() => navigate('/fee/student-fee-details')} />
      <FiEdit style={{ cursor: 'pointer' }} />
    </div>
  );


  return (
    <div className="d-flex flex-column flex-md-row gap-3 my-3">
      <div className="w-25 w-md-25">
        <SelectionCard
          title="Classes"
          data={classData}
          type="checkbox"
          selected={selectedClasses}
          onChange={setSelectedClasses}
          name="classes"
        />
      </div>
      <div className="w-25 w-md-25">
        <SelectionCard
          title="Section"
          data={sectionData}
          type="checkbox"
          selected={selectedSections}
          onChange={setSelectedSections}
          name="sections"
        />
      </div>
      <div className="w-100 w-md-50">
        <DataTable columns={columns} data={rows} actions={actions} />
      </div>
    </div>


  );
}
