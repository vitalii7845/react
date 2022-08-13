import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElement = document.querySelector('#root');

const element = (
  <div className="greeting">
    <h1 className="greeting__title">Hello, world!</h1>
    <p className="greeting__text">I'm learning React</p>
  </div>
);

ReactDOM.render(element, rootElement);

// // react =>:
// const rootElement = document.querySelector('#root');
// const element = React.createElement(
//   'div',
//   { className: 'greeting' },
//   React.createElement('div', { className: 'greeting**title' }, 'Hello, world!'),
//   React.createElement('div', { className: 'greeting**text' }, "I'm learning React"),
// );
// ReactDOM.render(element, rootElement);
