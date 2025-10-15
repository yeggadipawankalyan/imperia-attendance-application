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

const columns = [
    { label: "Id_No", key: "id_no" },
    { label: "Name", key: "name" },
    { label: "Stream", key: "stream" },
    { label: "Transactions", key: "transaction_count" },
];

const tableData = [
    {
        id: 1,
        id_no: "xxxx xx2 3",
        name: "Jai",
        stream: "IIT",
        transaction_count: 4,
    },
    {
        id: 2,
        id_no: "xxxx xx2 3",
        name: "Jai",
        stream: "MEDICO",
        transaction_count: 5,
    },
    {
        id: 3,
        id_no: "xxxx xx2 3",
        name: "Jai",
        stream: "General",
        transaction_count: 3,
    },
];


const StudentTransactions = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [selectedStreams, setSelectedStreams] = useState([]);


    const [filters, setFilters] = useState({
        Class: '10th',
        Stream: 'IIT',
    });

    const classData = Array.from({ length: 10 }, (_, i) => ({
        label: `Class ${i + 1}`,
        value: `class${i + 1}`,
    }));

    const streamsData = ['IIT', 'Medico', 'General'].map((sec) => ({
        label: sec,
        value: sec,
    }));

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

            <div className="d-flex flex-column flex-md-row gap-3 my-3">
                <div className="w-25 w-md-25">
                    <SelectionCard
                        title="Classes"
                        data={classData}
                        type="checkbox"
                        selected={selectedClasses}
                        onChange={setSelectedClasses}
                        name="classes"
                    />
                </div>
                <div className="w-25 w-md-25">
                    <SelectionCard
                        title="Section"
                        data={streamsData}
                        type="checkbox"
                        selected={selectedStreams}
                        onChange={setSelectedStreams}
                        name="sections"
                    />
                </div>
                {/* Table */}
                <div className="w-100 w-md-50">
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

export default StudentTransactions
