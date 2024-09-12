// components/ContactForm.js
"use client"
import { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';

const printerModels = [
  "HP DeskJet 3755",
  "HP OfficeJet Pro 9015",
  "HP LaserJet Pro MFP M428fdw",
  "HP Envy 6055",
  "HP Tango X",
  // Add more models as needed
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    phoneNumber: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        setShowModal(true);
        setFormData({ name: '', model: '', phoneNumber: '' }); // Reset form
      } else {
        setModalMessage('There was an error submitting the form. Please try again.');
        setShowModal(true);
      }
    } catch (error) {
      setModalMessage('There was an error submitting the form. Please try again.');
      setShowModal(true);
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

        <Form.Group controlId="formPhoneNumber" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
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
