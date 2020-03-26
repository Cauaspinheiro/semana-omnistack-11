import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.scss';

import logoImg from '../../assets/logo.svg';

const NewIncidents = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [value, setValue] = useState();

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title, description, value,
    };

    try {
      await api.post('/incidents', data, {
        headers: {
          id: localStorage.getItem('ongId'),
        },
      });

      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente');
    }
  }

  return (
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
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default NewIncidents;
