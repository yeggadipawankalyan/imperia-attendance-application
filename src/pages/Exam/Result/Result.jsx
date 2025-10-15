import React, { useState } from 'react';
import TabSwitcher from '../../../components/TabSwitcher/TabSwitcher';
import CheckResult from './CkeckResult/CheckResult'
import AddResult from './AddResult/AddResult';

const Result = () => {
    const [activeTab, setActiveTab] = useState('check');

    const tabs = [
        { label: 'Check Results', value: 'check' },
        { label: 'Add Results', value: 'add' },
    ];

    const handleTabChange = (tabValue) => {
        setActiveTab(tabValue);
    };


    return (
        <div className='my-2'>
            <div className='border-bottom py-1 mb-2'>
                <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
            </div>

            <div className="mt-3">
                {activeTab === 'check' && <CheckResult /> }
                {activeTab === 'add' && <AddResult />}

            </div>
        </div>
    );
};

export default Result;
