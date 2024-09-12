import 'bootstrap/dist/css/bootstrap.min.css';
// app/support/page.js
import React from 'react';
import ContactForm from '../../components/ContactForm';
import styles from '../../styles/page.module.css'; // Import the CSS module

const Support = () => {
  return (
 
    <div className={styles.container}>
      <ContactForm/>

    </div>
  );
};

export default Support;
