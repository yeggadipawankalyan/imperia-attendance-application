import React, { useState } from 'react'
import StatusCard from '../../../../components/StatusCard/StatusCard'
import SelectedFilters from '../../../../components/FilterSelector/SelectedFilters';
import SelectionCard from '../../../../components/SelectionCard/SelectionCard';
import DataTable from '../../../../components/Table/DataTable';
import { FiEye } from 'react-icons/fi';

const academicStats = [
    { title: 'Total Transactions', amount: 900 },
    { title: 'Online', amount: 300 },
    { title: 'Cash', amount: 300 },
    { title: 'Net Banking', amount: 300 },
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

const columns = [
    { label: "Id_No", key: "id_no" },
    { label: "Name", key: "name" },
    { label: "Stream", key: "stream" },
    { label: "Transactions", key: "transaction" },
];

const tableData = [
    {
        id: 1,
        id_no: "xxxx xx2 3",
        name: "Jai",
        stream: "IIT",
        transaction: "Cash",
    },
    {
        id: 2,
        id_no: "xxxx xx2 3",
        name: "Jai",
        stream: "MEDICO",
        transaction: "UPI",
    },
    {
        id: 3,
        id_no: "xxxx xx2 3",
        name: "Jai",
        stream: "General",
        transaction: "Card",
    },
];


const AllTransactions = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [filters, setFilters] = useState({
        Class: '10th',
        Stream: 'IIT',
    });

    const handleRemoveFilter = (key) => {
        setFilters((prev) => ({ ...prev, [key]: '' }));
    };

    const actions = (row) => (
        <div className="d-flex gap-2">
            <FiEye
                style={{ cursor: 'pointer' }}
                title="View"
            />
        </div>
    );

    return (
        <div>
            <div className="d-flex justify-content-start gap-2">
                {academicStats.map((stat, index) => (
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
                    <DataTable
                        columns={columns}
                        data={tableData}
                        actions={actions}
                        pagination={true}
                    />

                </div>
            </div>
        </div>
    )
}

export default AllTransactions
