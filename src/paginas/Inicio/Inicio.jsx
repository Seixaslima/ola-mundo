import React from 'react';
import styles from './Inicio.module.css';
import posts from 'json/posts.json';
import PostCards from 'componentes/PostCards/PostCards';

export default function Inicio() {
  return (
    <ul className={styles.posts}>
      {posts.map(post => {
        return (
          <li key={post.id}>
            <PostCards post={post} />
          </li>
        );
      })}
    </ul>
  );
}
