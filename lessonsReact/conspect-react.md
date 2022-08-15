// "devDependencies" => :

npm i -D @babel/cli @babel/core @babel/plugin-transform-react-jsx @babel/preset-env @babel/preset-react babel-loader clean-webpack-plugin css-loader html-webpack-plugin loader mini-css-extract-plugin node-sass sass sass-loader style-loader webpack webpack-cli webpack-dev-server webpack-progress-plugin @babel/plugin-proposal-class-properties

// "dependencies" =>:
npm i -S core-js react react-dom

\***\*\*\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*\*\*** Lesson1 **\*\***\*\*\*\***\*\***\*\***\*\***\*\*\*\***\*\***

Library: React
Framework: Angular

https://reactjs.org/docs/cdn-links.html

// dev script=> :

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

// prod script=>:

<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

fail index.html :

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello, React!</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="./index.js"></script>
  </body>
</html>

fail index.js:
// <div class ="greeting">Hello, React!</div>

// imperative:
// const rootElement = document.querySelector('#root');
// const greetingElem = document.createElement('div');
// greetingElem.classList.add('greeting');
// greetingElem.textContent = 'Hello, React!';
// rootElement.append(greetingElem);

/_ eslint-disable no-undef _/
// with react =>:
const rootElement = document.querySelector('#root');

const greetingElem = React.createElement('div', { className: 'greeting' }, 'Hello, React!');

ReactDOM.render(greetingElem, rootElement);

//

// <div class="greeting">
// <div class="greeting__title">Hello, world!</div>
// <div class="greeting__text">I\'m learning React</div>
// </div>; \*/}

// const rootElement = document.querySelector('#root');
// const wrapperElem = document.createElement('div');
// wrapperElem.classList.add('greeting');
// const titleElem = document.createElement('div');
// titleElem.textContent = 'Hello, world!';
// titleElem.classList.add('greeting**title');
// const greetingTextElem = document.createElement('div');
// greetingTextElem.textContent = "I'm learning React";
// greetingTextElem.classList.add('greeting**text');
// wrapperElem.append(titleElem, greetingTextElem);
// rootElement.append(wrapperElem);

// react =>:
/_ eslint-disable no-undef _/

const rootElement = document.querySelector('#root');
const element = React.createElement(
'div',
{ className: 'greeting' },
React.createElement('div', { className: 'greeting**title' }, 'Hello, world!'),
React.createElement('div', { className: 'greeting**text' }, "I'm learning React"),
);
// can with array or without array
ReactDOM.render(element, rootElement);

//

// task2 lesson:

// const rootElement = document.querySelector('#root');
// const renderGreeting = elem => {
// const containerElem = document.createElement('div');
// containerElem.classList.add('greeting');
// const titleElem = document.createElement('h1');
// titleElem.classList.add('greeting**title');
// titleElem.textContent = 'Hello, world!';
// const textElem = document.createElement('p');
// textElem.classList.add('greeting**text');
// textElem.textContent = "I'm learning React";
// containerElem.append(titleElem, textElem);
// elem.append(containerElem);
// };
// renderGreeting(rootElement);

// react =>:

const rootElement = document.querySelector('#root');

const renderGreeting = elem => {
const containerElem = React.createElement(
'div',
{ className: 'greeting' },
React.createElement('h1', { className: 'greeting**title' }, 'Hello, world!'),
React.createElement('p', { className: 'greeting**text' }, "I'm learning React"),
);
ReactDOM.render(containerElem, elem);
};

renderGreeting(rootElement);

//
=> jsx
{
"name": "task3",
"version": "1.0.0",
"main": "index.js",
"scripts": {
"build": "webpack -p",
"start": "webpack-dev-server --open"
},
"keywords": [],
"author": "",
"license": "ISC",
"devDependencies": {
"@babel/cli": "^7.10.3",
"@babel/core": "^7.10.3",
"@babel/plugin-transform-react-jsx": "^7.10.3",
"babel-loader": "^8.1.0",
"css-loader": "^3.6.0",
"html-webpack-plugin": "^4.3.0",
"style-loader": "^1.2.1",
"webpack": "^4.43.0",
"webpack-cli": "^3.3.12",
"webpack-dev-server": "^3.11.0"
},
"dependencies": {
"react": "^16.13.1",
"react-dom": "^16.13.1"
},
"description": ""
}
//=>
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
const path = require('path');

module.exports = {
entry: './src/index.js',
output: {
path: path.resolve(\_\_dirname, './review_build'),
},
module: {
rules: [
{
test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.js$/,
use: ['babel-loader'],
},
],
},
plugins: [
new HtmlWebpackPlugin({
template: './src/index.html',
}),
],
};
//=>
{
"plugins": ["@babel/plugin-transform-react-jsx"]
}
//
//=> create-react-app
//

npm i -g create-react-app
create-react-app task4-1
npm start
Starts the development server.

npm run build
Bundles the app into static files for production.

npm test
Starts the test runner.

npm run eject
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

cd task4-1
npm start

npm run build
The build folder is ready to be deployed.
You may serve it with a static server:
npm install -g serve
serve -s build

/// Lesson2 JSX ///
checked => defaultChecked
class => className
innerHTML => dangerouslySetInnerHTML // =>

function createMarkup() {
return {\_\_html: 'First &middot; Second'};
}
function MyComponent() {
return <div dangerouslySetInnerHTML={createMarkup()} />;
}

//
for => htmlFor
//
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
//
function formatName(user) {
return user.firstName + ' ' + user.lastName;
}

const user = {
firstName: 'Harper',
lastName: 'Perez'
};

const element = (

  <h1>
    Hello, {formatName(user)}!
  </h1>
);
//
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
//
const element = <a href="https://www.reactjs.org"> link </a>;
//
const element = <img src={user.avatarUrl}></img>;
//
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
//
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element = <h1>Hello, world</h1>;
root.render(element);
//
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
const element = (

<div>
<h1>Hello, world!</h1>
<h2>It is {new Date().toLocaleTimeString()}.</h2>
</div>
);
root.render(element);
}

setInterval(tick, 1000);
//
Elements =>
<input type="text" />
//

<div>
<span>Text</span>
</div>
//
<>
<h1>Title</h1>
<inpute type="text" />
</>
//
  //  "start": "webpack serve --mode=development --devtool source-map",
  // => 
      "start": "webpack-dev-server --mode=development --open", // work corectly
//

ADD ATRIBUTS =>
string => <input type="text" />
number|boolean|null|undefined|object(array,function...) => <input type="number" value={17} />
//

<div class="seconds"></div>    =>    <div className="seconds"></div>
<div style="color: #ccc; backround-color: #000"></div>    =>    <div style={{ color: #ccc, backround-color: #000}}></div>
font-weight => fontWeight
//
 <span style={{ color: 'red', fontWeight: 700 }}>To young</span>
 or 
 style = { color: 'red', fontWeight: 700 };
 //
 <span style={style}>To young</span>
//

/// lesson3 => \***\*\*\*\*\*\*\*** Komponent

// "devDependencies" => :

npm i -D @babel/cli @babel/core @babel/plugin-transform-react-jsx @babel/preset-env @babel/preset-react babel-loader clean-webpack-plugin css-loader css-loader html-webpack-plugin loader mini-css-extract-plugin node-sass sass sass-loader style-loader webpack webpack-cli webpack-dev-server webpack-progress-plugin

// "dependencies" =>:
npm i -S core-js react react-dom
