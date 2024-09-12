"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
// app/support/page.js
import React from 'react';
import ContactForm from '../../components/ContactForm';
import styles from '../../styles/page.module.css'; // Import the CSS module
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import Link from 'next/link';

const Support = () => {
  return (
<div>
    {/* Hero Section */}
    <section className="hero bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Streamline Your Printer Setup with Expert Support</h1>
        <p className="lead">Your go-to resource for easy and effective HP printer setup, troubleshooting, and maintenance.</p>
        <img src="/images/hp6.png" alt="HP Printer Setup" className="img-fluid mt-4" />
      </div>
    </section>

    {/* Setup Guide Section */}
    <section className="setup-guide py-5">
      <div className="container">
        <h2 className="text-center mb-4">Easy Printer Setup Guide</h2>
        <p className="text-center">Setting up your HP printer has never been easier. Follow our step-by-step guide to get your printer up and running in no time.</p>
        <img src="/images/hp1.png" alt="Setup Guide" className="img-fluid mx-auto d-block mt-4" />
        <ol className="list-unstyled mt-4">
          <li><strong>Unbox the printer and place it on a stable surface.</strong></li>
          <li>Connect the power cord and turn on the printer.</li>
          <li>Install the ink cartridges carefully.</li>
          <li>Load the paper into the input tray.</li>
          <li>Connect the printer to your computer via Wi-Fi or USB.</li>
          <li>Install the necessary drivers and print a test page.</li>
        </ol>
      </div>
    </section>

    {/* Troubleshooting Tips Section */}
    <section className="troubleshooting bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Troubleshooting Tips</h2>
        <p className="text-center">Encountering issues with your printer? Check out our troubleshooting tips for quick solutions to common problems.</p>
        <img src="/images/Troubleshooting.jpg" alt="Troubleshooting Tips" className="img-fluid mx-auto d-block mt-4" />
        <ul className="list-unstyled mt-4">
          <li><strong>Paper Jams:</strong> Check for any stuck paper and clear the jam.</li>
          <li><strong>Connectivity Issues:</strong> Ensure your printer is connected to the correct network or port.</li>
          <li><strong>Print Quality:</strong> Run the print head cleaning utility if your prints are streaky.</li>
        </ul>
      </div>
    </section>

    {/* Maintenance Tips Section */}
    <section className="maintenance py-5">
      <div className="container">
        <h2 className="text-center mb-4">Printer Maintenance Tips</h2>
        <p className="text-center">Keep your printer in top shape with these maintenance tips to ensure longevity and optimal performance.</p>
        <img src="/images/hp1.png" alt="Maintenance Tips" className="img-fluid mx-auto d-block mt-4" />
        <ul className="list-unstyled mt-4">
          <li>Regularly clean the print heads to prevent clogging.</li>
          <li>Replace ink or toner cartridges before they run out.</li>
          <li>Keep the printer in a dust-free environment.</li>
          <li>Perform routine maintenance checks using the printer’s built-in tools.</li>
        </ul>
      </div>
    </section>

    {/* Driver Downloads Section */}
    <section className="drivers bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Driver and Software Downloads</h2>
        <p className="text-center">Ensure you have the latest drivers and software for your HP printer to ensure smooth operation.</p>
        <img src="/images/hp1.png" alt="Driver Downloads" className="img-fluid mx-auto d-block mt-4" />
        <p className="text-center mt-4">Download the latest drivers and software for your specific printer model.</p>
<p className='text-center mt-4'><DownloadButton/></p>        
      </div>
    </section>

    {/* Customer Testimonials Section */}
    <section className="testimonials py-5">
      <div className="container">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Jane Doe</h5>
                <p className="card-text">"The setup guide was incredibly easy to follow. I had my printer up and running in no time. Highly recommend!"</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">John Smith</h5>
                <p className="card-text">"Great troubleshooting tips. Fixed my connectivity issue quickly. Thanks for the help!"</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Emily Johnson</h5>
                <p className="card-text">"The maintenance tips are very useful. My printer has never worked better. Excellent support site!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="faq bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions (FAQs)</h2>
        <div className="accordion" id="faqAccordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  How do I connect my printer to Wi-Fi?
                </button>
              </h5>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
              <div className="card-body">
                To connect your printer to Wi-Fi, go to the printer's settings menu, select the network settings option, and follow the prompts to connect to your Wi-Fi network.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Why is my printer not printing?
                </button>
              </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#faqAccordion">
              <div className="card-body">
                If your printer is not printing, check if the printer is properly connected to your computer or network, ensure there is paper and ink or toner, and verify that the printer is set as the default printer.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  How do I clean the print heads?
                </button>
              </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#faqAccordion">
              <div className="card-body">
                To clean the print heads, access the printer’s maintenance menu and select the option to clean the print heads. Follow the on-screen instructions to complete the process.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Blog Section */}
    <section className="blog py-5">
      <div className="container">
        <h2 className="text-center mb-4">Latest Blog Posts</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="/images/hp1.png" className="card-img-top" alt="Blog Post 1" />
              <div className="card-body">
                <h5 className="card-title">How to Improve Print Quality</h5>
                <p className="card-text">Learn simple tips and tricks to enhance the quality of your prints and make them look professional.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="/images/hp1.png" className="card-img-top" alt="Blog Post 2" />
              <div className="card-body">
                <h5 className="card-title">Troubleshooting Printer Errors</h5>
                <p className="card-text">Find out how to resolve common printer errors and get back to printing quickly.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="/images/hp1.png" className="card-img-top" alt="Blog Post 3" />
              <div className="card-body">
                <h5 className="card-title">Essential Printer Maintenance</h5>
                <p className="card-text">Discover the best practices for maintaining your printer to ensure its longevity and performance.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="contact bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
    </div>

  );
};

export default Support;

// pages/printer-setup.js

import Head from 'next/head';
import PrinterSetupClient from '../../components/PrinterSetupClient';
import DownloadButton from '../../components/DownloadButton';

