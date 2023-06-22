import { Link } from 'react-router-dom';
import styles from './PostCards.module.css';

import React from 'react';

export default function PostCards({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          src={`./assets/posts/${post.id}/capa.png`}
          alt="Foto de capa do post"
          className={styles.capa}
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <button className={styles.botaoLer}>Ler</button>
      </div>
    </Link>
  );
}
