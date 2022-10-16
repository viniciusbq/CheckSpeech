import React from 'react';
import style from './Contact.module.css';
const Contact = () => {
  return (
    <div>
      <h1>Contato</h1>
      <form className={style.form}>
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
