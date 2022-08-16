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
