import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.scss';

import logo from '../../assets/logo.svg';

const Profile = () => (
  <div className="profile-container">
    <header>
      <img src={logo} alt="Be The Hero" />
      <span>Bem vinda, APAD</span>

      <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
      <button type="button">
        <FiPower size={18} color="#e02041" />
      </button>
    </header>

    <h1>Casos cadastrados</h1>

    <ul>
      <li>
        <strong>CASO:</strong>
        <p>
          Cachorrinho
        </p>

        <strong>DESCRIÇÃO:</strong>
        <p>
          Magrelin descrição Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptate veniam quos perspiciatis cupiditate a necessitatibus
          vitae laborum ab consequatur, doloremque excepturi beatae sunt officiis
          id quam iure debitis,
          laudantium dolorem.
        </p>

        <strong>VALOR:</strong>
        <p>R$ 120,00</p>

        <button type="button">
          <FiTrash2 size={20} color="#a8a8b3" />
        </button>
      </li>
      <li>
        <strong>CASO:</strong>
        <p>
          Cachorrinho
        </p>

        <strong>DESCRIÇÃO:</strong>
        <p>
          Magrelin descrição Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptate veniam quos perspiciatis cupiditate a necessitatibus
          vitae laborum ab consequatur, doloremque excepturi beatae sunt officiis
          id quam iure debitis,
          laudantium dolorem.
        </p>

        <strong>VALOR:</strong>
        <p>R$ 120,00</p>

        <button type="button">
          <FiTrash2 size={20} color="#a8a8b3" />
        </button>
      </li>
      <li>
        <strong>CASO:</strong>
        <p>
          Cachorrinho
        </p>

        <strong>DESCRIÇÃO:</strong>
        <p>
          Magrelin descrição Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptate veniam quos perspiciatis cupiditate a necessitatibus
          vitae laborum ab consequatur, doloremque excepturi beatae sunt officiis
          id quam iure debitis,
          laudantium dolorem.
        </p>

        <strong>VALOR:</strong>
        <p>R$ 120,00</p>

        <button type="button">
          <FiTrash2 size={20} color="#a8a8b3" />
        </button>
      </li>
      <li>
        <strong>CASO:</strong>
        <p>
          Cachorrinho
        </p>

        <strong>DESCRIÇÃO:</strong>
        <p>
          Magrelin descrição Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptate veniam quos perspiciatis cupiditate a necessitatibus
          vitae laborum ab consequatur, doloremque excepturi beatae sunt officiis
          id quam iure debitis,
          laudantium dolorem.
        </p>

        <strong>VALOR:</strong>
        <p>R$ 120,00</p>

        <button type="button">
          <FiTrash2 size={20} color="#a8a8b3" />
        </button>
      </li>
      <li>
        <strong>CASO:</strong>
        <p>
          Cachorrinho
        </p>

        <strong>DESCRIÇÃO:</strong>
        <p>
          Magrelin descrição Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptate veniam quos perspiciatis cupiditate a necessitatibus
          vitae laborum ab consequatur, doloremque excepturi beatae sunt officiis
          id quam iure debitis,
          laudantium dolorem.
        </p>

        <strong>VALOR:</strong>
        <p>R$ 120,00</p>

        <button type="button">
          <FiTrash2 size={20} color="#a8a8b3" />
        </button>
      </li>
    </ul>
  </div>
);

export default Profile;
