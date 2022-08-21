import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Status from './Status';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Status isOnline={true} />, rootElement);
