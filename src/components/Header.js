import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/buscador">Buscador</Link></li>
          <li><Link to="/calculadora">Calculadora</Link></li>
          <li><Link to="/carrinho">Carrinho</Link></li>
          <li><Link to="/moedas">Moedas</Link></li>
          <li><Link to="/conversor">Conversor</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/agenda">Agenda</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;