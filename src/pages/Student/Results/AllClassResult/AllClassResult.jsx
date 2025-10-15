import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import SelectedFilters from '../../../../components/FilterSelector/SelectedFilters';
import MyButton from '../../../../components/Button/Button';
import SelectionCard from '../../../../components/SelectionCard/SelectionCard';
import DataTable from '../../../../components/Table/DataTable';
import StatusBadge from '../../../../components/StatusBadge/StatusBadge';
import { FiEye, FiDownload } from "react-icons/fi";

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


const AllClassResult = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [selectedExam, setSelectedExam] = useState('');
    const [selectedSubject, setSelectedSubjects] = useState([]);

    const filters = {
        Class: state.class,
        Stream: state.stream,
        Section: state.section,
    };

    const exams = ['Select', 'Formative Assessment-1', 'Formative Assessment-2'];

    const subjectData = [
        { label: "Telugu", value: "telugu" },
        { label: "Hindi", value: "hindi" },
        { label: "English", value: "english" },
        { label: "Maths", value: "maths" },
        { label: "Science", value: "science" },
        { label: "Social", value: "social" },
    ];

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
                onClick={() => navigate('/students/result/class-view/student-view', { state: row })}
            />
            <FiDownload style={{ cursor: 'pointer' }} onClick={() => console.log('Download', row)} />
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
        <div>
            <SelectedFilters filters={filters} removeBtn={false} />

            {/* Exam Dropdown and Print, Download buttons */}
            <div className="row my-3 align-items-center">
                <div className="col-md-6 d-flex align-items-center">
                    <label className="me-2">Exam</label>
                    <select
                        className="form-select rounded w-auto"
                        value={selectedExam}
                        onChange={(e) => setSelectedExam(e.target.value)}
                    >
                        {exams.map((s, idx) => (
                            <option key={idx} value={s === 'Select' ? '' : s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-6 d-flex justify-content-end gap-2">
                    <MyButton onClick={() => console.log('Print clicked')} variant="maroon">
                        Print
                    </MyButton>
                    <MyButton onClick={() => console.log('Download clicked')} variant="maroon">
                        Download
                    </MyButton>
                </div>
            </div>

            <div className="my-3">
                <div className="row gx-5">
                    {/* Left Column: SelectionCard */}
                    <div className="col-12 col-md-6 col-lg-2 col-xl-2 mb-3">
                        <SelectionCard
                            title="Subjects"
                            data={subjectData}
                            type="checkbox"
                            selected={selectedSubject}
                            onChange={setSelectedSubjects}
                            name="classes"
                        />
                    </div>

                    {/* Right Column: Responsive Card */}
                    <div className="col-12 col-md-6 col-lg-10 col-xl-10 mb-3">
                        <div className="card p-3">
                            <h3 className="text-center brinavv-color my-2">Formative Assessment 1</h3>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <div>
                                    <p><span className="brinavv-color fw-medium">Subject: </span> <span>All</span></p>
                                </div>
                                <div>
                                    <p className="mb-0"><span className="brinavv-color fw-medium">Stream: </span> <span>General</span></p>
                                    <p className="mb-0"><span className="brinavv-color fw-medium">Section: </span> <span>B</span></p>
                                </div>
                            </div>
                            {/* Table */}
                            <DataTable columns={columns} data={tableData} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AllClassResult
