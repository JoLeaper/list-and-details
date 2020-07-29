import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

function Header() {
  return (
    <div className={styles.Header}>
      <Link to={'/'}><h1>Home</h1></Link>
    </div>
  );
}

export default Header;

