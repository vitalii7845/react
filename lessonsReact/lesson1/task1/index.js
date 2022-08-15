// <div class ="greeting">Hello, React!</div>

/* eslint-disable no-undef */

const rootElement = document.querySelector('#root');

const greetingElem = React.createElement('div', { className: 'greeting' }, 'Hello, React!');

ReactDOM.render(greetingElem, rootElement);
