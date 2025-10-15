import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaEye, FaRegEdit } from 'react-icons/fa';
import MyButton from '../../../../../components/Button/Button';
import DataTable from '../../../../../components/Table/DataTable';
import DynamicFormModal from '../../../../../components/Modals/ClassModal/DynamicFormModal';
import SelectionCard from '../../../../../components/SelectionCard/SelectionCard';
import SelectedFilters from '../../../../../components/FilterSelector/SelectedFilters';
import BackButton from '../../../../../components/BackButton/BackButton';

const AssignExamShedule = () => {
    const { examSchedule } = useParams();
    const navigate = useNavigate();
    const decodedName = decodeURIComponent(examSchedule);

    const [showModal, setShowModal] = useState(false);
    const [editingData, setEditingData] = useState(null);
    const [scheduleData, setScheduleData] = useState([
        {
            id: '1',
            scheduleName: 'Math Midterm',
            startDate: '2025-08-01',
            endDate: '2025-08-02',
            status: 'Allocated',
        },
        {
            id: '2',
            scheduleName: 'Science Final',
            startDate: '2025-08-10',
            endDate: '2025-08-11',
            status: 'Allocated',
        },
    ]);


    const handleAddClick = () => {
        setEditingData(null);
        setShowModal(true);
    };

    const handleAssignClick = () => {
        navigate(`/settings/exam-settings/add-exams-schedule/assign-exam-schedule/${examSchedule}/assign-schedule`);
    };


    const handleFormSubmit = (newData) => {
        if (editingData) {
            setScheduleData(prev =>
                prev.map(item => item.id === editingData.id ? { ...item, ...newData } : item)
            );
        } else {
            setScheduleData(prev => [
                ...prev,
                {
                    ...newData,
                    id: Date.now().toString(),
                    status: "Allocated"
                }
            ]);
        }
        setShowModal(false);
    };

    const handleEdit = (row) => {
        setEditingData(row);
        setShowModal(true);
    };

    const handleView = (row) => {
        navigate(
            `/settings/exam-settings/add-exams-schedule/assign-exam-schedule/${examSchedule}/allocated-view`,
            { state: { scheduleName: row.scheduleName } }
        );
    };

    const handleAssignSchedule = (row) => {
        navigate(
            `/settings/exam-settings/add-exams-schedule/assign-exam-schedule/${examSchedule}/assign-exam`,
            { state: { scheduleName: row.scheduleName } }
        );
    };


    const columns = [
        { label: "Schedule name", key: "scheduleName" },
        { label: "Start date", key: "startDate" },
        { label: "End date", key: "endDate" },
        { label: "Status", key: "status" },
    ];

    const summaryFilters = {
        "No. of Schedule": 4,
        "Allocated": 3,
        "Available": 1,
    };

    const actions = (row) => (
        <div className="d-flex align-items-center gap-2">
            <FaEye role="button" title="View" onClick={() => handleView(row)} />
            <FaRegEdit role="button" title="Edit" onClick={() => handleEdit(row)} />
            <span className="text-primary fw-semibold" role="button" title="Assign" onClick={() => handleAssignSchedule(row)}>
                +
            </span>
        </div>
    );

    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="d-flex align-items-center gap-3">
                    <BackButton text="" path="/settings/exam-settings/add-exams-schedule" />
                    <h2 className="mb-0 brinavv-color heading">Assign Exam Schedule</h2>
                </div>
            </div>
            <h3 className="brinavv-color text-center">{decodedName}</h3>

            <SelectedFilters filters={summaryFilters} removeBtn={false} />
            <div className="d-flex justify-content-end my-2 gap-2">
                <MyButton active={true} onClick={handleAddClick}>
                    Add Schedule
                </MyButton>
            </div>
            <div className="d-flex justify-content-end mb-3 gap-2">
                <MyButton active={true} onClick={handleAssignClick}>
                    Assign Schedule
                </MyButton>
            </div>

            <DataTable columns={columns} data={scheduleData} actions={actions} />

            <DynamicFormModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                onSubmit={handleFormSubmit}
                title={editingData ? "Edit Exam Schedule" : "Create Exam_Schedule"}
                submitLabel={editingData ? "Update" : "Submit"}
                initialData={editingData}
                fields={[
                    {
                        name: "examName",
                        label: "Name Of The Exam",
                        type: "select",
                        required: true,
                        options: [
                            { label: "Select", value: "" },
                            { label: "Math Final Exam", value: "Math Final Exam" },
                            { label: "Science Midterm", value: "Science Midterm" }
                        ]
                    },
                    {
                        name: "scheduleName",
                        label: "Name Of Schedule",
                        type: "text",
                        placeholder: "Enter",
                        required: true
                    },
                    {
                        name: "startDate",
                        label: "Start Date",
                        type: "date",
                        required: true
                    },
                    {
                        name: "endDate",
                        label: "End Date",
                        type: "date",
                        required: true
                    },
                    {
                        name: "isActive",
                        label: "Is Activity",
                        type: "checkbox"
                    }
                ]}
            />
        </div>
    );
};

export default AssignExamShedule;
