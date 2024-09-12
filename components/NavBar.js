// components/NavBar.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Explore</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/support">Support</Link>
    </nav>
  );
};

export default NavBar;
