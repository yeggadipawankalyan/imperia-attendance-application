import { useState, useEffect } from "react";
import { Modal, Form } from "react-bootstrap";
import MyButton from "../../Button/Button";
import "./ClassFormModel.css";
import CustomCheckbox from "../../CustomCheckBox/CustomCheckBox";

export default function DynamicFormModal({
  show,
  handleClose,
  onSubmit,
  title = "Form",
  initialData = {},
  fields = [],
  submitLabel = "Submit",
}) {
  const [formData, setFormData] = useState({});

  // ✅ FIX: use `show` to prevent unnecessary re-renders
  useEffect(() => {
    if (show) {
      const initState = {};
      fields.forEach((field) => {
        initState[field.name] =
          initialData?.[field.name] ??
          (field.type === "checkbox"
            ? false
            : field.type === "select"
            ? ""
            : "");
      });
      setFormData(initState);
    }
  }, [show, fields, initialData]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const close = () => {
    setFormData({});
    handleClose();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    close();
  };

  return (
    <Modal
      show={show}
      onHide={close}
      centered
      contentClassName="rounded-4 overflow-hidden"
    >
      <Form onSubmit={handleFormSubmit}>
        <Modal.Header closeButton className="primary-bg-color border-0 bb">
          <Modal.Title className="heading brinavv-color">{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {fields.map((field, idx) => (
            <Form.Group className="mb-3" key={idx}>
              <div className="d-flex align-items-center">
                <Form.Label className="text-nowrap text modal-width mb-0">
                  {field.label}
                </Form.Label>
                <div className="w-75">
                  {field.type === "checkbox" ? (
                    <CustomCheckbox
                      name={field.name}
                      checked={formData[field.name]}
                      onChange={handleChange}
                    />
                  ) : field.type === "select" ? (
                    <Form.Select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="input-focus"
                      required={field.required}
                    >
                      <option value="">Select</option>
                      {field.options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </Form.Select>
                  ) : field.type === "textarea" ? (
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="input-focus"
                      placeholder={field.placeholder || ""}
                      required={field.required}
                    />
                  ) : (
                    <Form.Control
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="input-focus"
                      placeholder={field.placeholder || ""}
                      required={field.required}
                    />
                  )}
                </div>
              </div>
            </Form.Group>
          ))}
        </Modal.Body>

        <Modal.Footer className="bt">
          <MyButton active={true} type="submit">
            {submitLabel}
          </MyButton>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
