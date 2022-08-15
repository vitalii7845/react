import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com/users',
};

const App = () => {
  return <Comment author={userInfo} text="Good job!" date={new Date('2022-08-15T23:36:53.566Z')} />;
};

export default App;
