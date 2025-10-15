import React, { useState } from 'react'
import SelectedFilters from '../../../../components/FilterSelector/SelectedFilters'
import StatusCard from '../../../../components/StatusCard/StatusCard'
import SelectionCard from '../../../../components/SelectionCard/SelectionCard'
import DataTable from '../../../../components/Table/DataTable'
import StatusBadge from '../../../../components/StatusBadge/StatusBadge'

const lessonData = [
    {
        id: 1,
        date: "25-09-2025",
        lesson: "Ramu",
        topic: "10ᵗʰ",
        status: "Pass",
    },
];

const lessonColumns = [
    { label: "Date", key: "date" },
    { label: "Lesson", key: "lesson" },
    { label: "Topic", key: "topic" },
    {
        label: "Status",
        key: "status",
        render: (value) => <StatusBadge status={value} />,
    },
];

const slipTestData = [
    { id: 1, date: "Jan", lesson: "Jan", topic: "hello", marks: "20" },
    { id: 2, date: "Jan", lesson: "Jan", topic: "hello", marks: "75%" },
    { id: 3, date: "Jan", lesson: "Jan", topic: "hello", marks: "75%" },
];

const slipTestColumns = [
    { label: "Date", key: "date" },
    { label: "Lesson", key: "lesson" },
    { label: "Topic", key: "topic" },
    { label: "Marks", key: "marks" },
];


const projectColumns = [
    { label: "Date", key: "date" },
    { label: "Month", key: "month" },
    {
        label: "Status",
        key: "status",
        render: (value) => <StatusBadge status={value} />,
    },
    { label: "Percentage", key: "percentage" },
];

const projectData = [
    { id: 1, date: "25-12-2024", month: "Jan", status: "Submitted", percentage: "75%" },
    { id: 2, date: "25-12-2024", month: "Jan", status: "Submitted", percentage: "75%" },
    { id: 3, date: "25-12-2024", month: "Jan", status: "Submitted", percentage: "75%" },
    { id: 4, date: "25-12-2024", month: "Jan", status: "Submitted", percentage: "75%" },
    { id: 5, date: "25-12-2024", month: "Jan", status: "Submitted", percentage: "75%" },
    { id: 6, date: "25-12-2024", month: "Jan", status: "Submitted", percentage: "75%" },
];

const assignmentData = [
    { id: 1, date: "05-Jan", lesson: "Algebra", topic: "Linear Equations", status: "Pass", marks: "85%" },
    { id: 2, date: "10-Jan", lesson: "Biology", topic: "Cell Structure", status: "Pass", marks: "78%" },
    { id: 3, date: "15-Jan", lesson: "Physics", topic: "Laws of Motion", status: "Fail", marks: "48%" },
    { id: 4, date: "20-Jan", lesson: "English", topic: "Essay Writing", status: "Pass", marks: "92%" },
    { id: 5, date: "25-Jan", lesson: "History", topic: "World War II", status: "Pass", marks: "88%" },
];

const assignmentColumns = [
    { label: "Date", key: "date" },
    { label: "Lesson", key: "lesson" },
    { label: "Topic", key: "topic" },
    {
        label: "Status",
        key: "status",
        render: (value) => <StatusBadge status={value} />,
    },
    { label: "Marks", key: "marks" },
];


const ClassAcademics = () => {
    const [selectedLesson, setSelectedLesson] = useState('');
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [filters, setFilters] = useState({
        Class: '10',
        Stream: 'IIT',
        Section: 'A'
    });

    // Sample data for StatusCard (can be fetched from API too)
    const stats = [
        { title: 'Lesson', amount: 42 },
        { title: 'Project', amount: 8 },
        { title: 'Slip Test', amount: 15 },
        { title: 'Assignment', amount: 23 },
    ];

    const subjectData = [
        { label: "Mathematics", value: "mathematics" },
        { label: "Science", value: "science" },
        { label: "English", value: "english" },
        { label: "Social Studies", value: "social_studies" },
        { label: "Hindi", value: "hindi" },
        { label: "Computer Science", value: "computer_science" }
    ];

    const lesson = ['Select', 'Lesson-1', 'Lesson-2'];

    return (
        <div>
            <div className='my-2'>
                <SelectedFilters
                    filters={filters}
                />
            </div>

            <div className="row">
                {stats.map((item) => (
                    <StatusCard
                        key={item.title}
                        title={item.title}
                        amount={item.amount}
                        textAlign="center"
                    />
                ))}
            </div>

            <div className="my-3">
                <div className="row gx-5">
                    {/* Left Column: SelectionCard */}
                    <div className="col-12 col-md-6 col-lg-2 col-xl-2 mb-3">
                        <SelectionCard
                            title="Subjects"
                            data={subjectData}
                            type="checkbox"
                            selected={selectedSubjects}
                            onChange={setSelectedSubjects}
                            name="classes"
                        />
                    </div>

                    {/* Right Column: Responsive Card */}
                    <div className="col-12 col-md-6 col-lg-10 col-xl-10 mb-3">
                        <div className="card p-3">
                            <h4 className="text-center brinavv-color my-2">Lesson Plan</h4>
                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <p><span className='brinavv-color fw-medium'>Subject: </span> <span>All</span></p>

                                </div>
                                <div>
                                    <p className='mb-0'><span className='brinavv-color fw-medium'>Date: </span> <span>11-11-2025</span></p>
                                    <p className='mb-0'><span className='brinavv-color fw-medium'>Timings: </span> <span>9-6</span></p>
                                </div>
                            </div>
                            {/* Table */}
                            <div>
                                <DataTable
                                    columns={lessonColumns}
                                    data={lessonData}
                                    pagination={false}
                                    showCheckBox={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lesson Dropdown and add calender button in future */}
            <div className="row my-3 align-items-center">
                <div className="col-md-6 d-flex align-items-center">
                    <label className="me-2">Exam</label>
                    <select
                        className="form-select rounded w-50 input-focus"
                        value={selectedLesson}
                        onChange={(e) => setSelectedLesson(e.target.value)}
                    >
                        {lesson.map((s, idx) => (
                            <option key={idx} value={s === 'Select' ? '' : s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="row">
                {/* Slip Test Table */}
                <div className="col-12 col-md-6 mb-3">
                    <h5 className="text-start brinavv-color my-2">Slip Test</h5>
                    <DataTable
                        columns={slipTestColumns}
                        data={slipTestData}
                        pagination={false}
                        showCheckBox={false}
                    />
                </div>

                {/* Project Table */}
                <div className="col-12 col-md-6 mb-3">
                    <h5 className="text-start brinavv-color my-2">Project</h5>
                    <DataTable
                        columns={projectColumns}
                        data={projectData}
                        pagination={false}
                        showCheckBox={false}
                    />
                </div>
            </div>
            {/* Assignment Table */}
            <div>
                <h5 className="text-start brinavv-color my-2">Assignment</h5>
                <DataTable
                    columns={assignmentColumns}
                    data={assignmentData}
                    pagination={false}
                    showCheckBox={false}
                />
            </div>
        </div>
    )
}

export default ClassAcademics
