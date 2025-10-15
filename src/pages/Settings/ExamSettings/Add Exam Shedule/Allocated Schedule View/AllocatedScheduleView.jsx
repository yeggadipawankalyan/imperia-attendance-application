import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { FaPrint } from 'react-icons/fa';
import MyButton from '../../../../../components/Button/Button';
import DataTable from '../../../../../components/Table/DataTable';
import ClassStatusCard from '../../../../../components/ClassStatusCard/ClassStatusCard';
import SelectedFilters from '../../../../../components/FilterSelector/SelectedFilters';
import BackButton from '../../../../../components/BackButton/BackButton';

const AllocatedScheduleView = () => {
    const { examSchedule } = useParams();
    const location = useLocation();
    const decodedName = decodeURIComponent(examSchedule);
    const scheduleName = location.state?.scheduleName || "No Schedule Selected";

    const handlePrint = () => {
        window.print();
    };

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
        {
            title: "2nd Class",
            categories: ["IIT", "General", "Medico"],
            status: {
                IIT: "Not assigned",
                General: "Assigned",
                Medico: "Assigned",
            },
            allocated: 2,
            available: 1,
        },
    ];

    const scheduleDetails = {
        "Duration": "1hr",
        "Start Date": "10/12/2024",
        "End Date": "09/01/2025"
    };


    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="d-flex align-items-center gap-3">
                    <BackButton text="" path={`/settings/exam-settings/add-exams-schedule/assign-exam-schedule/${encodeURIComponent(decodedName)}`}/>
                    <h2 className="mb-0 brinavv-color heading">Allocated Schedule View</h2>
                </div>
            </div>
            <h4 className="text-center brinavv-color">{decodedName}</h4>
            <h5><span className='brinavv-color'>Schedule Name: </span><span className='text-muted'>{scheduleName}</span></h5>

            <SelectedFilters filters={scheduleDetails} removeBtn={false} />

            <div className="d-flex justify-content-end my-3 gap-2">
                <MyButton active={true} onClick={handlePrint}>
                    <FaPrint className="me-2" /> Print
                </MyButton>
            </div>

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
    );
};

export default AllocatedScheduleView;
