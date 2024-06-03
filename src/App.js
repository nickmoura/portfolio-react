import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Buscador from './pages/Buscador';
import Calculadora from './pages/Calculadora';
import Carrinho from './pages/Carrinho';
import Moedas from './pages/Moedas';
import Conversor from './pages/Conversor';
import Login from './pages/Login';
import Agenda from './pages/Agenda';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscador" element={<Buscador />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/moedas" element={<Moedas />} />
          <Route path="/conversor" element={<Conversor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agenda" element={<Agenda />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;