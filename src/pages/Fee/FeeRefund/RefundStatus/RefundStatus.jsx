import React from 'react'
import StatusCard from '../../../../components/StatusCard/StatusCard';
import DataTable from '../../../../components/Table/DataTable';
import StatusBadge from '../../../../components/StatusBadge/StatusBadge';
import { FiEye, FiEdit } from 'react-icons/fi';


const statsData = [
    { title: 'Total Refund Raised', amount: 390, textAlign: 'start' },
    { title: 'Total Refund Completed', amount: 120, textAlign: 'start' },
    { title: 'Total Refund Pending', amount: 150, textAlign: 'start' },
    { title: 'Total Refunds Cancel', amount: 120, textAlign: 'start' },
];

const tableData = [
    {
        requestId: 'REQ001',
        studentId: 'ST001',
        studentName: 'John Doe',
        class: '10th',
        stream: 'Science',
        requestDate: '2025-07-20',
        submitDate: '2025-07-22',
        refundStatus: 'Completed',
    },
    {
        requestId: 'REQ002',
        studentId: 'ST002',
        studentName: 'Jane Smith',
        class: '12th',
        stream: 'Commerce',
        requestDate: '2025-07-18',
        submitDate: '2025-07-21',
        refundStatus: 'Pending',
    },
    {
        requestId: 'REQ003',
        studentId: 'ST003',
        studentName: 'Alice Brown',
        class: '11th',
        stream: 'Humanities',
        requestDate: '2025-07-19',
        submitDate: '2025-07-23',
        refundStatus: 'Cancelled',
    },
];


const RefundStatus = () => {

    const renderRefundStatus = (value) => {
        const isPositive = value === true || value?.toString().toLowerCase() === 'completed';
        return <StatusBadge status={isPositive} />;
    };

    const columns = [
        { label: 'Request ID', key: 'requestId' },
        { label: 'Student ID', key: 'studentId' },
        { label: 'Student Name', key: 'studentName' },
        { label: 'Class', key: 'class' },
        { label: 'Stream', key: 'stream' },
        { label: 'Request Date', key: 'requestDate' },
        { label: 'Submit Date', key: 'submitDate' },
        {
            label: 'Refund Status',
            key: 'refundStatus',
            render: renderRefundStatus,
        },
    ];


    const actions = (row) => (
        <div className="d-flex gap-2">
            <FiEye role="button" title="View" onClick={() => console.log('View', row)} />
            <FiEdit role="button" title="Edit" onClick={() => console.log('Edit', row)} />
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
            {/* Table */}
            <div>
                <DataTable
                    columns={columns}
                    data={tableData}
                    actions={actions}
                    pagination={true}
                />

            </div>
        </div>
    )
}

export default RefundStatus
