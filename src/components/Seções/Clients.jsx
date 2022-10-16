import React from 'react';

import style from './Clients.module.css';

import logo1 from '../../img/logos/Network-Color.svg';
import logo2 from '../../img/logos/Product-Color.svg';
import logo3 from '../../img/logos/RobotX-Color.svg';
import logo4 from '../../img/logos/Volume-Color.svg';
import logo5 from '../../img/logos/Waveless-Color.svg';
import logo6 from '../../img/logos/Nextmove-Color.svg';

const Clients = () => {
  return (
    <div className={style.tit}>
      <b> Clientes</b>
      <p className={style.p}>Veja quem já utiliza o CheckSpeech AI:</p>
      <div className={style.logos}>
        <p>
          <img src={logo1} alt="network" />
          <img src={logo2} alt="product" />
          <img src={logo3} alt="robot" />
        </p>
        <p className={style.logoss}>
          <img src={logo4} alt="volume" />
          <img src={logo5} alt="wave" />
          <img src={logo6} alt="nex" />
        </p>
      </div>
    </div>
  );
};

export default Clients;
