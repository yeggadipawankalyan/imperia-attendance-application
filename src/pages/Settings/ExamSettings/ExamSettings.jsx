import React from 'react'
import CardGrid from '../../../components/CardGrid/CardGrid'
import BackButton from '../../../components/BackButton/BackButton';

const cardsData = [
    {
        title: "Create Exams",
        description: "Set up and manage exam schedules, types, and formats.",
        link: "create-exams",
    },
    {
        title: "Add Exams Schedule",
        description: "Configure exam schedules and timings for different classes.",
        link: "add-exams-schedule",
    },
    {
        title: "Add Rooms",
        description: "Manage exam rooms and allocate them for different exams.",
        link: "add-rooms",
    },
];

const ExamSettings = () => {
    return (
        <div>
            <div className="d-flex gap-3">
                <BackButton iconPosition="left" path="/settings" className="bg-white shadow-lg" />
                <h2 className="brinavv-color heading underline-heading">
                    Exam Branch Settings
                </h2>
            </div>
            <CardGrid cards={cardsData} />
        </div>
    )
}

export default ExamSettings
