import React, { useState } from 'react'
import TabSwitcher from '../../../components/TabSwitcher/TabSwitcher'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overall');

  const tabs = [
    { label: 'Overall Dashboard', value: 'overall' },
    { label: 'Today Dashboard', value: 'today' },
  ];

  return (
    <div>
      <div className='my-2'>
        <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'overall' && (
          <div>
            <h4>Overall Dashboard Content</h4>
          </div>
        )}
        {activeTab === 'today' && (
          <div>
            <h4>Today Dashboard Content</h4>
          </div>
        )}
      </div>
    </div>
  );
}
