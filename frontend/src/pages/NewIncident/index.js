import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.scss';

import logoImg from '../../assets/logo.svg';

const NewIncidents = () => (
  <div className="new-incident-container">
    <div className="content">
      <section>
        <img src={logoImg} alt="Be The Hero" />

        <h1>Cadastrar novo caso</h1>
        <p>
          Descreva o detalhademente para encontrar um herói para resolver isso.
        </p>
        <Link className="back-link" to="/profile/ ">
          <FiArrowLeft size={16} color="#E02041" />
          Voltar para página inicial
        </Link>
      </section>
      <form>
        <input placeholder="Título do caso" required />
        <textarea placeholder="Descrição" required />
        <input
          placeholder="Valor em reais"
          required
          pattern="([0-9]{1,3}\.)?[0-9]{1,3},[0-9]{2}$"
        />

        <button type="submit" className="button">Cadastrar</button>
      </form>
    </div>
  </div>
);

export default NewIncidents;
