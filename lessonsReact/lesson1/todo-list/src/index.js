import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

// should render following html
// <h1 class="title">Todo List</h1>

const element = <h1 className="title">Todo List</h1>;
ReactDOM.render(element, rootElement);
