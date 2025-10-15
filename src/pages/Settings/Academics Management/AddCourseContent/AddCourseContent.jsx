import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from '../../../../components/BackButton/BackButton'
import DataTable from '../../../../components/Table/DataTable'

const AddCourseContent = () => {
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

    // Actions as plain text "Assign"
    const actions = (row) => (
        <span
            className="brinavv-color cursor-pointer"
            onClick={() =>
                navigate('/settings/academics/add-course-content/class-content', {
                    state: { className: row.className },
                })
            }

        >
            Assign
        </span>
    );
    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="d-flex align-items-center gap-3">
                    <BackButton text="" path="/settings/academics" />
                    <h2 className="mb-0 brinavv-color heading">Add Course Content</h2>
                </div>
            </div>
            {/* Table */}
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

export default AddCourseContent
