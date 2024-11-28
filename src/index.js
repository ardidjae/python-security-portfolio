import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PythonHackingPortfolio from './PythonHackingPortfolio';
import reportWebVitals from './reportWebVitals';

// Importez Tailwind CSS
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PythonHackingPortfolio />
  </React.StrictMode>
);

// Optionnel : si vous voulez mesurer les performances
reportWebVitals();