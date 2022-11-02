import React from 'react';
import style from './Contact.module.css';

import logo from '../../img/price.png';

const Contact = () => {
  return (
    <div className={style.all}>
      <img className={style.foto} src={logo} alt="logo" height="700px" />

      <form className={style.form}>
        <h1 className={style.conta}>Contato</h1>
        <label for="nome">Nome:</label>
        <input
          type="text"
          id="nomeid"
          placeholder="Digite seu nome..."
          required="required"
          name="nome"
        />
        <label for="fone">Fone:</label>
        <input
          type="tel"
          id="foneid"
          placeholder="(xx)xx-xx-xx-xx"
          name="fone"
        />
        <label for="email">Email:</label>
        <input
          type="email"
          id="emailid"
          placeholder="fulano@mail.com"
          name="email"
        />
        <textarea placeholder="Deixe sua opnião"></textarea>

        <input
          type="submit"
          className={style.enviar}
          onclick="Enviar();"
          value="Enviar"
        />
      </form>
    </div>
  );
};

export default Contact;
