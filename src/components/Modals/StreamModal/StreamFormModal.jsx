import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function StreamFormModal({
  show,
  handleClose,
  onSubmit,
  initialData = null,
}) {
  const [formData, setFormData] = useState({
    name: "",
    active: false,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        active: initialData.active || false,
      });
    } else {
      setFormData({ name: "", active: false });
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
    setFormData({ name: "", active: false });
    handleClose();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!initialData) {
      setFormData({ name: "", active: false });
    }
    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={close}
      centered
      contentClassName="rounded-4"
    >
      <Form onSubmit={handleFormSubmit}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fs-5 brinavv-color">
            {initialData ? "Update Stream" : "Add New Stream"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3">
            <div className="d-flex align-items-center">
              <Form.Label className="text-nowrap fs-6 w-25 mb-0">
                Stream Name
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter stream name"
                className="w-75 input-focus"
                autoFocus
                required
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <div className="d-flex align-items-center">
              <Form.Label className="text-nowrap fs-6 w-25 mb-0">
                Active
              </Form.Label>
              <Form.Check
                type="checkbox"
                name="active"
                checked={formData.active}
                onChange={handleChange}
                className="ms-2"
              />
            </div>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer className="border-0">
          <Button variant="primary border-0" type="submit" style={{ backgroundColor: "#800000" }}>
            {initialData ? "Update" : "Add"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
