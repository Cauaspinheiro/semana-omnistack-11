import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.scss';

import logo from '../../assets/logo.svg';

const Profile = () => {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  async function handleLogOff() {
    localStorage.clear();
    history.push('/');
  }

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          id: localStorage.getItem('ongId'),
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente');
    }
  }

  useEffect(() => {
    api.get('/profile', {
      headers: {
        id: localStorage.getItem('ongId'),
      },
    }).then((response) => {
      setIncidents(response.data);
    });
  }, []);

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Be The Hero" />
        <span>
          Bem vinda,
          {' '}
          {localStorage.getItem('ongName')}
        </span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button" onClick={handleLogOff}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {
          incidents.map((incident) => (
            <li key={incident.id}>
              <strong>CASO:</strong>
              <p>
                {incident.title}
              </p>

              <strong>DESCRIÇÃO:</strong>
              <p>
                {incident.description}
              </p>

              <strong>VALOR:</strong>
              <p>
                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}
              </p>

              <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))
        }

      </ul>
    </div>
  );
};
export default Profile;
