import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import SelectedFilters from '../../../../../components/FilterSelector/SelectedFilters';
import SelectionCard from '../../../../../components/SelectionCard/SelectionCard';
import DataTable from '../../../../../components/Table/DataTable';
import ClassStatusCard from '../../../../../components/ClassStatusCard/ClassStatusCard';
import BackButton from '../../../../../components/BackButton/BackButton';

const AssignExam = () => {
    const location = useLocation();
    const { scheduleName } = location.state || {};
    const { examSchedule } = useParams();
    const decodedName = decodeURIComponent(examSchedule);
    const [selectedClasses, setSelectedClasses] = useState([]);

    const scheduleDetails = {
        "Schedule Name": "FA1-Hello",
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

    const cardData = [
        {
            title: "1st Class",
            categories: ["IIT", "General", "Medico"],
            status: {
                IIT: "Assigned",
                General: "Not assigned",
                Medico: "Assigned",
            },
            allocated: 2,
            available: 1,
        },
    ];


    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="d-flex align-items-center gap-3">
                    <BackButton text="" path={`/settings/exam-settings/add-exams-schedule/assign-exam-schedule/${encodeURIComponent(decodedName)}`} />
                    <h2 className="mb-0 brinavv-color heading">Assign Exam</h2>
                </div>
            </div>
            <h3 className="brinavv-color text-center">{decodedName}</h3>

            <SelectedFilters filters={scheduleDetails} removeBtn={false} />

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

                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '20vh' }}>
                        <div className="w-100" style={{ maxWidth: '800px' }}>
                            <ClassStatusCard data={cardData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignExam;
