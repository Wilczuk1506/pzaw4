import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Form from './Form';
import MyOwnTable from './MyOwnTable';
import Gallery from './Task1/Gallery';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form />
    <MyOwnTable/>
    <Gallery />
  </React.StrictMode>
);