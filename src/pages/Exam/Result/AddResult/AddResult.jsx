import React, { useState } from 'react'
import SelectedFilters from '../../../../components/FilterSelector/SelectedFilters';
import MyButton from '../../../../components/Button/Button';
import SelectionCard from '../../../../components/SelectionCard/SelectionCard';
import SearchInput from '../../../../components/SearchInput/SearchInput';
import { FiPrinter, FiDownload } from "react-icons/fi";

const AddResult = () => {
    const [selectedExam, setSelectedExam] = useState('');
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

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

    const subjects = ["Telugu", "Hindi", "English", "Math's", "Science", "Social"];
    const headers = ["R", "W", "P", "S", "Total"];
    const totalResultFields = ["Percentage", "CGPA", "Sectional Rank", "Batch Rank"];

    return (
        <div>
            <SelectedFilters filters={scheduleInfo} removeBtn={false} />

            {/* Exam Dropdown and Print, Download buttons */}
            <div className="row my-3 align-items-center">
                <div className="col-md-6 d-flex align-items-center">
                    <label className="me-2">Exam</label>
                    <select
                        className="form-select rounded w-auto input-focus"
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

                <div className="col-md-6 d-flex justify-content-end align-items-center gap-2">
                    <MyButton onClick={() => console.log('Print clicked')} variant="maroon">
                        <FiPrinter className="me-2" />
                        Print
                    </MyButton>

                    <MyButton onClick={() => console.log('Download clicked')} variant="maroon">
                        <FiDownload className="me-2" />
                        Download
                    </MyButton>

                </div>
            </div>
            <div className="d-flex justify-content-end mb-3 gap-2 align-items-center">
                <div style={{ width: '18%' }}>
                    <SearchInput
                        value={searchValue}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                    />
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
                <div style={{ width: '80%' }}>
                    <div className="flex-grow-1 card p-3">
                        <div className="row mb-3 align-items-center border-bottom pb-3">
                            <div className="col-md-3">
                                <label htmlFor="studentName" className="col-form-label fw-medium">
                                    Name Of The Student:
                                </label>
                            </div>
                            <div className="col-md-3">
                                <select id="studentName" className="form-select">
                                    <option>Select</option>
                                    {/* More student options */}
                                </select>
                            </div>

                            <div className="col-md-2">
                                <label htmlFor="attendanceDate" className="col-form-label fw-medium">
                                    Attendance:
                                </label>
                            </div>
                            <div className="col-md-4">
                                <select id="attendanceDate" className="form-select">
                                    <option>Select Date</option>
                                    {/* More date options */}
                                </select>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between gap-4 align-items-start mb-2'>
                            <div style={{ lineHeight: '1.2' }}>
                                <p><span className='brinavv-color fw-normal'>Name: </span> <span>Rahul Raj</span></p>
                                <p><span className='brinavv-color fw-normal'>Admission. No: </span> <span>1002</span></p>
                                <p><span className='brinavv-color fw-normal'>Stream: </span> <span>General</span></p>
                                <p><span className='brinavv-color fw-normal'>Section: </span> <span>B</span></p>
                                <p><span className='brinavv-color fw-normal'>Roll. No: </span> <span>24</span></p>
                            </div>
                            <div>
                                <p><span className='brinavv-color fw-normal'>Academic Year: </span> <span>2025</span></p>
                            </div>
                        </div>
                    </div>

                    <div className='row my-2 border-bottom pb-2'>
                        <p className='brinavv-color fw-medium'>Marks</p>
                        {/* Return Exam division */}
                        <div className='col-md-6 border-right' >
                            <p className='text-center fw-medium'>Return Exam</p>
                            <div className="d-flex fw-medium mb-3">
                                <div className="col-3">Subject</div>
                                <div className="col-6">Marks</div>
                            </div>

                            {subjects.map((subject, index) => (
                                <div className="d-flex align-items-center mb-2" key={index}>
                                    <div className="col-3">{subject}</div>
                                    <div className="col-6">
                                        <input type="text" className="form-control" placeholder="Enter" />
                                    </div>
                                </div>
                            ))}

                        </div>
                        {/* Internal Exam Division */}
                        <div className='col-md-6'>
                            <div>
                                <p className='text-center fw-medium'>Internal Exam</p>
                                <div className="px-3">
                                    <div className="d-flex fw-medium text-center mb-2">
                                        <div className="col-2">Subject</div>
                                        {headers.map((head, idx) => (
                                            <div className="col" key={idx}>
                                                {head}
                                            </div>
                                        ))}
                                    </div>

                                    {subjects.map((subject, index) => (
                                        <div className="d-flex align-items-center mb-3" key={index}>
                                            <div className="col-2">{subject}</div>
                                            {headers.map((_, idx) => (
                                                <div className="col px-1" key={idx}>
                                                    <input
                                                        type="text"
                                                        className="form-control border-0 shadow-none text-center"
                                                        placeholder="Enter"
                                                        style={{ backgroundColor: '#f8f9fa' }} // optional: to match your light theme
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Total Result Section */}
                    <div>
                        <p className='brinavv-color fw-medium'>Total Result</p>
                        {totalResultFields.map((label, index) => (
                            <div className="d-flex align-items-center mb-2" key={index}>
                                <div className="col-2 text-nowrap">{label}:</div>
                                <div className="col-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-end'>
                <MyButton variant="maroon" className="mb-2">
                    View/Update Result
                </MyButton>
            </div>
        </div>
    )
}

export default AddResult
