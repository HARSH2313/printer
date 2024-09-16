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
          <p>A reliable printer is essential for any busy family or work-from-home professional. Whether you need to print homework, artwork, or critical work documents, today's printers offer high quality, affordability, and ease of use. However, setting up Wi-Fi-enabled printers can sometimes be tricky.

If you have an HP Officejet, HP Envy, HP Deskjet, or HP ColorJet, our experienced IT technicians are here to help. We specialize in getting your printer up and running smoothly by installing drivers and software, connecting to your home network, and troubleshooting any issues.

Whether you've just purchased a new printer, your current printer has stopped working, or you need to connect your printer to a new computer, we've got you covered. Contact us to schedule a convenient time for a visit from our team, and let us handle the technical details so you can get back to printing with ease.</p>
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
