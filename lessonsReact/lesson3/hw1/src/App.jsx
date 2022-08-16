import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return <Greeting firstName="John" lastName="Doe" birthDate={new Date('2005-03-24')} />;
};

export default App;
