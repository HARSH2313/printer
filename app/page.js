import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/page.module.css'; // Import the CSS module
import ContactForm from '../components/ContactForm';
import PrinterSetupClient from '../components/PrinterSetupClient';

const HomePage = () => {
  return (

    <div className={styles.container}>
      {/* Welcome Section */}
      <div className={styles.welcomeSection}>
      <h1 className={styles.section1}>
      <img src="/images/hp.png" alt="Printer Setup" className={styles.image1} /> Streamline Your Printer Setup with Expert Support</h1>
        <p>Getting a new computer or printer is exciting but it can be a huge headache to set it all up.we offer an computer setup and printer installation service for New Jersey residents so we'll get you up and running in no time at all.</p>
      </div>

      {/* Printer Setup Section */}
      <div className={styles.section}>
        <div className={styles.imageContainer}>
          <img src="/images/hp2.png" alt="Printer Setup" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2>Home Printer Setup</h2>
          <p>
A printer is a must-have for any busy family or work-at-home professional. From printing homework and coloring pictures to important work documents, modern printers are high quality, affordable, and easy to use.

However, even the easiest printers to set up can be a hassle if something doesn't work as expected. Wifi enabled printers for home in particular can be a challenge to get set up and working properly on your home network.

Whether you have an HP, Epson, Canon, or other printer or scanner, our experienced IT technicians can get it set up, install the drivers and software on your computers and other devices, and troubleshoot any problems.

If you've just bought a new home printer that needs setting up, your printer has stopped working, or you need to get a printer working with a new computer, we can help. Get in touch with the team at Dave's Computers and we'll schedule a time to vist that's convenient for you.

</p>
        </div>
      </div>

      {/* Troubleshooting Section */}
      <div className={styles.section}>
        <div className={styles.textContainer}>
          <h2>Troubleshooting</h2>
          <p>Experiencing issues with your printer? We offer step-by-step troubleshooting to help you diagnose and fix common problems, so you can get back to printing without delays.</p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/hp1.png" alt="Printer Troubleshooting" className={styles.image} />
        </div>
      </div>

      {/* Maintenance Section */}
      <div className={styles.section}>
        <div className={styles.imageContainer}>
          <img src="/images/hp3.png" alt="Printer Maintenance" className={styles.image} />
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/hp4.png" alt="Printer Maintenance" className={styles.image} />
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/hp5.png" alt="Printer Maintenance" className={styles.image} />
        </div>
        
      </div>

      {/* Contact Us Section */}
      <div className={styles.contactSection}>
        <PrinterSetupClient/>       
        <ContactForm/>
      </div>
    </div>
    );
};

export default HomePage;
