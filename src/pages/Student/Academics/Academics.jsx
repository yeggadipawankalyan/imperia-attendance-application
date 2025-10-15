import React, { useState } from 'react';
import TabSwitcher from '../../../components/TabSwitcher/TabSwitcher';
import ClassAcademics from './ClassAcademics/ClassAcademics';
import StudentAcademics from './StudentAcademics/StudentAcademics';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('class');

  const tabs = [
    { label: 'Class Academics', value: 'class' },
    { label: 'Student Academics', value: 'student' }
  ];

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="mt-2">
      <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="mt-2">
        {activeTab === 'class' && <ClassAcademics /> }
        {activeTab === 'student' && <StudentAcademics /> }
      </div>
    </div>
  );
};

export default Academics;
