import React, {useState} from 'react'
import TabSwitcher from '../../../components/TabSwitcher/TabSwitcher'
import AdmissionRequest from './AdmissionRequest/AdmissionRequest';
import PayNow from './PayNow/PayNow';

export default function MakePayment() {
  const [activeTab, setActiveTab] = useState('admission');

  const tabs = [
    { label: 'Admission Request', value: 'admission' },
    { label: 'Pay Now', value: 'pay' },
  ];

  return (
    <div className='mt-3'>
      <TabSwitcher
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Conditional Rendering Based on Active Tab */}
      <div className="mt-3">
        {activeTab === 'admission' && <AdmissionRequest /> }
        {activeTab === 'pay' && <PayNow /> }
      </div>
    </div>
  );
}
