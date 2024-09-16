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
            <Accordion.Body>To reset an HP Inkjet or OfficeJet printer to its factory settings, first ensure that the printer is powered on. For models with a touchscreen, tap the Setup icon, which usually looks like a gear or wrench. For those without a touchscreen, press the Setup or Menu button on the control panel. Navigate to the Restore Defaults or Factory Reset option and confirm the action when prompted. The printer will then reset and restart automatically.

For HP LaserJet printers, begin by turning on the printer. Press the Menu button and navigate to the Administration or Setup menu. Look for an option labeled Restore Factory Defaults or Reset Printer, select it, and confirm the reset. If required, restart the printer manually.

If you are using an HP DesignJet printer, ensure it is powered on, then access the menu. Navigate to Setup or Configuration and choose the Factory Reset option. Confirm the reset, and allow the printer to restart.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Why is my printer not connecting to Wi-Fi?</Accordion.Header>
            <Accordion.Body>If your printer isn't connecting to Wi-Fi, there are several steps you can take to troubleshoot the issue. First, ensure that your Wi-Fi network is functioning properly and that other devices can connect to it. Restarting your printer, router, and computer can often resolve connectivity issues. Check your printer's Wi-Fi settings to make sure it is turned on and connected to the correct network, and consider updating the printer’s firmware if there is an available update. Ensure your printer is within range of the Wi-Fi network and not obstructed by physical barriers or interference. Reconfiguring the wireless setup, either through the printer’s menu or a companion app, might also help. Additionally, verify that your printer has a unique IP address to avoid conflicts with other devices on the network and check that firewall or security settings aren’t blocking the connection. If none of these solutions work, try reinstalling the printer drivers and software on your computer. For specific guidance tailored to your printer model, consult us and We will help you with the setup.</Accordion.Body>
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
            <Link href="/troubleshooting" className="btn btn-primary">FAQs</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link href="/troubleshooting" className="btn btn-secondary">Contact Us</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link href="/troubleshooting" className="btn btn-success">Live Chat</Link>
          </ListGroup.Item>
        </ListGroup>
      </section>

      <section className="my-4">
        <h2 className="mb-3">Additional Resources</h2>
        <ListGroup>
          <ListGroup.Item>
            <Link href="/troubleshooting" className="btn btn-info">User Manuals</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link href="/troubleshooting" className="btn btn-info">Video Tutorials</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link href="/troubleshooting" className="btn btn-info">Maintenance Tips</Link>
          </ListGroup.Item>
        </ListGroup>
      </section>
    </Container>
  );
};

export default PrinterSetupClient;
