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

//
// functional // = >
index.jsx =>:
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import './search.scss';
import './index.scss';

const rootElem = document.querySelector('#root');
ReactDOM.render(<Search name="Den" />, rootElem);

Search.jsx => :
import React from 'react';

const Search = props => {
return (

<div className="Search">
<h1 className="search__title">{`Hello, ${props.name}. What to search for you?`}</h1>
<div className="search__field">
<input type="text" className="search__input" />
<button className="search__button">Search</button>
</div>
</div>
);
};

export default Search;

or v.2 =>
// export default Search => {
// return (
// <div className="Search">
// <h1 className="search__title">{`Hello, ${Search.name}. What to search for you?`}</h1>
// <div className="search__field">
// <input type="text" className="search__input" />
// <button className="search__button">Search</button>
// </div>
// </div>
// );
// };

//
// class

index.jsx => :
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import './search.scss';
import './index.scss';

const rootElem = document.querySelector('#root');
ReactDOM.render(<Search name="Tom" />, rootElem);

Search.jsx => :
import React, { Component } from 'react';

export default class Search extends Component {
render() {
return (

<div className="Search">
<h1 className="search__title">{`Hello, ${this.props.name}. What to search for you?`}</h1>
<div className="search__field">
<input type="text" className="search__input" />
<button className="search__button">Search</button>
</div>
</div>
);
}
}

// = lesson3 =//

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<App />, rootElement);

//
import React from 'react';
import Profile from './Profile';

const userInfo = {
firstName: 'James',
lastName: 'Bond',
birthDate: '1991-01-17T11:11:11.819Z',
birthPlace: 'London',
};

const App = () => {
return <Profile userData={userInfo} />;
};

export default App;

//

import React from 'react';
import moment from 'moment';
import './profile.scss';
import ProfileName from './ProfileName';

const Profile = props => {
const birthDate = moment(new Date(props.userData.birthDate)).format('DD MMM YY');
return (

<div className="profile">
<ProfileName userData={props.userData} />
<div className="profile__birth">{`Was born ${birthDate} in ${props.userData.birthPlace}`}</div>
</div>
);
};

export default Profile;

//

import React from 'react';

const ProfileName = props => {
return (
<>

<div className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</div>
</>
);
};

export default ProfileName;

// => // LESSON4 <=> STATE

ways to update component in react =>:
props // => next lessons
this.setState() // => ok !!!
this.forceUpdate() // dyze ridko
//

index.jsx =>:
const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);
//
App.jsx =>:
import React from 'react';
import Counter from './Counter';

const App = () => {
return (
<>
<Counter   />
</>
);
};
export default App;
//
Counter.jsx => :

import React, { Component } from 'react';
import './counter.scss';

class Counter extends Component {
constructor() {
super();
this.state = {
counter: 0,
};

    // ne uzatu, demonstration // Do not do this way
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);

}

render() {
return <div className="counter">{this.state.counter}</div>;
}
}
export default Counter;

// => // LESSON5 => Event

HTML  
<button onclick="login()">Login</button>
//
React
<button onClick={login}>Login</button>
//
HTML

<form class="login-form">...</form>
document.querySelector('.login-form').addEventListener('submit', handleLogin);
//
React
<form onSubmit={handleLogin}>...</form>
//

HTML
const infoIconElem = document.querySelector('.info');infoIconElem.addEventListener('submit', showTooltip);
infoIconElem.removeEvenListener('submit', showTooltip);
//
React
<span onMouseEnter={onHover}>...</span>
//
HTML
elem.addEventListener(click, handleClick, true)
//
React
<button onClickCapture={handleClick}>...</button>
//
//==
const GoodButton = () => (
<button className="fancy-button" onClick={() => alert('Good job!')}>
Click me!
</button>
);
//=//

class GoodButton extends React.Component {
handleClick(e) {
console.log(e.target.textContent); // console => 'Click me!'
console.log(e.); // target=null
alert('Good job!');
}
render() {
return (
<button className="fancy-button" onClick={this.handleClick}>
Click me!
</button>
);
}
}
//=//
import React from 'react';

class GoodButton extends React.Component {
handleClick(event) {
alert(event.target.textContent);
}
render() {
return (
<button className="fancy-button" onClick={this.handleClick}>
Click me!
</button>
);
}
}

export default GoodButton;

// ne vtrachatu content

import React from 'react';

class Counter extends React.Component {
constructor(props) {
super(props);

    this.state = {
      counter: 0,
    };
    this.decrement = this.decrement.bind(this); // => + do 1 sposobu ne vtratutu content
    // this.increment = this.increment.bind(this);

}

decrement() {
this.setState({
counter: this.state.counter - 1,
});
} // => 1 sposib ne vtratutu content

// increment() {
// this.setState({
// counter: this.state.counter + 1,
// });
// }

increment = () => {
this.setState({
counter: this.state.counter + 1,
});
}; // => 2 sposib

reset() {
this.setState({
counter: 0,
});
} // => 3 sposib

render() {
return (

<div className="counter">
<button data-action="decrease" className="counter__button" onClick={this.decrement}> -
</button>
<span className="counter**value" onClick={() => this.reset()}>
{this.state.counter}
</span>
<button data-action="increase" className="counter**button" onClick={this.increment}> +
</button>
</div>
);
}
}

export default Counter;
//
import React, { Component } from 'react';

class ColorPicker extends Component {
constructor(props) {
super(props);
this.state = {
textColorName: '',
};
}

getButtonColor = color => {
this.setState({
textColorName: color,
});
};

resetColorName = () => {
this.setState({
textColorName: '',
});
};

render() {
return (

<div>
<div className="picker__title">{this.state.textColorName}</div>
<div>
<button
className="picker**button picker**button_coral"
onMouseEnter={() => this.getButtonColor('Coral')}
onMouseLeave={this.resetColorName} ></button>
<button
className="picker**button picker**button_aqua"
onMouseEnter={() => this.getButtonColor('Aqua')}
onMouseLeave={this.resetColorName} ></button>
<button
className="picker**button picker**button_bisque"
onMouseEnter={() => this.getButtonColor('Bisque')}
onMouseLeave={this.resetColorName} ></button>
</div>
</div>
);
}
}

export default ColorPicker;

// => Lesson 6 <=> CONDITIONAL RENDERING
//
IF
&&
... ? ... : ...

=> if
function Comp (...) {
if (...) {
return <Comp1 />;
}
return <Comp2 />;
};
//=//
function Comp (...) {
if (...) {
return null;
}
return <Comp1 />;
};
// = //
... ? ... : ...
//
function Comp (...) {
return (
<>
<Comp1 />
{Condition ? <Comp2 /> : <Comp3 />}
</>
);
};

// = //
= &&==
//
function Comp (...) {
return (
<>
<Comp1 />
{Condition && <Comp2 />}
</>
);
};
//=//=//
//=> v.1
const Greeting = props => {
if (props.isLoggedIn) {
return (
<>
<UserGreeting />
</>
);
}
return <GuestGreeting />;

//=//=// OR v.2 =>
const Greeting = props => {
const { isLoggedIn } = props;
if (isLoggedIn) {
return (
<>
<UserGreeting />
</>
);
}
return <GuestGreeting />;
};
//<>// OR v.3 =>
const Greeting = ({ isLoggedIn }) => {
const { isLoggedIn } = props;
if (isLoggedIn) {
return (
<>
<UserGreeting />
</>
);
}
return <GuestGreeting />;
};
//////
import React from 'react';
import Greeting from './Greeting.jsx';

class Auth extends React.Component {
constructor(props) {
super(props);

    this.state = {
      isLoggedIn: false,
    };

}

handleLogin = () => {
this.setState({
isLoggedIn: true,
});
};

handleLogout = () => {
this.setState({
isLoggedIn: false,
});
};

render() {
let button;

    if (this.state.isLoggedIn) {
      button = <button onClick={this.handleLogout}>Logout</button>;
    } else {
      button = <button onClick={this.handleLogin}>Login</button>;
    }

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
      </div>
    );

}
}

export default Auth;
//// or

import React from 'react';
import Greeting from './Greeting.jsx';

class Auth extends React.Component {
constructor(props) {
super(props);

    this.state = {
      isLoggedIn: false,
    };

}

handleLogin = () => {
this.setState({
isLoggedIn: true,
});
};

handleLogout = () => {
this.setState({
isLoggedIn: false,
});
};

render() {
const button = this.state.isLoggedIn ? (
<button onClick={this.handleLogout}>Logout</button>
) : (
<button onClick={this.handleLogin}>Login</button>
);

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
      </div>
    );

}
}

export default Auth;
//=//==//==//
v.3 =>
import React from 'react';
import Greeting from './Greeting.jsx';

class Auth extends React.Component {
constructor(props) {
super(props);

    this.state = {
      isLoggedIn: false,
    };

}

handleLogin = () => {
this.setState({
isLoggedIn: true,
});
};

handleLogout = () => {
this.setState({
isLoggedIn: false,
});
};

render() {
return (

<div className="panel">
<Greeting isLoggedIn={this.state.isLoggedIn} />
<div>
{this.state.isLoggedIn ? (
<button onClick={this.handleLogout}>Logout</button>
) : (
<button onClick={this.handleLogin}>Login</button>
)}
</div>
</div>
);
}
}

//
//task => && <=

//index
const rootElement = document.querySelector('#root');
ReactDOM.render(<Mailbox unreadMessages={['f', 'f', 'f']} />, rootElement);

//Mailbox

import React from 'react';
const Mailbox = ({ unreadMessages }) => {
return (

<div className="mailbox">
<span className="mailbox__text">Messages</span>
{unreadMessages.length > 0 && <span className="mailbox__count">{unreadMessages.length}</span>}
</div>
);
};
export default Mailbox;
//=//=//=//=//=//=//
import React from 'react';
import Message from './Message';

const text1 = 'Hello, world!';
const text2 = 'Another exciting text.';

class Page extends React.Component {
state = {
text: null,
};

// constructor(props) {
// super(props);
// this.state = {
// text: null,
// };
// }

setText = text => {
this.setState({
text,
});
};
render() {
return (

<div className="page">
<Message text={this.state.text} />
<div className="actions">
<button className="btn" onClick={() => this.setText(text1)}>
Text 1
</button>
<button className="btn" onClick={() => this.setText(text2)}>
Text 2
</button>
<button className="btn" onClick={() => this.setText('')}>
Clear
</button>
</div>
</div>
);
}
}

export default Page;
//
import React from 'react';

const Message = ({ text }) => {
if (!text) {
return null;
}
return <div className="message">{text}</div>;
};

export default Message;
////
//=//=//=//=//=//=//=//=//=
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Status from './Status';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Status isOnline={true} />, rootElement);
import React from 'react';
import Online from './Online';
import Offline from './Offline';

const Status = ({ isOnline }) => {
// if (isOnline) {
// return <Online />;
// }
// return <Offline />;

return isOnline ? <Online /> : <Offline />;
};
//=//=//=//==
const Offline = () => {
return (

<div className="status">
<span className="status__text">Offline</span>
<button className="status__btn">Reconnect</button>
</div>
);
};

export default Offline;

//==//==//==//==//
=//=/==/=LESSON=>7 => list
//=//=//=
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App.jsx';

const rootElement = document.querySelector('#root');

const numbers = [1, 2, 3, 4, 5, 6, 7];
const element = (

  <ul>
    <li>{numbers[0]}</li>
    <li>{numbers[1]}</li>
    <li>{numbers[2]}</li>
    <li>{numbers[3]}</li>
    <li>{numbers[4]}</li>
    <li>{numbers[5]}</li>
    <li>{numbers[6]}</li>
  </ul>
);

ReactDOM.render(element, rootElement);
//=//
const rootElement = document.querySelector('#root');

const numbers = [1, 2, 3, 4, 5, 6, 7];

const numbElement = numbers.map(num => <li>{num}</li>);
const element = <ul>{numbElement}</ul>;

ReactDOM.render(<ul>{element}</ul>, rootElement);

// const element = (
// <ul>
// <li>{numbers[0]}</li>
// <li>{numbers[1]}</li>
// <li>{numbers[2]}</li>
// <li>{numbers[3]}</li>
// <li>{numbers[4]}</li>
// <li>{numbers[5]}</li>
// <li>{numbers[6]}</li>
// </ul>
// );

// ReactDOM.render(element, rootElement);
//
import React from 'react';

const NumberList = ({ numbers }) => {
// const { numbers } = props;
// const numberElements = numbers.map(num => <li>{num}</li>);
// return <ul>{numberElements}</ul>;

return (

<ul>
{numbers.map(num => (
<li key={num}>{num}</li>
))}
</ul>
);

// = key: string & uniqum value !!!!!

// const element = <ul>{numberElements}</ul>;
// return element;
};

export default NumberList;
//
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UserList from './UserList';

const rootElement = document.querySelector('#root');

const users = [
{
id: 'id-0',
age: 21,
name: 'Bob',
},
{
id: 'id-1',
age: 17,
name: 'Tom',
},
{
id: 'id-2',
age: 18,
name: 'Tad',
},
{
id: 'id-3',
age: 45,
name: 'Sam',
},
];

ReactDOM.render(<UserList users={users} />, rootElement);
//
import React from 'react';
import User from './User';

class UserList extends React.Component {
state = {
sorting: null,
};

toggleSorting = () => {
const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';
this.setState({
sorting: newSorting,
});
};

render() {
console.log(this.props.users);
let usersList;
if (this.state.sorting) {
usersList = this.props.users
.slice()
.sort((a, b) => (this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age));
} else {
usersList = this.props.users;
}

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || '-'}
        </button>
        <ul className="users">
          {usersList.map(user => (
            // <User key={user.name} name={user.name} age={user.age} />
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );

}
}

export default UserList;
//
import React from 'react';

const User = ({ name, age, id }) => {
return (

<li className="user">
<span className="user__name">{name}</span>
<span className="user__age">{age}</span>
</li>
);
};

export default User;

// LESSON - 8 - <=> lifecycle methods

stage
Mounting
constructor()
static getDerivedStateFromProps()
render()
componentDidMount()
//
Update
static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
//
Unmounting
componentwillUnmount()
//

import React from 'react';
import Life from './Life';

class Demo extends React.Component {
state = {
number: Math.round(Math.random() \* 100),
};

show = () => {
this.setState({
visible: true,
});
};

hide = () => {
this.setState({
visible: false,
});
};

update = () => {
this.setState({
number: Math.round(Math.random() \* 100),
});
};

render() {
return (

<div>
<div>
<button className="btn" onClick={this.show}>
Show
</button>
<button className="btn" onClick={this.hide}>
Hide
</button>
<button className="btn" onClick={this.update}>
Update
</button>
</div>
{this.state.visible && <Life number={this.state.number} />}
</div>
);
}
}

// {this.state.visible && <Life number={this.state.numer} />}

export default Demo;
//
componentDidMount() {
console.log('=> componentDidMount'); // коли елементи вже насторінці (підписки, інціалізації)
}

shouldComponentUpdate(nextProps, nextState) {
// this.props, this.state; => vonu e
console.log(nextProps, nextState);
console.log('=> shouldComponentUpdate'); // перед рендером на апдейт стадії, для оптимізації
return nextProps.number % 2; // true or false => render will work when value true
}

componentDidUpdate(prevProps, prevState) {
// this.props;
console.log(prevProps);
console.log('=> componentDidUpdate');
}

componentWillUnmount() {
console.log('=> componentWillUnmount'); // для очистки, відписки, почистити дані, память тощо
}

// users component there

render() {
console.log('=> render');

    return <div className="number">{this.props.number}</div>;

}
}

export default Life;

//
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import Life from './Life.jsx';
import Demo from './Demo';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Demo />, rootElement);

=> lesson9
ref зчитати значення поля
зчитати розмір елемента
викликати фокус
