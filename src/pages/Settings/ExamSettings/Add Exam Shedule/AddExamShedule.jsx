import React from 'react';
import DataTable from '../../../../components/Table/DataTable';
import { FaEye, FaRegEdit } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import BackButton from '../../../../components/BackButton/BackButton';


const AddExamShedule = () => {

    const navigate = useNavigate();

    const columns = [
        { label: "Exam Schedules", key: "examSchedule" },
        { label: "No.of schedules", key: "totalSchedules" },
        { label: "Allocated", key: "allocated" },
        { label: "Available", key: "available" },
    ];

    const data = [
        {
            examSchedule: "Formative Assessment-1",
            totalSchedules: 4,
            allocated: 3,
            available: 1
        },
        {
            examSchedule: "Formative Assessment-2",
            totalSchedules: 4,
            allocated: 3,
            available: 1
        },
        {
            examSchedule: "Summative Assessment-1",
            totalSchedules: 4,
            allocated: 3,
            available: 1
        },
        {
            examSchedule: "Formative Assessment-3",
            totalSchedules: 4,
            allocated: 3,
            available: 1
        },
        {
            examSchedule: "Summative Assessment-2",
            totalSchedules: 4,
            allocated: 3,
            available: 1
        },
        {
            examSchedule: "Formative Assessment-4",
            totalSchedules: 4,
            allocated: 3,
            available: 1
        },
        {
            examSchedule: "Annual Exam",
            totalSchedules: 4,
            allocated: 3,
            available: 1
        },
    ];

    const handleAssign = (row) => {
        console.log("Assign clicked for", row.examSchedule);
        const encoded = encodeURIComponent(row.examSchedule); // Safe for spaces/symbols
        navigate(`/settings/exam-settings/add-exams-schedule/assign-exam-schedule/${encoded}`);
    };

    const actions = (row) => (
        <div className="d-flex align-items-center gap-2">
            <FaEye role="button" title="View" />
            <FaRegEdit role="button" title="Edit" />
            <span className="brinavv-color fw-semibold" role="button" onClick={() => handleAssign(row)}>
                Assign
            </span>
        </div>
    );


    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="d-flex align-items-center gap-3">
                    <BackButton text="" path="/settings/exam-settings" />
                    <h2 className="mb-0 brinavv-color heading">Add Exam Schedule</h2>
                </div>
            </div>
            <DataTable columns={columns} data={data} actions={actions} />
        </div>
    );
};

export default AddExamShedule;
