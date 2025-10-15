import React from 'react'
import { useLocation } from 'react-router-dom'
import BackButton from '../../../../../components/BackButton/BackButton'
import MyButton from '../../../../../components/Button/Button'
import SelectedFilters from '../../../../../components/FilterSelector/SelectedFilters'
import DataTable from '../../../../../components/Table/DataTable'
import { FiEye, FiEdit } from "react-icons/fi";

const tableData = [
    {
        id: 1,
        chapter: "Chapter Name",
        topics: [
            { title: "Topic-1", name: "Name of the Topic", hours: "4th period" },
            { title: "Topic-1", name: "Name of the Topic", hours: "2th period" },
            { title: "Topic-1", name: "Name of the Topic", hours: "1th period" },
        ],

    },
];

const tableColumns = [
    {
        key: "chapter",
        label: "Chapter",
        render: (value) => <div>{value}</div>,
    },
    {
        key: "topics",
        label: "Topics",
        render: (value) => (
            <div className="d-flex flex-column gap-1">
                {value.map((t, i) => (
                    <div key={i}>
                        <span>{t.title}</span>  {t.name}
                    </div>
                ))}
            </div>
        ),
    },
    {
        key: "hours",
        label: "Hours",
        render: (_, row) => (
            <div className="d-flex flex-column gap-1">
                {row.topics.map((t, i) => (
                    <div key={i}>{t.hours}</div>
                ))}
            </div>
        ),
    },
];

const AddSubjectContent = () => {

    const location = useLocation();
    const { className, stream, subject } = location.state || {};

    const filters = {
        Class: className || 'N/A',
        Stream: stream || 'N/A',
        Subject: subject || 'N/A',
    };

    const renderActions = (row) => (
        <div className="d-flex gap-2">
            <FiEye role="button" />
            <FiEdit role="button" />
        </div>
    );

    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center gap-3">
                    <BackButton text="" path="/settings/academics/add-course-content/" />
                    <h2 className="mb-0 brinavv-color heading">Add Subject Content</h2>
                </div>
            </div>
            {/* Import Button */}
            <div className='d-flex justify-content-end'>
                <MyButton variant="maroon" onClick={() => console.log('Import clicked')}>
                    Import
                </MyButton>
            </div>
            {/* Selected Filters */}
            <div className="">
                <SelectedFilters filters={filters} />
            </div>
            <div className="d-flex justify-content-between align-items-center my-3 flex-wrap">
                {/* Left: Stats */}
                <div className="d-flex gap-5 flex-wrap">
                    <div>
                        <div className="text-muted small">Total Chapters</div>
                        <div className="fw-bold">24</div>
                    </div>
                    <div>
                        <div className="text-muted small">Total Topics</div>
                        <div className="fw-bold">24</div>
                    </div>
                    <div>
                        <div className="text-muted small">No.Of Allocation</div>
                        <div className="fw-bold">24</div>
                    </div>
                </div>

                {/* Right: Buttons */}
                <div className="d-flex gap-2 mt-3 mt-md-0">
                    <MyButton variant="maroon">Edit</MyButton>
                    <MyButton variant="maroon">+Add</MyButton>
                </div>
            </div>

            <div>
                <DataTable
                    columns={tableColumns}
                    data={tableData}
                    actions={renderActions}
                    pagination={false}
                />
            </div>
            <div className="mt-3">
                <MyButton variant="maroon">Update</MyButton>
            </div>
        </div>
    )
}

export default AddSubjectContent
