import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { Table, Form } from 'react-bootstrap';
import StatusCard from '../../../../components/StatusCard/StatusCard';
import StatusBadge from '../../../../components/StatusBadge/StatusBadge';
import MyButton from '../../../../components/Button/Button';
import PaymentTypeModal from '../../../../components/PaymentTypeModal/PaymentTypeModal';

const feeStats = [
    { title: 'Total Amount', amount: 900 },
    { title: 'Paid', amount: 5 },
    { title: 'Pending', amount: 5 },
    { title: 'Today Transactions', amount: 5 },
];

const feeDetails = [
    {
        term: "Term-1",
        actualFee: 10000,
        discount: 9000,
        lateFee: 0,
        paid: 10000,
        balance: 0,
        dueDate: "24-10-2024",
        status: "Paid",
    },
    {
        term: "Term-2",
        actualFee: 10000,
        discount: 9000,
        lateFee: 0,
        paid: 15000,
        balance: 5000,
        dueDate: "24-10-2024",
        status: "Paid",
    },
    {
        term: "Term-3",
        actualFee: 10000,
        discount: 9000,
        lateFee: 0,
        paid: 10000,
        balance: 0,
        dueDate: "24-10-2024",
        status: "Paid",
    },
];

const taxRows = [
    { label: "CGST", value: 0 },
    { label: "SGST", value: 0 },
];

const total = {
    actualFee: 30000,
    discount: 27000,
    lateFee: 0,
    paid: 10000,
    balance: 0,
};

const amountToPay = {
    actualFee: 15000,
    discount: 15000,
    lateFee: 15000,
    balance: 0,
};


const PayNow = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    return (
        <div>
            <div className="row gy-3 gap-2 align-items-center">
                {/* Pay For */}
                <div className="col-md-auto d-flex align-items-center">
                    <label className="mb-0 fw-medium me-2 text-nowrap">Pay For</label>
                    <select className="form-select rounded-2 input-focus" style={{ minWidth: '150px' }}>
                        <option>Select</option>
                        <option>Tuition</option>
                    </select>
                </div>

                {/* Term */}
                <div className="col-md-auto d-flex align-items-center">
                    <label className="mb-0 fw-medium me-2">Term</label>
                    <select className="form-select rounded-2 input-focus" style={{ minWidth: '150px' }}>
                        <option>Select</option>
                        <option>Term 1</option>
                    </select>
                </div>

                {/* Discount */}
                <div className="col-md-auto d-flex align-items-center">
                    <label className="mb-0 fw-medium me-2">Discount</label>
                    <select className="form-select rounded-2 input-focus" style={{ minWidth: '150px' }}>
                        <option>Select</option>
                        <option>10%</option>
                    </select>
                </div>

                {/* Search Bar */}
                <div className="col-md-auto d-flex align-items-center position-relative">
                    <FaSearch className="position-absolute start-0 ms-3 text-secondary" style={{ zIndex: 2 }} />
                    <input
                        type="text"
                        className="form-control ps-5 rounded-start input-focus"
                        placeholder="Search"
                        style={{ height: '38px', minWidth: '150px' }}
                    />
                    <button className="btn text-white fw-normal px-3 rounded-end" style={{ backgroundColor: '#800000', height: '38px' }}>
                        Search
                    </button>
                </div>
            </div>

            <div className='my-2' style={{ lineHeight: '1.2' }}>
                <p><span className='brinavv-color'>Student Id No:</span> 1002</p>
                <p><span className='brinavv-color'>Class:</span> 5</p>
                <p><span className='brinavv-color'>Student Name:</span> Rahul Raj</p>
                <p><span className='brinavv-color'>Stream:</span> General</p>
            </div>

            <div className="d-flex justify-content-start gap-2">
                {feeStats.map((stat, index) => (
                    <StatusCard
                        key={index}
                        title={stat.title}
                        amount={stat.amount}
                        textAlign="start"
                    />
                ))}
            </div>

            <h6 className='brinavv-color'>Fee Particulars</h6>

            <div className="table-responsive border rounded-3">
                <Table>
                    <thead>
                        <tr className="align-middle text-start bg-light fw-medium" style={{ fontSize: '14px' }}>
                            <th className="py-2">
                                <Form.Check
                                    type="checkbox"
                                    className="m-0"
                                    style={{ transform: 'scale(1.1)' }}
                                />
                            </th>
                            <th>Particulars</th>
                            <th>Actually Fee</th>
                            <th>After Discount</th>
                            <th>Late Fee</th>
                            <th>Amount Paid</th>
                            <th>Balance</th>
                            <th>Due Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feeDetails.map((item, i) => (
                            <tr key={i} className="align-middle text-start" style={{ fontSize: '14px' }}>
                                <td className="py-3">
                                    <Form.Check
                                        type="checkbox"
                                        className="m-0"
                                        style={{ transform: 'scale(1.1)' }}
                                    />
                                </td>
                                <td>{item.term}</td>
                                <td>{item.actualFee.toLocaleString()}</td>
                                <td>{item.discount.toLocaleString()}</td>
                                <td>{item.lateFee}</td>
                                <td>{item.paid.toLocaleString()}</td>
                                <td>{item.balance.toLocaleString()}</td>
                                <td>{item.dueDate}</td>
                                <td>
                                    <StatusBadge status={item.status} />
                                </td>
                            </tr>
                        ))}

                        {taxRows.map((row, idx) => (
                            <tr key={`tax-${idx}`} className="align-middle text-start" style={{ fontSize: '14px' }}>
                                <td></td>
                                <td className="py-3">{row.label}</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td colSpan={2}></td>
                            </tr>
                        ))}

                        <tr className="fw-medium border-top border-bottom border-dark align-middle text-start" style={{ fontSize: '14px' }}>
                            <td colSpan={2}>TOTAL AMOUNT</td>
                            <td className="py-3">{total.actualFee.toLocaleString()}</td>
                            <td>{total.discount.toLocaleString()}</td>
                            <td>{total.lateFee}</td>
                            <td>{total.paid.toLocaleString()}</td>
                            <td colSpan={4}>{total.balance}</td>
                        </tr>

                        <tr className="fw-medium align-middle text-start" style={{ fontSize: '14px' }}>
                            <td colSpan={2} className="py-3">Amount to be Pay</td>
                            <td>{amountToPay.actualFee.toLocaleString()}</td>
                            <td>{amountToPay.discount.toLocaleString()}</td>
                            <td>{amountToPay.lateFee.toLocaleString()}</td>
                            <td colSpan={4}>{amountToPay.balance}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div className="d-flex align-items-center gap-4 mt-4 ms-5">
                <span className="fw-medium small">Custom Pay</span>
                <div className="d-flex">
                    <input
                        type="text"
                        className="form-control form-control-sm me-2"
                        placeholder="NA"
                        style={{ width: 'auto', fontSize: '14px', height: '38px' }}
                    />
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Out of ₹10,000/-"
                        style={{ width: 'auto', fontSize: '14px', height: '38px' }}
                    />
                </div>
            </div>

            <div className='my-2'>
                <p style={{ marginLeft: 150 }}><span className='brinavv-color'>Note: </span>Enter value in terms of value</p>
            </div>

            <div className="d-flex justify-content-start">
                <MyButton onClick={() => setShowModal(true)} className="w-100" variant="maroon">
                    Pay Now
                </MyButton>
            </div>

            {/* Modal Component */}
            <PaymentTypeModal show={showModal} handleClose={handleClose} />

        </div>
    )
}

export default PayNow
