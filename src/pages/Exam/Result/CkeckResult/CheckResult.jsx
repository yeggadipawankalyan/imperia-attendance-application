import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import SelectedFilters from '../../../../components/FilterSelector/SelectedFilters';
import MyButton from '../../../../components/Button/Button';
import SelectionCard from '../../../../components/SelectionCard/SelectionCard';
import DataTable from '../../../../components/Table/DataTable';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';
import { FiEye, FiDownload } from "react-icons/fi";

const tableColumns = [
    { label: "Class", key: "class" },
    { label: "Stream", key: "stream" },
    { label: "Section", key: "section" },
    {
        label: "Results",
        key: "results",
        render: (_, row) => (
            <span>
                <span className="text-primary me-2">{row.T}</span>
                <span className="text-success me-2">{row.P}</span>
                <span className="text-danger">{row.F}</span>
            </span>
        ),
    },
    {
        label: "Progress",
        key: "progress",
        render: (_, row) => (
            <div className="d-flex align-items-center gap-2">
                <ProgressBar percent={row.progress} />
                <span
                    className={`fw-bold ${row.progress >= 80
                        ? "text-success"
                        : row.progress >= 50
                            ? "text-warning"
                            : "text-danger"
                        }`}
                >
                    {row.progress}%
                </span>
            </div>
        ),
    },
];

const tableData = [
    {
        class: "5th",
        stream: "IIT",
        section: "A",
        T: 72,
        P: 40,
        F: 32,
        progress: 80,
    },
    {
        class: "6th",
        stream: "NEET",
        section: "B",
        T: 60,
        P: 30,
        F: 20,
        progress: 65,
    },
    {
        class: "7th",
        stream: "Foundation",
        section: "C",
        T: 55,
        P: 25,
        F: 15,
        progress: 45,
    },
    {
        class: "8th",
        stream: "Olympiad",
        section: "A",
        T: 80,
        P: 50,
        F: 30,
        progress: 90,
    },
    {
        class: "9th",
        stream: "IIT",
        section: "B",
        T: 68,
        P: 36,
        F: 32,
        progress: 70,
    },
];

const CheckResult = () => {
    const [selectedExam, setSelectedExam] = useState('');
    const [selectedClasses, setSelectedClasses] = useState([]);
    const navigate = useNavigate();

    const scheduleInfo = {
        "Exam": "FA-1",
        "Start Date": "10/12/2024",
        "End Date": "09/01/2025"
    };

    const exams = ['Select', 'Formative Assessment-1', 'Formative Assessment-2'];

    const classData = [
        { label: "Class 1", value: "class1" },
        { label: "Class 2", value: "class2" },
        { label: "Class 3", value: "class3" },
        { label: "Class 4", value: "class4" },
        { label: "Class 5", value: "class5" },
        { label: "Class 6", value: "class6" },
        { label: "Class 7", value: "class7" },
        { label: "Class 8", value: "class8" },
        { label: "Class 9", value: "class9" },
        { label: "Class 10", value: "class10" },
    ];

    const renderActions = (row) => (
        <div className="d-flex gap-3">
            <FiEye
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('class-view', { state: row })}
            />
            <FiDownload />
        </div>
    );

    return (
        <div>
            <SelectedFilters filters={scheduleInfo} removeBtn={false} />

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

            <div className="d-flex gap my-3">
                <div style={{ width: '20%' }}>
                    <SelectionCard
                        title="Classes"
                        data={classData}
                        type="checkbox"
                        selected={selectedClasses}
                        onChange={setSelectedClasses}
                        name="classes"
                    />
                </div>
                <div className="flex-grow-1 card p-3">
                    <h3 className="text-center brinavv-color my-2">Formative Assessment 1</h3>
                    <div className='d-flex justify-content-start gap-4 align-items-center mb-2'>
                        <p><span className='brinavv-color fw-medium'>Class: </span> <span>5</span></p>
                        <p><span className='brinavv-color fw-medium'>Stream: </span> <span>General</span></p>
                        <p><span className='brinavv-color fw-medium'>Section: </span> <span>B</span></p>
                    </div>
                    {/* Table */}
                    <DataTable
                        columns={tableColumns}
                        data={tableData}
                        actions={renderActions}
                        pagination={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default CheckResult
