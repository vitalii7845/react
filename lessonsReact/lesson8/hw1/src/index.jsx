import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ConnectionStatus from './ConnectionStatus.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<ConnectionStatus />, rootElement);
