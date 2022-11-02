import React from 'react';
import background from '../../img/home.png';

import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import style from './Amostra.module.css';

export const Amostra = () => {
  const commands = [
    {
      command: 'lisa limpar tela',
      callback: ({ resetTranscript }) => resetTranscript(),
    },
    {
      command: 'lisa pesquisar sobre * no google',
      callback: (site) => {
        window.open(`https://www.google.com/search?q=${site}`);
      },
    },
    {
      command: 'lisa cor *',
      callback: (cor) => {
        document.body.style.background = cor;
        if (cor === 'Black')
          document.getElementById('h1-text').style.color = 'white';
        else document.getElementById('h1-text').style.color = 'black';
      },
    },
  ];

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition)
    return <span>Seu navegador não é compativel com SpeechRecognition.</span>;

  return (
    <div className={style.cont}>
      <img src={background} alt="casa" height="500px" />
      <h1 className={style.amos}>Amostra</h1>
      <div className={style.background}>
        <h1 className={style.h1_style} id="h1-text">
          {transcript}
        </h1>
      </div>
      <div className={style.all}>
        <button
          className={style.btn_rec}
          onClick={SpeechRecognition.startListening({ continuous: true })}
        >
          Começar a gravar
        </button>
        <button
          className={style.btn_rec}
          onClick={SpeechRecognition.stopListening}
        >
          Parar de gravar
        </button>
        <button className={style.btn_rec} onClick={resetTranscript}>
          Resetar campos
        </button>
      </div>
    </div>
  );
};
