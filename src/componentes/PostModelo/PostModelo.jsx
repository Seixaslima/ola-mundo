import styles from './PostModelo.module.css';

import React from 'react';

export default function PostModelo({ fotoCapa, titulo, children }) {
  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${fotoCapa})` }}
      />

      <h2 className={styles.titulo}>{titulo}</h2>
      <div className={styles.postConteudoContainer}>{children}</div>
    </article>
  );
}
