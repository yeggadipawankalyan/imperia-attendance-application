import React, { useState } from 'react'
import BackButton from '../../../../components/BackButton/BackButton';
import TabSwitcher from '../../../../components/TabSwitcher/TabSwitcher';
import IndividualFeeDetails from './IndividualFeeDetails/IndividualFeeDetails';
import AcademicYearTransactions from './AcademicYearTransactions/AcademicYearTransactions';
import Invoices from './Invoices/Invoices';

const StudentFeeDetails = () => {
    const [activeTab, setActiveTab] = useState("fee-details");

    const tabs = [
        { label: "Fee Details", value: "fee-details" },
        { label: "Academic Year Transactions", value: "academic-transactions" },
        { label: "Invoices", value: "invoices" },
        { label: "Reports", value: "reports" },
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case "fee-details":
                return <IndividualFeeDetails />;
            case "academic-transactions":
                return <AcademicYearTransactions />;
            case "invoices":
                return <Invoices />;
            case "reports":
                return <div>Reports content goes here</div>;
            default:
                return <IndividualFeeDetails />;
        }
    };

    return (
        <div>
            <div className="d-flex align-items-center gap-3">
                <BackButton text="" path="/fee/details" />
                <h2 className="mb-0 brinavv-color heading">Student Fee Details</h2>
            </div>
            {/* Tab Switcher */}
            <div className='d-flex justify-content-start align-items-center mt-3'>
                <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/*Render Tab Content */}
            <div className="p-3 mt-2">
                {renderTabContent()}
            </div>
        </div>
    )
}

export default StudentFeeDetails
