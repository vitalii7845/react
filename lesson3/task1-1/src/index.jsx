import './search.scss';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';

const rootElem = document.querySelector('#root');
ReactDOM.render(<Search name="Tom" age={17} />, rootElem);
