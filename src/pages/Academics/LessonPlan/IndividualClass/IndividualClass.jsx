import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BackButton from '../../../../components/BackButton/BackButton'
import DataTable from '../../../../components/Table/DataTable'
import { FiEye, FiEdit } from 'react-icons/fi';

const IndividualClass = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const className = location.state?.className || 'Class';

    // Columns for table
    const columns = [
        { label: 'Stream', key: 'stream' },
        { label: 'Subjects', key: 'subjects' },
        { label: 'Allocated', key: 'allocated' },
        { label: 'Available', key: 'available' },
    ];

    // Sample data
    const data = [
        { id: 1, stream: 'IIT', subjects: 8, allocated: 3, available: 5 },
        { id: 2, stream: 'Medico', subjects: 9, allocated: 3, available: 6 },
        { id: 3, stream: 'General', subjects: 7, allocated: 3, available: 4 },
    ];

    const actions = (row) => (
        <div className="d-flex align-items-center gap-3">
            <FiEye
                className="cursor-pointer text-secondary"
                title="View"
                onClick={() => {
                    navigate('/academic/lesson-plan/individual-class/add-subject-content', {
                        state: {
                            className: className,
                            stream: row.stream,
                            subject: `${row.stream} Subject`, // Placeholder subject
                        }
                    });
                }}
            />
            <FiEdit className="cursor-pointer text-secondary" title="Edit" />
        </div>
    );
    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center gap-3">
                    <BackButton text="" path="/academic/lesson-plan" />
                    <h2 className="mb-0 brinavv-color heading">{className}</h2>
                </div>
            </div>

            {/* Table */}
            <div className=''>
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

export default IndividualClass
