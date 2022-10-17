import React from 'react';

import style from './Home.module.css';

import background from '../img/home.png';
import Clients from './Seções/Clients';
import Solutions from './Seções/Solutions';
import Prices from './Seções/Prices';
import Contact from './Seções/Contact';
const Home = () => {
  return (
    <div className={style.tit} id="home">
      <div className={style.home}>
        Conheça o <br />
        <span>CheckSpeech AI</span>
      </div>
      <div>
        <p className={style.foto}>
          <img src={background} alt="casa" height="700px" />{' '}
          <h1 className={style.about}>
            &emsp;&emsp;O CheckSpeech AI é um conjunto de APIs de conversão de
            fala em textos, bem como a interpretação do sentimento dominante nos
            dizeres. Nossa solução é treinada em mais de 500.000 horas de
            áudios, transcritos por humanos de uma ampla variedade de idades,
            nacionalidades, sotaques e níveis de instruções A API é
            comercializada no modelo SAAS (software as a service).
          </h1>
        </p>
        <br />{' '}
      </div>

      <section>
        <Solutions />
      </section>
      <section>
        <Clients />
      </section>
      <section>
        <Prices />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
