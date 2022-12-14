import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React from 'react';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>CheckSpeechAI</span> &copy; 2022
      </p>
    </footer>
  );
}

export default Footer;
