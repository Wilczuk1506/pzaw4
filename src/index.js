import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Sci from './Sci';
import Temp from './Temp';
import Form from './Form';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form />
    <Temp />
    <Sci />
    <App />
  </React.StrictMode>
);