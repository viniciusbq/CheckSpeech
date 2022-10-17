import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
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
      </ul>{' '}
      <p className={styles.copy_right}>
        <span>CheckSpeechAI</span> &copy; 2022
      </p>
      <Link to="/"></Link>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/solutions">Soluções</Link>
        </li>
        <li className={styles.item}>
          <Link to="/clients">Clientes</Link>
        </li>
        <li className={styles.item}>
          <Link to="/prices">Preços</Link>
        </li>
        <li className={styles.item}>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
