import React from 'react'
import MyButton from '../../../../../components/Button/Button';
import { FaCalendarAlt } from 'react-icons/fa';
import { FiEye, FiEdit } from "react-icons/fi";

const Invoices = () => {

    const feeData = [
        { mode: "Cash", receipt: "191006897003", date: "05-Jun-2024", head: "Caution", amount: 1000 },
        { mode: "Online", receipt: "191006897003", date: "05-Jun-2024", head: "Reservation", amount: 7000 },
        { mode: "Cash", receipt: "191006897003", date: "05-Jun-2024", head: "Study Material", amount: 13900 },
        { mode: "Cash", receipt: "191006897003", date: "05-Jun-2024", head: "Reservation", amount: 15000 },
        { mode: "Online", receipt: "191006897003", date: "05-Jun-2024", head: "Reservation", amount: 1400 },
        { mode: "Cash", receipt: "191006897003", date: "05-Jun-2024", head: "Tuition Fee-1", amount: 20400 },
        { mode: "Cash", receipt: "191006897003", date: "05-Jun-2024", head: "Event & Celebrations", amount: 1200 },
        { mode: "Online", receipt: "191006897003", date: "05-Jun-2024", head: "Tuition Fee-1", amount: 13600 },
        { mode: "Online", receipt: "191006897003", date: "05-Jun-2024", head: "Tuition Fee-1", amount: 13600 },
        { mode: "Cash", receipt: "191006897003", date: "05-Jun-2024", head: "Picnic", amount: 1000 },
    ];

    const total = feeData.reduce((acc, item) => acc + item.amount, 0);

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                {/* Mode of Pay Dropdown */}
                <div className="d-flex align-items-center gap-5">
                    <label htmlFor="modeSelect" className="mb-0 ms-4 fw-normal" style={{ minWidth: "100px" }}>
                        Mode Of Pay
                    </label>
                    <select id="modeSelect" className="form-select input-focus" style={{ minWidth: "200px" }}>
                        <option>Select</option>
                        <option>Cash</option>
                        <option>Online</option>
                        <option>Card</option>
                    </select>
                </div>

                {/* Date Display Button */}
                <div className="d-flex justify-content-end">
                    <div className='d-flex algin-items-center gap-2'>
                        <MyButton variant="maroon">
                            <FaCalendarAlt className="me-2" />
                            Calendar
                        </MyButton>
                    </div>
                </div>
            </div>

            <div style={{ lineHeight: '1.2' }}>
                <p><span className='brinavv-color'>Faculty Id No:</span> 1002</p>
                <p><span className='brinavv-color'>Name:</span> Rahul Raj</p>
                <p><span className='brinavv-color'>Department:</span> 5</p>
                <p><span className='brinavv-color'>Subject:</span> General</p>
                <p><span className='brinavv-color'>Designation:</span> B</p>
                <p><span className='brinavv-color'>Discount Type:</span> Principal discount</p>
            </div>

            {/* Fee Particulars Table  */}
            <div className='col-lg-9' >
                <h6 className="fw-semibold my-4 ms-4">Fee Particulars</h6>
                <div className="table-responsive border rounded-4" >
                    <table className="table m-0">
                        <thead className="table-light">
                            <tr className="text-start align-middle">
                                <th className='fw-medium py-3'>#</th>
                                <th className='fw-medium'>Mode of Pay</th>
                                <th className='fw-medium'>Receipt No.</th>
                                <th className='fw-medium'>Trans. Date</th>
                                <th className='fw-medium'>Head</th>
                                <th className='fw-medium'>Amount</th>
                                <th className='fw-medium'>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feeData.map((item, index) => (
                                <tr key={index} className="text-start align-middle">
                                    <td className='py-3'>1</td>
                                    <td>{item.mode}</td>
                                    <td>{item.receipt}</td>
                                    <td>{item.date}</td>
                                    <td>{item.head}</td>
                                    <td>{item.amount}</td>
                                    <td>
                                        <div className="d-flex justify-content-start gap-2">
                                            <FiEye className="icon-btn" />
                                            <FiEdit className="icon-btn" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            <tr className="fw-medium text-start">
                                <td colSpan="4" className="border-0"></td>
                                <td>Total</td>
                                <td>{total.toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Invoices
