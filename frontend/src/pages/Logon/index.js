import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.scss';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import heroesPng from '../../assets/heroes.png';

const Logon = () => {
  const [id, setId] = useState(localStorage.getItem('ongId'));

  const history = useHistory();

  async function handleLogon(e) {
    if (e) e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente');
    }
  }

  useEffect(() => {
    if (id) history.push('/profile');
  }, []);

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form onSubmit={handleLogon}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Seu ID"
            required
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesPng} alt="Heroes" />
    </div>

  );
};

export default Logon;
