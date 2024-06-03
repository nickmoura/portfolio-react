import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/bootstrap-template.css';
import './index.css';
import App from './App';
//import './assets/scripts/main.js'
//import './assets/vendor/bootstrap/js/bootstrap.bundle.js'
//import './assets/vendor/bootstrap/js/bootstrap.esm.js'
//import './assets/vendor/bootstrap/js/bootstrap.js'
//import './assets/vendor/glightbox/js/glightbox.js'
//import './assets/vendor/php-email-form/validate.js'
//import './assets/vendor/purecounter/purecounter_vanilla.js'
//import './assets/vendor/swiper/swiper-bundle.min.js'
//import './assets/vendor/typed.js/typed.cjs'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
