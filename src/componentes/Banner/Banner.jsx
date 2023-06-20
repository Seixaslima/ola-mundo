import React from 'react';
import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';

export default function Banner() {
  const minhaFoto = 'https://github.com/seixaslima.png';
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.titulo}>Olá mundo</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Lucas Seixas, estudante de
          Front-end na Alura. Aqui estou aprendendo mais sobre programação em
          React :)
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          src={circuloColorido}
          alt=""
          aria-hidden={true}
          className={styles.circuloColorido}
        />
        <img
          src={minhaFoto}
          alt="Foto de Lucas Seixas sorrindo"
          className={styles.minhaFoto}
        />
      </div>
    </div>
  );
}
