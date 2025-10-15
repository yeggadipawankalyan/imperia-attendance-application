import { useState, useEffect } from "react";
import { Modal, Form } from "react-bootstrap";
import MyButton from "../../Button/Button";
import "./ClassFormModel.css";

export default function ClassFormModal({
  show,
  handleClose,
  onSubmit,
  initialData = null,
}) {
  const [formData, setFormData] = useState({
    className: "",
    isActive: false,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        className: initialData.className || "",
        isActive: initialData.isActive || false,
      });
    } else {
      setFormData({ className: "", isActive: false });
    }
  }, [initialData]);

 

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const close = () => {
    setFormData({ className: "", isActive: false });
    handleClose();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!initialData) {
      setFormData({ className: "", isActive: false });
    }
    handleClose();
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
          <Modal.Title className="heading brinavv-color">
            {initialData ? "Update Class" : "Add New Class"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3">
            <div className="d-flex align-items-center">
              <Form.Label className="text-nowrap text w-25 mb-0">
                Class Name
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter class name"
                className="w-75 input-focus"
                required
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <div className="d-flex align-items-center">
              <Form.Label className="text-nowrap text w-25 mb-0">
                Active
              </Form.Label>
              <Form.Check type="checkbox">
                <Form.Check.Input
                  type="checkbox"
                  name="active"
                  checked={formData.active}
                  onChange={handleChange}
                  className="checkbox input-focus"
                />
              </Form.Check>
            </div>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer className="bt">
          <MyButton active={true} onClick={handleFormSubmit}>{initialData ? "Update Class" : "Add Class"}</MyButton>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
