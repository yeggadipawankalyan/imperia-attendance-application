import React from 'react';
import { Form } from 'react-bootstrap';
import MyButton from '../../../../components/Button/Button';

const RaiseRefund = () => {
    const textFields = [
        { label: 'Student Name', type: 'text', placeholder: 'Enter' },
        { label: 'Student ID', type: 'text', placeholder: 'Enter' },
    ];

    const dropdownLabels = ['Class', 'Section', 'Stream'];

    const otherFields = {
        reason: 'Reason For Refund',
        bank: 'Select Bank Details',
        sameAccount: 'Same Account',
    };

    return (
        <div style={{ maxWidth: '500px' }}>
            <Form>
                {/* Text Fields */}
                {textFields.map((field, index) => (
                    <Form.Group className="row mb-3 align-items-center" key={index}>
                        <Form.Label className="col-4 col-form-label">{field.label}</Form.Label>
                        <div className="col-8">
                            <Form.Control className='input-focus' type={field.type} placeholder={field.placeholder} />
                        </div>
                    </Form.Group>
                ))}

                {/* Dropdown Fields */}
                {dropdownLabels.map((label, index) => (
                    <Form.Group className="row mb-3 align-items-center" key={index}>
                        <Form.Label className="col-4 col-form-label">{label}</Form.Label>
                        <div className="col-8">
                            <Form.Select className='input-focus'>
                                <option>Select</option>
                            </Form.Select>
                        </div>
                    </Form.Group>
                ))}

                {/* Reason for Refund */}
                <Form.Group className="row mb-3 align-items-start">
                    <Form.Label className="col-4 col-form-label">{otherFields.reason}</Form.Label>
                    <div className="col-8">
                        <Form.Control className='input-focus' as="textarea" rows={3} placeholder="Enter" />
                    </div>
                </Form.Group>

                {/* Select Bank Details */}
                <Form.Group className="row mb-3 align-items-center">
                    <Form.Label className="col-4 col-form-label">{otherFields.bank}</Form.Label>
                    <div className="col-8">
                        <Form.Select className='input-focus'>
                            <option>Select</option>
                        </Form.Select>
                    </div>
                </Form.Group>

                {/* Same Account */}
                <Form.Group className="row mb-3 align-items-center">
                    <Form.Label className="col-4 col-form-label">{otherFields.sameAccount}</Form.Label>
                    <div className="col-8">
                        {/* Future input/control can go here */}
                    </div>
                </Form.Group>

                {/* Submit Button */}
                <div className="text-end">
                    <MyButton variant="maroon" type="submit">
                        Submit
                    </MyButton>
                </div>

            </Form>
        </div>
    );
};

export default RaiseRefund;
