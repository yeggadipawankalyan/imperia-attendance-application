import React, { useState } from 'react'
import StatusCard from '../../../../components/StatusCard/StatusCard'
import SelectedFilters from '../../../../components/FilterSelector/SelectedFilters';
import SelectionCard from '../../../../components/SelectionCard/SelectionCard';
import DataTable from '../../../../components/Table/DataTable';
import MyButton from '../../../../components/Button/Button';
import { FiEye, FiEdit } from 'react-icons/fi';

const admissionStats = [
    { title: 'Total Admission', amount: 900 },
    { title: 'Total Cancelled', amount: 5 },
    { title: 'Today Admission', amount: 5 },
    { title: 'Today Cancelled', amount: 5 },
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


const tableData = [
    {
        id: 1,
        id_no: 'xxxx xx2 3',
        name: 'Jai',
        stream: 'IIT',
        type: 'checkout',
    },
    {
        id: 2,
        id_no: 'xxxx xx2 3',
        name: 'Jai',
        stream: 'MEDICO',
        type: 'paynow',
    },
    {
        id: 3,
        id_no: 'xxxx xx2 3',
        name: 'Jai',
        stream: 'General',
        type: 'paynow',
    },
]


const AdmissionRequest = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [filters, setFilters] = useState({
        Class: '10th',
    });

    const handleRemoveFilter = (key) => {
        setFilters((prev) => ({ ...prev, [key]: '' }));
    };

    const getActions = () => (row) => (
        <div className="d-flex gap-2">
            <FiEye
                style={{ cursor: 'pointer' }}
            />
            <FiEdit style={{ cursor: 'pointer' }} />
        </div>
    );

    const renderPayNowButtons = (_, row) => (
        <div className="d-flex gap-2">
            {row.type === 'checkout' ? (
                <>
                    <MyButton variant="maroon">Check out</MyButton>
                    <MyButton variant="maroon">Cancel</MyButton>
                </>
            ) : (
                <>
                    <MyButton variant="maroon">Pay now</MyButton>
                    <MyButton variant="maroon">Cancel</MyButton>
                </>
            )}
        </div>
    );

    const columns = [
        { label: 'Id_No', key: 'id_no' },
        { label: 'Name', key: 'name' },
        { label: 'Stream', key: 'stream' },
        {
            label: 'Actions',
            key: 'actions',
            render: getActions(),
        },
        {
            label: 'Pay Now',
            key: 'paynow',
            render: renderPayNowButtons,
        },
    ];




    return (
        <div>
            <div className="d-flex justify-content-start gap-2">
                {admissionStats.map((stat, index) => (
                    <StatusCard
                        key={index}
                        title={stat.title}
                        amount={stat.amount}
                        textAlign="start"
                    />
                ))}
            </div>
            {/* Selected Filters */}
            <div className='mb-2'>
                <SelectedFilters
                    filters={filters}
                    removeBtn={false}
                    onRemove={handleRemoveFilter}
                />
            </div>
            <h6 className='mb-2'>Fee Particulars</h6>
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
                {/* Table */}
                <div className="flex-grow-1">
                    <DataTable columns={columns} data={tableData} pagination />
                </div>
            </div>
        </div>
    )
}

export default AdmissionRequest
