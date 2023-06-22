import React from 'react';
import styles from './Post.module.css';
import './Post.css';
import { useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'componentes/PostModelo/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import NaoEncontrado from 'paginas/NaoEncontrado/NaoEncontrado';
import PaginaPadrao from 'componentes/PaginaPadrao/PaginaPadrao';
import PostCards from 'componentes/PostCards/PostCards';

export default function Post() {
  const parametros = useParams();

  const post = posts.find(post => post.id === Number(parametros.id));
  const ids = posts
    .filter(post => post.id !== Number(parametros.id))
    .sort(post => Math.random() - 0.5);

  const favoritos = ids.length > 4 ? ids.slice(0, 4) : ids;
  console.log(favoritos);

  if (!post) {
    return <NaoEncontrado />;
  }

  return (
    <PaginaPadrao>
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
        <h2 className={styles.tituloOutrosPosts}>
          Outros posts que você pode gostar:
        </h2>
        <ul className={styles.postsRecomendados}>
          {favoritos.map(post => {
            return (
              <li key={post.id}>
                <PostCards post={post} />
              </li>
            );
          })}
        </ul>
      </PostModelo>
    </PaginaPadrao>
  );
}
