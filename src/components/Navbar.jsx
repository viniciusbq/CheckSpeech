import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

import logo from '../img/logo.png';
import styles from './navbar.module.css';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="logo" height="50px" />
        </Link>
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
      </Container>
    </div>
  );
};

export default Navbar;
