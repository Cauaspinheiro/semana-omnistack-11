import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.scss';

import logoImg from '../../assets/logo.svg';

const Register = () => (
  <div className="register-container">
    <div className="content">
      <section>
        <img src={logoImg} alt="Be The Hero" />

        <h1>Cadastro</h1>
        <p>
          Faça seu cadastro, entre na plataforma e ajude as pessoas a
          encontrarem os casos da sua ONG.
        </p>
        <Link className="back-link" to="/">
          <FiArrowLeft size={16} color="#E02041" />
          Não tenho cadastro
        </Link>
      </section>
      <form>
        <input placeholder="Nome da sua ONG" />
        <input type="email" placeholder="Email da sua ONG" />
        <input type="tel" placeholder="WhatsApp" />

        <div className="input-group">
          <input placeholder="Cidade" />
          <input placeholder="UF" style={{ width: 80 }} />
        </div>

        <button type="submit" className="button">Cadastrar</button>
      </form>
    </div>
  </div>
);

export default Register;