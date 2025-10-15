import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import SelectedFilters from '../../../components/FilterSelector/SelectedFilters';
import MyButton from '../../../components/Button/Button';
import SelectionCard from '../../../components/SelectionCard/SelectionCard';
import DataTable from '../../../components/Table/DataTable';
import { FiEye, FiEdit } from "react-icons/fi";

const tableData = [
    { id: 1, section: "Alpha", no_of_sections: 5, strength: 150, capacity: 160 },
    { id: 2, section: "Beta", no_of_sections: 4, strength: 120, capacity: 130 },
    { id: 3, section: "Gamma", no_of_sections: 6, strength: 180, capacity: 200 },
];

const columns = [
    { key: 'section', label: 'Sections' },
    // { key: 'no_of_sections', label: 'No of Sections' },
    { key: 'capacity', label: 'Sitting Capacity' },
    { key: 'strength', label: 'Strength' },
];


const ShuffleSection = () => {
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedStream, setSelectedStream] = useState('');
    const [selectedExam, setSelectedExam] = useState('')
    const [sortOption, setSortOption] = useState('');

    const navigate = useNavigate();


    const classes = ['Select', 'CLass 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'];

    const streams = ["Select", "IIT", "Medico", "General"]

    const exams = ["Select", "Formative Assessment 1", "Formative Assessment 2", "Formative Assessment 3", "Formative Assessment 3"]

    const handleView = (row) => {
        navigate('/academic/shuffle-section/individual-section', { state: row });
    };

    const handleEdit = (row) => {
        console.log("Edit clicked", row);
    };

    const renderActions = (row) => (
        <div className="d-flex gap-2">
            <span style={{ cursor: 'pointer' }} onClick={() => handleView(row)}>
                <FiEye />
            </span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleEdit(row)}>
                <FiEdit />
            </span>
        </div>
    );



    return (
        <div className='my-3'>
            <div className="row">
                {/* Left Labels Section */}
                <div className="col-lg-6 col-md-4 col-12">
                    <div className="d-flex gap-2">
                        {/* Class Selection */}
                        <div className="mb-3 d-flex align-items-center w-50 me-4">
                            <label className="me-2 mb-0" style={{ minWidth: '60px' }}>Class</label>
                            <select
                                className="form-select rounded input-focus flex-grow-1"
                                value={selectedClass}
                                onChange={(e) => setSelectedClass(e.target.value)}
                            >
                                {classes.map((s, idx) => (
                                    <option key={idx} value={s === 'Select' ? '' : s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Stream Selection */}
                        <div className="mb-3 d-flex align-items-center w-50">
                            <label className="me-2 mb-0" style={{ minWidth: '60px' }}>Stream</label>
                            <select
                                className="form-select rounded input-focus flex-grow-1"
                                value={selectedStream}
                                onChange={(e) => setSelectedStream(e.target.value)}
                            >
                                {streams.map((s, idx) => (
                                    <option key={idx} value={s === 'Select' ? '' : s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Radio Buttons Section */}
                    <div className="mb-3 d-flex align-items-center">
                        <label className="mb-0" style={{ minWidth: '40px' }}>Select</label>
                        <div className="d-flex gap-2">
                            <div className="form-check">
                                <input
                                    className="form-check-input me-2"
                                    type="radio"
                                    name="sortOption"
                                    id="examOption"
                                    value="exam"
                                    checked={sortOption === 'exam'}
                                    onChange={(e) => setSortOption(e.target.value)}
                                />
                                <label className="form-check-label" htmlFor="examOption">
                                    Exam
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input me-2"
                                    type="radio"
                                    name="sortOption"
                                    id="alphabetOption"
                                    value="alphabet"
                                    checked={sortOption === 'alphabet'}
                                    onChange={(e) => setSortOption(e.target.value)}
                                />
                                <label className="form-check-label" htmlFor="alphabetOption">
                                    Alphabetically
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Exam Selection - visible only if "Exam" radio is selected */}
                    {sortOption === 'exam' && (
                        <div className="col-lg-6 col-md-3 mb-3 d-flex align-items-center">
                            <label className="me-2 mb-0" style={{ minWidth: '60px' }}>Exam</label>
                            <select
                                className="form-select rounded input-focus flex-grow-1"
                                value={selectedExam}
                                onChange={(e) => setSelectedExam(e.target.value)}
                            >
                                {exams.map((exam, idx) => (
                                    <option key={idx} value={exam === 'Select' ? '' : exam}>
                                        {exam}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className='d-flex justify-content-end'>
                        <MyButton type="submit" variant="primary" active>
                            Submit
                        </MyButton>
                    </div>
                </div>
            </div>
            {/* Data Table Section */}
            <div className="mt-4">
                <DataTable
                    columns={columns}
                    data={tableData}
                    actions={renderActions}
                    pagination={true}
                    showCheckBox={false}
                />
            </div>
        </div>
    )
}

export default ShuffleSection
