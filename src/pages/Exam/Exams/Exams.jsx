import React, { useState } from 'react'
import SelectedFilters from '../../../components/FilterSelector/SelectedFilters';
import SelectionCard from '../../../components/SelectionCard/SelectionCard';
import DataTable from '../../../components/Table/DataTable';
import MyButton from '../../../components/Button/Button';

const Exams = () => {

    const [selectedExam, setSelectedExam] = useState('');
    const [selectedClasses, setSelectedClasses] = useState([]);

    const exams = ['Select', 'Formative Assessment-1', 'Formative Assessment-2'];

    const scheduleInfo = {
        "Schedule Name": "FA-1 Exam",
        "Start Date": "10/12/2024",
        "End Date": "09/01/2025"
    };

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

    const columns = [
        { label: "Subjects", key: "subject" },
        { label: "Date/Time", key: "dateTime" },
    ];

    const data = [
        { subject: "Telugu", dateTime: "10/02/2025 10:00am" },
        { subject: "Hindi", dateTime: "10/02/2025 10:00am" },
        { subject: "English", dateTime: "10/02/2025 10:00am" },
        { subject: "Maths", dateTime: "10/02/2025 10:00am" },
        { subject: "Evs", dateTime: "10/02/2025 10:00am" },
        { subject: "Social", dateTime: "10/02/2025 10:00am" },
    ];
    return (
        <div>
            <h3 className="text-center brinavv-color my-2">Formative Assessment 1</h3>

            <SelectedFilters filters={scheduleInfo} removeBtn={false} />

            {/* Exam Dropdown and Print, Download button */}
            <div className="row my-3 align-items-center">
                <div className="col-md-1">Exam</div>
                <div className="col-md-3">
                    <select
                        className="form-select rounded"
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
            </div>

            <div className='row my-3'>
                <div className='col-md-2'>
                    <SelectionCard
                        title="Classes"
                        data={classData}
                        type="checkbox"
                        selected={selectedClasses}
                        onChange={setSelectedClasses}
                        name="classes"
                    />
                </div>
                <div className='col-md-10'>
                    <div className="d-flex justify-content-center align-items-center mb-2" style={{ minHeight: '60vh' }}>
                        <div className="w-100" style={{ maxWidth: '600px' }}>
                            <DataTable columns={columns} data={data} actions={null} pagination={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exams
