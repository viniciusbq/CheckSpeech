import React from 'react';

import style from './Prices.module.css';
const Prices = () => {
  return (
    <div className={style.price}>
      <b>Preços</b>
      <div>
        <li className={style.ini}>
          <u>Beginner: R$29 por mês ou R$328 para uma compra anual.</u>
          <li className={style.item}>
            Transcrição de Áudio Assíncrono - 120 minutos (R$0,20 / minuto
            excedente)
          </li>
          <li className={style.item}>
            Transcrição de Áudio em tempo real - 90 minutos (R$0,40 / minuto
            excedente)
          </li>
          <li className={style.item}>
            Identificação de Idiomas em áudios - 200 minutos (R$0,05 / minuto
            excedente)
          </li>
          <li className={style.item}>
            Análise de sentimento a partir do áudio (áudio pré-gravado) - 120
            minutos (R$0,40 / minuto excedente)
          </li>
        </li>
        <li className={style.ini}>
          <u>Business: R$44 por mês ou R$499 para uma compra anual.</u>
          <li className={style.item}>
            Transcrição de Áudio Assíncrono - 200 minutos (R$0,15 / minuto
            excedente)
          </li>
          <li className={style.item}>
            Transcrição de Áudio em tempo real - 120 minutos (R$0,40 / minuto
            excedente)
          </li>
          <li className={style.item}>
            Identificação de Idiomas em áudios - 500 minutos (R$0,03 / minuto
            excedente)
          </li>
          <li className={style.item}>
            Análise de sentimento a partir do áudio (áudio pré-gravado) - 200
            minutos (R$0,35 / minuto excedente)
          </li>
        </li>
        <li className={style.ini}>
          <u> Enterprise: preço sob consulta. Link para form de contato.</u>
          <li className={style.item}>Preços especiais para grandes volumes.</li>
          <li className={style.item}>Prioridade no suporte técnico.</li>
          <li className={style.item}>Gestor de conta dedicado.</li>
        </li>
      </div>
    </div>
  );
};

export default Prices;
