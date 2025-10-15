import React from 'react';
import { Form } from 'react-bootstrap';
import MyButton from '../../../components/Button/Button';

export default function PushNotifications() {
  const textFields = [
    { label: 'Student Name', type: 'text', placeholder: 'Enter' },
  ];
  const dropdownLabels = ['Class', 'Stream'];
  const otherFields = { reason: 'Message' };

  // ✅ Handle submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert('Submitted'); // show alert
  };

  return (
    <div className='my-3' style={{ maxWidth: '500px' }}>
      <Form onSubmit={handleSubmit}>
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

        {/* Message Textarea */}
        <Form.Group className="row mb-3 align-items-start">
          <Form.Label className="col-4 col-form-label">{otherFields.reason}</Form.Label>
          <div className="col-8">
            <Form.Control className='input-focus' as="textarea" rows={3} placeholder="Enter" />
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
}
