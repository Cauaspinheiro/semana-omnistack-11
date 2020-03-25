import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.scss';

import logoImg from '../../assets/logo.svg';
import heroesPng from '../../assets/heroes.png';

const Logon = () => (
  <div className="logon-container">
    <section className="form">
      <img src={logoImg} alt="Be The Hero" />
      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="Seu ID" />
        <button className="button" type="submit">Entrar</button>

        <a href="/register">
          <FiLogIn size={16} color="#E02041" />
          Não tenho cadastro
        </a>
      </form>
    </section>

    <img src={heroesPng} alt="Heroes" />
  </div>

);

export default Logon;
