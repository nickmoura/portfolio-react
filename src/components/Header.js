import React from 'react';
import { Link } from 'react-router-dom';
import logoNick from '../assets/img/logonick.png';

const Header = () => {
  return (
	<header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><Link to="/" class="all-projects">Nick Moura</Link></h1>
         <a class="navbar-brand mx-auto" href="index.html"><img src={logoNick} alt="Logo" width="50" /></a>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Início</a></li>
          <li><a class="nav-link scrollto" href="#about">Sobre</a></li>
          <li class="dropdown"><a href="#work"><span>Projetos</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><Link to="/" class="all-projects">Página inicial</Link></li>
              <li><Link to="/calculadora">Calculadora</Link></li>
              <li><Link to="/agenda">Agenda de eventos</Link></li>
              <li><Link to="/buscador">Buscador de CEP</Link></li>
              <li><Link to="/moedas">Conversor de moedas</Link></li>
              <li><Link to="/conversor">Conversor de medidas</Link></li>
              <li><Link to="/login">Tela de login</Link></li>
              <li><a href="https://github-finder-taupe-five.vercel.app/">Buscador de usuários - GitHub</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#contact">Contato</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  );
};

export default Header;