import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import SelectedFilters from '../../../../../../components/FilterSelector/SelectedFilters'
import BackButton from '../../../../../../components/BackButton/BackButton'
import SubjectCard from '../../../../../../components/SubjectCard/SubjectCard';


const subjectData = [
    {
        subject: 'Telugu',
        lessons: 12,
        topics: 12,
        hours: 12,
    },
    {
        subject: 'Hindi',
        lessons: 10,
        topics: 8,
        hours: 9,
    },
    {
        subject: 'English',
        lessons: 10,
        topics: 8,
        hours: 9,
    },
    {
        subject: 'Math',
        lessons: 15,
        topics: 14,
        hours: 13,
    },
    {
        subject: 'Science',
        lessons: 18,
        topics: 16,
        hours: 17,
    },
    {
        subject: 'Social',
        lessons: 9,
        topics: 7,
        hours: 6,
    },
];

const AssignSubjects = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const stream = location.state?.stream || 'Unknown';
    const className = location.state?.className || 'Class';

    const filters = {
        Class: className,
        Stream: stream,
    };

    const handleViewMore = (subject) => {
        navigate('add-subject-content', {
            state: {
                subject,
                className,
                stream,
            }
        });
    };

    return (
        <div>
            <div>
                <BackButton text="" path="/settings/academics/add-course-content/class-content" />
            </div>

            <div className='my-3'>
                <SelectedFilters filters={filters} />
            </div>

            <div className="row g-4 mx-5">
                {subjectData.map((item, index) => (
                    <div className="col-12 col-sm-6 col-lg-4" key={index}>
                        <SubjectCard {...item} onViewMore={() => handleViewMore(item.subject)} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AssignSubjects
