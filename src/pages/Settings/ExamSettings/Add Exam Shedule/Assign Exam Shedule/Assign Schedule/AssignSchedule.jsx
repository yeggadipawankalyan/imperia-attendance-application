import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MyButton from '../../../../../../components/Button/Button';
import SelectedFilters from '../../../../../../components/FilterSelector/SelectedFilters';
import BackButton from '../../../../../../components/BackButton/BackButton';

const subjects = ['Telugu', 'Hindi', 'English', 'Maths', 'EVS', 'Social'];
const schedules = ['Select Schedule', 'Formative Assessment-1', 'Formative Assessment-2'];

const AssignSchedule = () => {
    const { examSchedule } = useParams();
    const decodedName = decodeURIComponent(examSchedule);

    const [selectedSchedule, setSelectedSchedule] = useState('');
    const [subjectData, setSubjectData] = useState(
        subjects.map((subj) => ({ subject: subj, dateTime: '' }))
    );

    const handleDateChange = (index, value) => {
        const updated = [...subjectData];
        updated[index].dateTime = value;
        setSubjectData(updated);
    };

    const handleClear = () => {
        setSelectedSchedule('');
        setSubjectData(subjects.map((subj) => ({ subject: subj, dateTime: '' })));
    };

    const handleUpdate = () => {
        console.log('Selected Schedule:', selectedSchedule);
        console.log('Subject Schedule:', subjectData);
    };

    const scheduleInfo = {
        "Schedule Name": "FA-1 Exam",
        "Start Date": "10/12/2024",
        "End Date": "09/01/2025"
    };

    return (
        <div className="">

            <BackButton
                text=""
                path={`/settings/exam-settings/add-exams-schedule/assign-exam-schedule/${encodeURIComponent(decodedName)}`}
                className="mb-3"
            />
            <h3 className="text-center brinavv-color mb-2">{decodedName}</h3>

            <SelectedFilters filters={scheduleInfo} removeBtn={false} />

            {/* Schedule Dropdown */}
            <div className="row my-3 align-items-center">
                <div className="col-md-1">Schedule</div>
                <div className="col-md-3">
                    <select
                        className="form-select rounded"
                        value={selectedSchedule}
                        onChange={(e) => setSelectedSchedule(e.target.value)}
                    >
                        {schedules.map((s, idx) => (
                            <option key={idx} value={s === 'Select Schedule' ? '' : s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Subjects */}
            {subjectData.map((item, index) => (
                <div key={index} className="row mb-3 align-items-center">
                    <div className="col-md-1">{`${index + 1}st Subject`}</div>

                    <div className="col-md-3">
                        <select className="form-select rounded" value={item.subject} disabled>
                            <option>{item.subject}</option>
                        </select>
                    </div>

                    <div className="col-md-1">Date/Time</div>

                    <div className="col-md-3">
                        <input
                            type={item.dateTime ? 'datetime-local' : 'text'}
                            className="form-control rounded"
                            placeholder="Select date/time"
                            value={item.dateTime}
                            onFocus={(e) => {
                                e.target.type = 'datetime-local';
                                e.target.showPicker?.(); // optional: opens calendar immediately in supported browsers
                            }}
                            onChange={(e) => handleDateChange(index, e.target.value)}
                        />

                    </div>
                </div>
            ))}

            <div className='row mb-3 align-items-center'>
                {/* Buttons */}
                <div className="col-md-4 d-flex justify-content-center">
                    <MyButton
                        onClick={handleClear}
                        active={false}
                        className="fw-semibold text-dark"
                    >
                        Clear All
                    </MyButton>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <MyButton
                        onClick={handleUpdate}
                        active={true}
                        className="btn rounded-3"
                    >
                        Update
                    </MyButton>
                </div>

            </div>
        </div>
    );
};

export default AssignSchedule;
