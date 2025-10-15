import React, { useState, useEffect } from 'react';
import BackButton from '../../../../components/BackButton/BackButton';
import DataTable from '../../../../components/Table/DataTable';
import CustomCheckbox from '../../../../components/CustomCheckBox/CustomCheckBox';
import MyButton from '../../../../components/Button/Button';

// Backend stream IDs
const streamMap = {
    IIT: '6854079ef5a7ac43a9764995',
    Medico: '6854079ff5a7ac43a9764998',
    General: '685407a0f5a7ac43a976499e',
};

const streamOptions = ['IIT', 'Medico', 'General'];

// Backend class IDs with names
const classData = [
    {
        id: '68540a68f5a7ac43a97649dd',
        className: 'Class 1',
    },
    {
        id: '685409faf5a7ac43a97649d4',
        className: 'Class 2',
    },
    {
        id: '68540a6cf5a7ac43a97649e1',
        className: 'Class 3',
    },
    {
        id: '68540a7af5a7ac43a97649e8',
        className: 'Class 4',
    },
    {
        id: '68540a85f5a7ac43a97649ee',
        className: 'Class 5',
    },
    {
        id: '68540a8ef5a7ac43a97649f4',
        className: 'Class 6',
    },
    {
        id: '68540a99f5a7ac43a97649fa',
        className: 'Class 7',
    },
    {
        id: '68540aa2f5a7ac43a9764a00',
        className: 'Class 8',
    },
    {
        id: '68540aacf5a7ac43a9764a06',
        className: 'Class 9',
    },
    {
        id: '68540ab6f5a7ac43a9764a0c',
        className: 'Class 10',
    },
];


const UpdateStremsClasses = () => {
    const [selectedClasses, setSelectedClasses] = useState({});
    const [streamSelections, setStreamSelections] = useState({});

    useEffect(() => {
        const stored = localStorage.getItem('assignedStreams');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                const classes = {};
                const streams = {};

                parsed.data.forEach((item) => {
                    classes[item.class_id] = true;
                    streams[item.class_id] = Object.entries(streamMap)
                        .filter(([name, id]) => item.streamId.includes(id))
                        .map(([name]) => name);
                });

                setSelectedClasses(classes);
                setStreamSelections(streams);
            } catch (err) {
                console.error('Failed to parse localStorage data:', err);
            }
        }
    }, []);

    const handleStreamChange = (classId, option) => {
        setStreamSelections((prev) => {
            const currentSelections = prev[classId] || [];

            const updatedSelections = currentSelections.includes(option)
                ? currentSelections.filter((val) => val !== option)
                : [...currentSelections, option];

            return {
                ...prev,
                [classId]: updatedSelections,
            };
        });
    };

    const columns = [
        {
            label: 'Classes',
            key: 'className',
            render: (_, row) => (
                <CustomCheckbox
                    checked={selectedClasses[row.id] || false}
                    onChange={(e) =>
                        setSelectedClasses((prev) => ({
                            ...prev,
                            [row.id]: e.target.checked,
                        }))
                    }
                    label={row.className}
                />
            ),
        },
        {
            label: 'Streams',
            key: 'streams',
            render: (_, row) => (
                <div className="d-flex gap-5">
                    {streamOptions.map((option) => (
                        <CustomCheckbox
                            key={option}
                            checked={streamSelections[row.id]?.includes(option) || false}
                            onChange={() => handleStreamChange(row.id, option)}
                            label={option}
                        />
                    ))}
                </div>
            ),
        },
    ];

    const handleSubmit = () => {
        const payload = {
            data: Object.entries(selectedClasses)
                .filter(([classId, isChecked]) => isChecked)
                .map(([classId]) => ({
                    class_id: classId,
                    streamId: (streamSelections[classId] || []).map(
                        (streamName) => streamMap[streamName]
                    ),
                })),
        };

        console.log('Payload to send:', payload);

        // ✅ Store in localStorage
        localStorage.setItem('assignedStreams', JSON.stringify(payload));
    };

    return (
        <div>
            <div className="d-flex align-items-center justify-content-start gap-3 mb-3">
                <BackButton
                    iconPosition="left"
                    path="/settings"
                    className="bg-white shadow-lg"
                />
                <h2 className="brinavv-color heading">Assign Streams</h2>
            </div>

            <div className='w-50'>
                <DataTable
                    columns={columns}
                    data={classData}
                    pagination={false}
                    showCheckBox={false}
                />

                <div className="d-flex justify-content-end mt-3">
                    <MyButton
                        onClick={handleSubmit}
                        variant="maroon"
                        active={true}
                        className="px-4"
                    >
                        Update
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default UpdateStremsClasses;
