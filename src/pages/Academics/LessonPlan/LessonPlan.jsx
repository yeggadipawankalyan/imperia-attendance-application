import React from 'react'
import { useNavigate } from 'react-router-dom';
import DataTable from '../../../components/Table/DataTable'
import { FiEye } from 'react-icons/fi';


export default function LessonPlan() {
  const navigate = useNavigate();

  // Define columns
  const columns = [
    {
      label: 'Class',
      key: 'className',
    },
  ];

  // Sample data for Class 1 to 10
  const data = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    className: `Class ${i + 1}`,
  }));

  // Actions: Navigate to IndividualClass with className in state
  const actions = (row) => (
    <span
      className="cursor-pointer"
      title="View"
      onClick={() =>
        navigate('/academic/lesson-plan/individual-class', {
          state: { className: row.className },
        })
      }
    >
      <FiEye />
    </span>
  );

  return (
    <div className='my-2'>
      <div>
        <DataTable
          columns={columns}
          data={data}
          actions={actions}
          showCheckBox={false}
          pagination={false}
        />
      </div>
    </div>
  )
}
