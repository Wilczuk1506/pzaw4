import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Form from './Task0/Form';
import Gallery from './Task1/Gallery';
import Task2 from './Task2/Task2';
import Task3 from './Task3/Task3';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form />
    <Gallery />
    <Task2 />
    <Task3 />
  </React.StrictMode>
);