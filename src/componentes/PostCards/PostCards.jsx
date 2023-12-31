import { Link } from 'react-router-dom';
import styles from './PostCards.module.css';

import React from 'react';
import BotaoPrincipal from 'componentes/BotaoPrincipal/BotaoPrincipal';

export default function PostCards({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Foto de capa do post"
          className={styles.capa}
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  );
}
