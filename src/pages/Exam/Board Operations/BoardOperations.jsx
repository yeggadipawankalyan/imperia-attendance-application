import React, { useState } from 'react'
import SelectionCard from '../../../components/SelectionCard/SelectionCard'

const BoardOperations = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);

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


    const examOptions = ["FA1", "FA2", "SA1", "SA2"];
    const streamOptions = ["Science", "Commerce", "Arts"];

    return (
        <div>
            <h3 className='brinavv-color text-center my-2 border-bottom pb-2'>Update Results</h3>
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
                    <div className="mb-3 row align-items-center">
                        <label className="col-2 col-form-label">Name Of The Exam</label>
                        <div className="col-3">
                            <select className="form-select">
                                <option>Select</option>
                                {examOptions.map((exam, idx) => (
                                    <option key={idx}>{exam}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 row align-items-center">
                        <label className="col-2 col-form-label">Class</label>
                        <div className="col-3">
                            <select className="form-select">
                                <option>Select</option>
                                {classData.map((cls, idx) => (
                                    <option key={idx}>{cls.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 row align-items-center">
                        <label className="col-2 col-form-label">Stream</label>
                        <div className="col-3">
                            <select className="form-select">
                                <option>Select</option>
                                {streamOptions.map((stream, idx) => (
                                    <option key={idx}>{stream}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 row align-items-center">
                        <label className="col-2 col-form-label">Date</label>
                        <div className="col-3 position-relative">
                            <input type="date" className="form-control" placeholder="Enter Date" />
                            {/* Optional icon, if you want the calendar look */}
                            {/* <FaCalendarAlt className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" /> */}
                        </div>
                    </div>

                    <div className="text-start mt-4">
                        <button className="btn px-4 py-2 text-white fw-medium" style={{ backgroundColor: '#8B0000', borderRadius: '10px' }}>
                            Issue Result
                        </button>
                    </div>
                </div>
            </ div>
        </div>
    )
}

export default BoardOperations
