import React from 'react';
import styles from './Solutions.module.css';
const Solutions = () => {
  return (
    <div className={styles.sol}>
      <b>Soluções</b>
      <p>
        <u> Nosso produto é composto pelas seguintes soluções:</u>
        <li className={styles.item}>
          Transcrição de Áudio Assíncrono (áudio pré-gravado): API de
          transcrição de voz assíncrona para áudio pré-gravado. Temos uma das
          melhores engines de reconhecimento de fala do mundo! O recurso
          speech-to-text assíncrono é um parceiro estratégico para o seu
          negócio. Esteja você extraindo insights de áudio ou transcrevendo
          conteúdo em escala.
        </li>
        <li className={styles.item}>
          Transcrição de Áudio em tempo real (streaming): O recurso
          live-speech-to-text de transcrição ao vivo possibilita o uso de
          legendas em tempo real para o seu negócio. Nossas legendas garantem
          que as palestras e treinamentos ao vivo sejam acessíveis e possam ser
          arquivadas para uso futuro.
        </li>
        <li className={styles.item}>
          Identificação de Idiomas em áudios: Obtendo fala e insights a nível
          global. Nossa solução tem suporte a 52 idiomas.
        </li>
        <li className={styles.item}>
          Análise de sentimento a partir do áudio (áudio pré-gravado): Encontre
          os momentos mais importantes em trechos de falas, diferencie falas
          positivas e negativas e tome decisões de negócios mais assertivas com
          uma compreensão mais profunda.
        </li>
      </p>
    </div>
  );
};

export default Solutions;
