import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvidor } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvidor>
      <App />
    </AuthContextProvidor>
  </React.StrictMode>,
  document.getElementById('root')
);
