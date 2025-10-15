import React from 'react'
import StatusCard from '../../../../../components/StatusCard/StatusCard';
import MyButton from '../../../../../components/Button/Button';
import { FaCalendarAlt } from 'react-icons/fa';

const feeStats = [
    { title: 'Total Fee', amount: 45000 },
    { title: 'School Fee', amount: 30000 },
    { title: 'Transport', amount: 15000 },
];

const feeData = [
    { term: "Term 1", amount: 15000, cgst: 0, sgst: 0, discount: 15 },
    { term: "Term 2", amount: 15000, cgst: 0, sgst: 0, discount: 15 },
    { term: "Term 3", amount: 15000, cgst: 0, sgst: 0, discount: 15 },
];

const totalAmount = feeData.reduce((sum, row) => sum + row.amount, 0);
const afterDiscount = totalAmount - totalAmount * 0.15;

const discountPercent = 10;
const discountAmount = (totalAmount * discountPercent) / 100;
const totalAfterDiscount = totalAmount - discountAmount;

const overallFeeData = [
    {
        title: "School fees",
        amount: 45000,
        cgst: 0,
        sgst: 0,
        discountPercent: 15,
    },
    {
        title: "Transport fee",
        amount: 35000,
        cgst: 0,
        sgst: 0,
        discountPercent: 10,
    },
];

const lateFee = {
    title: "Late fee",
    amount: 0,
    cgst: 0,
    sgst: 0,
    discountPercent: 0,
};

const calculateDiscountAmount = (amount, percent) =>
    (amount * percent) / 100;

const totalDiscountAmount = overallFeeData.reduce(
    (acc, item) =>
        acc + calculateDiscountAmount(item.amount, item.discountPercent),
    0
);

const totalFinalAmount = overallFeeData.reduce(
    (acc, item) =>
        acc + (item.amount - calculateDiscountAmount(item.amount, item.discountPercent)),
    0
);

const IndividualFeeDetails = () => {


    return (
        <div>
            <div className="d-flex justify-content-between">
                {feeStats.map((stat, index) => (
                    <StatusCard
                        key={index}
                        title={stat.title}
                        amount={stat.amount}
                        textAlign="start"
                    />
                ))}
            </div>
            {/* Button Row */}
            <div className="d-flex justify-content-end">
                <div className='d-flex algin-items-center gap-2'>
                    <MyButton variant="maroon">
                        <FaCalendarAlt className="me-2" />
                        Calendar
                    </MyButton>
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

            {/*School Fee Particulars Table */}
            <div className="col-lg-9 my-4">
                <h6 className="mb-3 ms-3 fw-semibold">School Fee Particulars</h6>
                <div className="table-responsive border rounded-3">
                    <table className="table m-0">
                        <thead className="table-light">
                            <tr className="text-center align-middle">
                                <th className='fw-medium py-2'>#</th>
                                <th className='fw-medium'>Installment</th>
                                <th className='fw-medium'>Amount</th>
                                <th className='fw-medium'>CGST</th>
                                <th className='fw-medium'>SGST</th>
                                <th className='fw-medium'>Discount(%)</th>
                                <th className='fw-medium'>Actual amount</th>
                                <th className='fw-medium'>After Discount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feeData.map((item, index) => {
                                const discounted = item.amount - (item.amount * item.discount) / 100;
                                return (
                                    <tr className="text-center align-middle" key={index}>
                                        <td className='py-3'>{index + 1}</td>
                                        <td>{item.term}</td>
                                        <td>{item.amount.toFixed(2)}</td>
                                        <td>{item.cgst.toFixed(2)}</td>
                                        <td>{item.sgst.toFixed(2)}</td>
                                        <td>{item.discount}%</td>
                                        <td>{item.amount.toFixed(2)}</td>
                                        <td>{discounted.toFixed(2)}</td>
                                    </tr>
                                );
                            })}

                            {/* Actual Fee Row */}
                            <tr className="text-center align-middle ">
                                <td colSpan="1" ></td>
                                <td colSpan="1" className="text-start ps-5 fw-semibold">Actual fee</td>
                                <td colSpan="1"></td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>{totalAmount.toFixed(2)}</td>
                                <td>{afterDiscount.toFixed(2)}</td>
                            </tr>

                            {/* Total Fee Row */}
                            <tr className="text-end">
                                <td colSpan="1" ></td>
                                <td colSpan="6" className="text-start fw-medium ps-5">
                                    TOTAL Fee
                                </td>
                                <td className="text-center">{afterDiscount.toFixed(2)}</td>
                            </tr>

                            {/* Discount Type Row */}
                            <tr className="text-start">
                                <td colSpan="1" ></td>
                                <td className="fw-semibold text-start border-end-0 ps-5">Discount Type</td>
                                <td className="text-muted border-start-0">General discount</td>
                                <td className="text-muted border-start-0">15%</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

            {/* Transport Fee Particulars Table */}
            <div className="col-lg-9 my-4">
                <h6 className="mb-3 ms-3 fw-semibold">Transport Fee Particulars</h6>
                <div className="table-responsive border rounded-3">
                    <table className="table m-0">
                        <thead className="table-light">
                            <tr className="text-center align-middle">
                                <th className='fw-medium py-2'>#</th>
                                <th className='fw-medium'>Installment</th>
                                <th className='fw-medium'>Amount</th>
                                <th className='fw-medium'>CGST</th>
                                <th className='fw-medium'>SGST</th>
                                <th className='fw-medium'>Discount(%)</th>
                                <th className='fw-medium'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feeData.map((item, index) => (
                                <tr className="text-center align-middle" key={index}>
                                    <td className='py-3'>{index + 1}</td>
                                    <td>{item.term}</td>
                                    <td>{item.amount.toFixed(2)}</td>
                                    <td>{item.cgst.toFixed(2)}</td>
                                    <td>{item.sgst.toFixed(2)}</td>
                                    <td>{item.discount.toFixed(2)}%</td>
                                    <td>{item.amount.toFixed(2)}</td>
                                </tr>
                            ))}

                            {/* Actual Fee */}
                            <tr className="text-start fw-semibold">
                                <td colSpan="1" className=""></td>
                                <td colSpan="5" className="text-start ps-5">Actual fee</td>
                                <td className="text-center">{totalAmount.toFixed(2)}</td>
                            </tr>

                            {/* Discount Amount */}
                            <tr className="text-start fw-semibold">
                                <td colSpan="1" className=""></td>
                                <td className="text-start ps-5">Discount Amount</td>
                                <td colSpan="4" className=""></td>
                                <td className="text-muted">
                                    <span className="">{discountPercent.toFixed(2)}% </span><span className="ms-3 pe-3">{discountAmount.toFixed(2)}</span>
                                </td>
                            </tr>

                            {/* Total Fee */}
                            <tr className="text-end fw-semibold">
                                <td colSpan="1" className=""></td>
                                <td colSpan="5" className="text-start ps-5">TOTAL Fee</td>
                                <td className="text-center">{totalAfterDiscount.toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Overall Fees Table*/}
            <div className="col-lg-9">
                <h6 className="mb-3 ms-3 fw-semibold">Overall Fees</h6>
                <div className="table-responsive border rounded-3">
                    <table className="table m-0">
                        <thead className="table-light">
                            <tr className="text-center align-middle">
                                <th className='fw-medium py-2'>#</th>
                                <th className='fw-medium'>Installments</th>
                                <th className='fw-medium'>Amount</th>
                                <th className='fw-medium'>CGST</th>
                                <th className='fw-medium'>SGST</th>
                                <th className='fw-medium'>Discount(%)</th>
                                <th className='fw-medium'>Amount Discount Amount</th>
                                <th className='fw-medium pe-4'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {overallFeeData.map((item, index) => {
                                const discountAmount = calculateDiscountAmount(item.amount, item.discountPercent);
                                const finalTotal = item.amount - discountAmount;
                                return (
                                    <tr key={index} className="text-center align-middle">
                                        <td className='py-3'>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.amount.toFixed(2)}</td>
                                        <td>{item.cgst.toFixed(2)}</td>
                                        <td>{item.sgst.toFixed(2)}</td>
                                        <td>{item.discountPercent.toFixed(2)}%</td>
                                        <td>{discountAmount.toFixed(2)}</td>
                                        <td className='pe-4'>{finalTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                                    </tr>
                                );
                            })}

                            {/* Late Fee Row */}
                            <tr className="text-center align-middle">
                                <td></td>
                                <td className='fw-semibold'>{lateFee.title}</td>
                                <td>{lateFee.amount.toFixed(2)}</td>
                                <td>{lateFee.cgst.toFixed(2)}</td>
                                <td>{lateFee.sgst.toFixed(2)}</td>
                                <td>{lateFee.discountPercent.toFixed(2)}%</td>
                                <td>0.00</td>
                                <td>0.00</td>
                            </tr>

                            {/* Discount Amount Summary Row */}
                            <tr className="fw-semibold text-end">
                                <td colSpan="1" className=""></td>
                                <td colSpan="6" className="text-start ">Discount Amount</td>
                                <td className='pe-5'>{totalDiscountAmount.toFixed(2)}</td>
                            </tr>

                            {/* TOTAL Fee Summary Row */}
                            <tr className="fw-semibold text-end">
                                <td colSpan="7" className="text-start ps-5">TOTAL Fee</td>
                                <td className='pe-5'>{totalFinalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default IndividualFeeDetails
