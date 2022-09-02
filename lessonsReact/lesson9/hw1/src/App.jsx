import React from 'react';
import UsersList from './UsersList';

const users = [
  {
    id: '1',
    name: 'Taras',
    age: 17,
    city: 'London',
  },
  {
    id: '2',
    name: 'Andriy',
    age: 23,
    city: 'Rivne',
  },
  {
    id: '3',
    name: 'Muron',
    age: 43,
    city: 'Kharkiv',
  },
  {
    id: '4',
    name: 'Bogdan',
    age: 55,
    city: 'Lviv',
  },
  {
    id: '5',
    name: 'Artem',
    age: 35,
    city: 'Kherson',
  },
];

const App = () => {
  return <UsersList users={users} />;
};

export default App;
