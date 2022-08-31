import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';

const rootElement = document.querySelector('#root');

// ReactDOM.render(<App />, rootElement);

setTimeout(() => {
  ReactDOM.render(<App />, rootElement);
}, 5000);
