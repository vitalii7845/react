import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const users = [
  { id: 1, name: 'Bob', age: 21 },
  { id: 2, name: 'Sam', age: 45 },
  { id: 3, name: 'Rick', age: 33 },
  { id: 4, name: 'Tom', age: 65 },
  { id: 5, name: 'Teddy', age: 88 },
  { id: 6, name: 'Taras', age: 25 },
  { id: 7, name: 'Bogdan', age: 16 },
  { id: 8, name: 'Vasuliy', age: 17 },
  { id: 9, name: 'Sasha', age: 101 },
  { id: 10, name: 'Oksana', age: 74 },
  { id: 11, name: 'Oleksii', age: 22 },
  { id: 12, name: 'Oleg', age: 55 },
  { id: 13, name: 'Mykola', age: 68 },
  { id: 14, name: 'Maksum', age: 99 },
];

ReactDOM.render(<UsersList users={users} />, document.querySelector('#root'));
