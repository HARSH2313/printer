import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Primary Navigation Section */}
      <div className={styles.primaryNav}>
        <nav className={styles.navLinks}>
          <div className={styles.navItem}><Link href="/">         
        </Link>
            <Link href="/">Explore</Link>
          <Link href="/support">Support</Link>
        <Link href="/software-drivers">Software & Drivers</Link>
        <Link href="/troubleshooting">Troubleshooting</Link>
        <Link href="/contact-us">Contact Us</Link>
        </div>
        </nav>
        
      </div>

      
    </header>
  );
};

export default Header;
