import React, {useState} from 'react'
import TabSwitcher from '../../../components/TabSwitcher/TabSwitcher';
import AllTransactions from './AllTransactions/AllTransactions';
import StudentTransactions from './StudentTransactions/StudentTransactions';

export default function AcademicsYear() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { label: 'All Transactions', value: 'all' },
    { label: 'Student Transactions', value: 'student' },
  ];

  const handleTabChange = (value) => {
    setActiveTab(value);
    // You can trigger any tab-specific logic here
    console.log("Switched to tab:", value);
  };

  return (
    <div className='mt-2'>
      <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Render tab-specific content */}
      <div className="mt-3">
        {activeTab === 'all' && <AllTransactions />}
        {activeTab === 'student' && <StudentTransactions />}
      </div>
    </div>
  );
}
