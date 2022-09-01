import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import User from './User.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<User userId="facebook" />, rootElement);
