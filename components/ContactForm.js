// components/ContactForm.js
"use client"
import { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import DownloadButton from './DownloadButton';  // Adjust the path as needed

const printerModels = [
  "HP ColorJet Printer",
  "HP Designjet Printer",
  "HP Deskjet Printer",
  "HP Envy Printer",
  "HP Inkjet Printer",
  "HP LaserJet Printer",
  "HP latex Printer",
  "HP Officejet Printer",
  "HP Scitex Large Format Printer",
  "HP SmartTank All-In-One Printer",
  // Add more models as needed
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    email: '' // Changed from phoneNumber to email
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModalMessage('Thank you for contacting us. Our technician will reach you shortly.');
      } else {
        setModalMessage('There was an error submitting the form. Please try again.');
      }
    } catch {
      setModalMessage('There was an error submitting the form. Please try again.');
    } finally {
      setShowModal(true);
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            aria-required="true"
            required
          />
        </Form.Group>

        <Form.Group controlId="formModel" className="mb-3">
          <Form.Label>Printer Model Number</Form.Label>
          <Form.Control
            as="select"
            name="model"
            value={formData.model}
            onChange={handleChange}
            aria-required="true"
            required
          >
            <option value="">Select a model</option>
            {printerModels.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            aria-required="true"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalMessage}</p>
          <DownloadButton/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ContactForm;
