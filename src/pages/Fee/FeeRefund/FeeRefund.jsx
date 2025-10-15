import React, { useState } from 'react';
import TabSwitcher from '../../../components/TabSwitcher/TabSwitcher';
import RaiseRefund from './RaiseRefund/RaiseRefund';
import RefundRequest from './RefundRequest/RefundRequest';
import RefundStatus from './RefundStatus/RefundStatus';

export default function FeeRefund() {
  const [activeTab, setActiveTab] = useState('raise');

  const tabs = [
    { label: 'Raise Refund', value: 'raise' },
    { label: 'Request Refund', value: 'request' },
    { label: 'Refund Status', value: 'status' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'raise':
        return <RaiseRefund />;
      case 'request':
        return <RefundRequest />;
      case 'status':
        return <RefundStatus />;
      default:
        return <RaiseRefund />;
    }
  };

  return (
    <div className="mt-3">
      <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="mt-3">
        {renderTabContent()}
      </div>
    </div>
  );
}
