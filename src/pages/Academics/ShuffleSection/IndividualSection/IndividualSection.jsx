import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import DataTable from '../../../../components/Table/DataTable'
import StatusBadge from '../../../../components/StatusBadge/StatusBadge';
import { FiEye, FiEdit } from "react-icons/fi";

const tableData = [
    {
        rollNo: 1,
        name: 'Ramu',
        marks: {
            T: 72,
            P: 40,
            F: 32,
        },
        result: 'Pass',
        rank: 10,
        totalMarks: 150,
    },
    {
        rollNo: 2,
        name: 'Sita',
        marks: {
            T: 68,
            P: 42,
            F: 30,
        },
        result: 'Pass',
        rank: 12,
        totalMarks: 140,
    },
];

const IndividualSection = () => {

    const { state: sectionData } = useLocation();
    const navigate = useNavigate();


    const renderSubjectMarks = (_, row) => (
        <div className="d-flex justify-content-start gap-2">
            <span style={{ color: 'blue' }}>{row.marks.T}</span>
            <span style={{ color: 'green' }}>{row.marks.P}</span>
            <span style={{ color: 'red' }}>{row.marks.F}</span>
        </div>
    );

    const renderResultBadge = (val) => <StatusBadge status={val} />;

    const renderRank = (val) => (
        <span>
            {val}
            <sup>th</sup>
        </span>
    );

    const renderActions = (row) => (
        <div className="d-flex gap-3">
            <FiEye
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/exam/result/class-view/student-view', { state: row })}
            />
            <FiEdit style={{ cursor: 'pointer' }} onClick={() => console.log('Download', row)} />
        </div>
    );

    const columns = [
        { label: 'Roll No', key: 'rollNo' },
        { label: 'Name', key: 'name' },
        {
            label: (
                <>
                    <div className="text-center">
                        Subjects
                        <div className="d-flex justify-content-center gap-3">
                            <span>T</span>
                            <span>P</span>
                            <span>F</span>
                        </div>
                    </div>
                </>
            ),
            key: 'marks',
            render: renderSubjectMarks,
        },
        {
            label: 'Result',
            key: 'result',
            render: renderResultBadge,
        },
        {
            label: 'Rank',
            key: 'rank',
            render: renderRank,
        },
        { label: 'Marks(175)', key: 'totalMarks' },
        {
            label: 'Actions',
            key: 'actions',
            render: renderActions,
        }
    ];

    return (
        <div className='my-2'>
            <h5 className="mb-3"><span className='brinavv-color'>Section:</span> {sectionData?.section || 'Unknown'}</h5>
            {/*  Table */}
            <DataTable columns={columns} data={tableData} />
        </div>
    )
}

export default IndividualSection
