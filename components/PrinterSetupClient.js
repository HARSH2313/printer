// components/PrinterSetupClient.js

"use client";

import { Container, Row, Col, ListGroup, Button, Card, Accordion } from 'react-bootstrap';
import Link from 'next/link';
import DownLoadButton from "../components/DownloadButton"
const PrinterSetupClient = () => {
  return (
    <Container className="my-4">
    
      <section>
        <h2 className="mb-3">Step-by-Step Printer Setup Guide</h2>
        <Row>
          <Col md={12}>
            <ListGroup>
              <ListGroup.Item>
                <h5>Unbox and Prepare:</h5>
                <p>Carefully remove the printer from its box, including all protective packaging and tape. Set the printer on a stable surface near your computer and power source.</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Install Ink Cartridges:</h5>
                <p>Open the ink cartridge access door, insert the cartridges into their slots, and close the door.</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Load Paper:</h5>
                <p>Adjust the paper tray guides, load the paper, and ensure it’s aligned properly.</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Connect Your Printer:</h5>
                <ul>
                  <li><strong>Wired Connection:</strong> Connect the power cord and USB cable.</li>
                  <li><strong>Wireless Connection:</strong> Connect via Wi-Fi network and follow on-screen instructions.</li>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Install Printer Software:</h5>
                <p>Download and install the latest drivers
                    
                </p>
                <DownLoadButton/>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Print a Test Page:</h5>
                <p>Open the printer software and print a test page to verify setup.</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Configure Additional Features:</h5>
                <p>Customize print settings and set up advanced features like duplex printing.</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </section>

      <section className="my-4">
        <h2 className="mb-3">Troubleshooting Common Setup Issues</h2>
        <ListGroup>
          <ListGroup.Item>
            <strong>Printer Not Recognized:</strong> Check connections and restart devices.
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Paper Jams:</strong> Remove jammed paper and ensure proper loading.
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Poor Print Quality:</strong> Check ink levels and perform maintenance if needed.
          </ListGroup.Item>
        </ListGroup>
      </section>

      <section className="my-4">
        <h2 className="mb-3">Common Setup Questions</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How do I reset my printer to factory settings?</Accordion.Header>
            <Accordion.Body>
              To reset your printer to factory settings, navigate to the printer's settings menu and look for the option to restore default settings. Consult your printer’s user manual for detailed instructions.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Why is my printer not connecting to Wi-Fi?</Accordion.Header>
            <Accordion.Body>
              Ensure your printer is within range of your Wi-Fi network. Restart your router and printer, and try connecting again. If the issue persists, check for firmware updates or consult the printer’s support page.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I use third-party ink cartridges?</Accordion.Header>
            <Accordion.Body>
              While third-party ink cartridges may be compatible, using the manufacturer’s recommended cartridges ensures optimal performance and quality. Check your printer's warranty and compatibility guidelines before using third-party options.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>

      <section className="my-4">
        <h2 className="mb-3">Setup Checklist</h2>
        <Card>
          <Card.Body>
            <Card.Title>Printer Setup Checklist</Card.Title>
            <ListGroup>
              <ListGroup.Item>Unbox the printer and remove all packaging materials.</ListGroup.Item>
              <ListGroup.Item>Install ink cartridges correctly.</ListGroup.Item>
              <ListGroup.Item>Load paper into the paper tray.</ListGroup.Item>
              <ListGroup.Item>Connect the printer to your computer or network.</ListGroup.Item>
              <ListGroup.Item>Install the latest printer drivers and software.</ListGroup.Item>
              <ListGroup.Item>Print a test page to ensure proper setup.</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </section>

      <section className="my-4">
        <h2 className="mb-3">User Testimonials</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>John D.</Card.Title>
                <Card.Text>"The setup guide was straightforward and easy to follow. I had my printer up and running in no time!"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Emily R.</Card.Title>
                <Card.Text>"The troubleshooting section helped me resolve a connectivity issue quickly. Excellent support!"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Michael S.</Card.Title>
                <Card.Text>"Great resource for setting up my new printer. The checklist ensured I didn't miss any steps."</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="my-4">
        <h2 className="mb-3">Need Further Assistance?</h2>
        <p>Our support team is here to help you.</p>
        <ListGroup>
          <ListGroup.Item>
            <Link href="/faq" className="btn btn-primary">FAQs</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link href="mailto:support@example.com" className="btn btn-secondary">Contact Us</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link href="/live-chat" className="btn btn-success">Live Chat</Link>
          </ListGroup.Item>
        </ListGroup>
      </section>

      <section className="my-4">
        <h2 className="mb-3">Additional Resources</h2>
        <ListGroup>
          <ListGroup.Item>
            <Link href="/user-manuals" className="btn btn-info">User Manuals</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link href="/video-tutorials" className="btn btn-info">Video Tutorials</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link href="/maintenance-tips" className="btn btn-info">Maintenance Tips</Link>
          </ListGroup.Item>
        </ListGroup>
      </section>
    </Container>
  );
};

export default PrinterSetupClient;
