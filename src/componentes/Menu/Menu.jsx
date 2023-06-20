import MenuLinks from 'componentes/MenuLinks/MenuLinks';
import styles from './Menu.module.css';

import React from 'react';

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLinks to="/">Inicio</MenuLinks>
        <MenuLinks to="/sobremim">Sobre Mim</MenuLinks>
      </nav>
    </header>
  );
}
