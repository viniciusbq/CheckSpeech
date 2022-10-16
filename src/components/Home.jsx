import React from 'react';

import style from './Home.module.css';

import background from '../img/home.png';

const Home = () => {
  return (
    <div className={style.tit} id="home">
      <div className={style.home}>
        Conheça o <br />
        <span>CheckSpeech AI</span>
      </div>
      <div className={style.foto}>
        <img src={background} alt="casa" height="800px" />
      </div>
      <div className={style.about}>
        O CheckSpeech AI é um conjunto de APIs de conversão de fala em textos,
        bem como a interpretação do sentimento dominante nos dizeres. Nossa
        solução é treinada em mais de 500.000 horas de áudios, transcritos por
        humanos de uma ampla variedade de idades, nacionalidades, sotaques e
        níveis de instruções A API é comercializada no modelo SAAS (software as
        a service).
      </div>
    </div>
  );
};

export default Home;
