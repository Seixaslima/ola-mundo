import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

import React from 'react';

export default function MenuLinks({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.linkDestacado : ''}`
      }
      end
    >
      {children}
    </NavLink>
  );
}
