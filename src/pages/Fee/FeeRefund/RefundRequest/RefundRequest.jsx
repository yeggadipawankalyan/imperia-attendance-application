import React, { useState } from 'react'
import StatusCard from '../../../../components/StatusCard/StatusCard';
import SelectionCard from '../../../../components/SelectionCard/SelectionCard';
import SelectedFilters from '../../../../components/FilterSelector/SelectedFilters';
import DataTable from '../../../../components/Table/DataTable';
import { FiEye, FiEdit } from 'react-icons/fi';

const statsData = [
    { title: 'Total Requests', amount: 390, textAlign: 'start' },
    { title: 'IIT', amount: 120, textAlign: 'start' },
    { title: 'Medico', amount: 150, textAlign: 'start' },
    { title: 'General', amount: 120, textAlign: 'start' },
];

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

const filters = {
    Class: '1st',
    Stream: 'IIT',
}

const columns = [
    { label: 'Refund ID', key: 'refundId' },
    { label: 'ID No', key: 'studentId' },
    { label: 'Student Name', key: 'studentName' },
    { label: 'Request Date', key: 'requestDate' },
    { label: 'Refund Percentage', key: 'refundPercentage' },
];

const data = [
    {
        refundId: 'R001',
        studentId: 'ST001',
        studentName: 'John Doe',
        requestDate: '2025-07-24',
        refundPercentage: '80%',
    },
    {
        refundId: 'R002',
        studentId: 'ST002',
        studentName: 'Jane Smith',
        requestDate: '2025-07-23',
        refundPercentage: '60%',
    },
];

const RefundRequest = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);


    const handleView = (row) => {
        console.log('View:', row);
    };

    const handleEdit = (row) => {
        console.log('Edit:', row);
    };

    const actions = (row) => (
        <div className="d-flex gap-2">
            <FiEye role="button" onClick={() => handleView(row)} title="View" />
            <FiEdit role="button" onClick={() => handleEdit(row)} title="Edit" />
        </div>
    );

    return (
        <div>
            <div className="row">
                {statsData.map((stat, index) => (
                    <StatusCard
                        key={index}
                        title={stat.title}
                        amount={stat.amount}
                        textAlign={stat.textAlign}
                    />
                ))}
            </div>
            <div className='d-flex'>
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
                <div className="flex-grow-1 card p-3">
                    <div className='mb-3'>
                        <SelectedFilters
                            filters={filters}
                            removeBtn={false}
                        />
                    </div>

                    <DataTable
                        columns={columns}
                        data={data}
                        actions={actions}
                        pagination={true}
                    />
                </div>

            </div>
        </div>
    )
}

export default RefundRequest
