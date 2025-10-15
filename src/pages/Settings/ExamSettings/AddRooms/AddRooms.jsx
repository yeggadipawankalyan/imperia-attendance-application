import React, { useState } from 'react';
import SearchInput from '../../../../components/SearchInput/SearchInput';
import MyButton from '../../../../components/Button/Button';
import DynamicFormModal from '../../../../components/Modals/ClassModal/DynamicFormModal';
import DataTable from '../../../../components/Table/DataTable';
import { FiPlus, FiEye, FiEdit } from 'react-icons/fi';
import StatusBadge from '../../../../components/StatusBadge/StatusBadge';
import BackButton from '../../../../components/BackButton/BackButton';

const AddRooms = () => {
    const [searchValue, setSearchValue] = useState("");
    const [showModal, setShowModal] = useState(false);

    const [roomData, setRoomData] = useState([
        {
            id: '1',
            roomNumber: 'B-01',
            totalBenches: 4,
            numRows: 4,
            numCols: 3,
            capacity: 1,
            status: 'Active'
        },
        {
            id: '2',
            roomNumber: 'B-02',
            totalBenches: 4,
            numRows: 4,
            numCols: 3,
            capacity: 3,
            status: 'Active'
        }
    ]);

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleAddRoom = () => {
        setShowModal(true);
    };

    const handleFormSubmit = (newData) => {
        const formattedData = {
            ...newData,
            id: Date.now().toString(),
            status: 'Active'
        };
        setRoomData((prev) => [...prev, formattedData]);
    };

    const handleStatusDisplay = (status) => {
        return <StatusBadge status={status} />;
    };

    const columns = [
        { label: "Room Numbers", key: "roomNumber" },
        { label: "Total Benches", key: "totalBenches" },
        { label: "No. of Rows", key: "numRows" },
        { label: "No.of Columns", key: "numCols" },
        { label: "Siting capacity", key: "capacity" },
        { label: "Status", key: "status" }
    ];

    const actions = (row) => (
        <div className="d-flex align-items-center gap-2">
            <FiEye role="button" title="View" />
            <FiEdit role="button" title="Edit" />
            <span className="text-primary fw-semibold" role="button">Assign</span>
        </div>
    );

    const filteredRooms = roomData.filter(room =>
        room.roomNumber.toLowerCase().includes(searchValue.toLowerCase())
    );

    // transform status value before sending to DataTable
    const transformedData = filteredRooms.map(room => ({
        ...room,
        status: handleStatusDisplay(room.status)
    }));

    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="d-flex align-items-center gap-3">
                    <BackButton text="" path="/settings/exam-settings" />
                    <h2 className="mb-0 brinavv-color heading">Rooms Capacity</h2>
                </div>
            </div>

            <div className="d-flex justify-content-end mb-3 gap-2 align-items-center">
                <div className="w-25">
                    <SearchInput
                        value={searchValue}
                        onChange={handleSearchChange}
                        placeholder="Search Room..."
                    />
                </div>
                <MyButton onClick={handleAddRoom} active={true}>
                    <FiPlus className="me-1" />
                </MyButton>
            </div>

            <DataTable
                columns={columns}
                data={transformedData}
                actions={actions}
            />

            <DynamicFormModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                onSubmit={handleFormSubmit}
                title="Add Room"
                submitLabel="Add"
                fields={[
                    {
                        name: "roomNumber",
                        label: "Room Number",
                        type: "text",
                        placeholder: "Enter room number",
                        required: true
                    },
                    {
                        name: "totalBenches",
                        label: "Total Benches",
                        type: "number",
                        required: true
                    },
                    {
                        name: "numRows",
                        label: "No. of Rows",
                        type: "number",
                        required: true
                    },
                    {
                        name: "numCols",
                        label: "No.of Columns",
                        type: "number",
                        required: true
                    },
                    {
                        name: "capacity",
                        label: "Siting capacity",
                        type: "number",
                        required: true
                    }
                ]}
            />
        </div>
    );
};

export default AddRooms;
