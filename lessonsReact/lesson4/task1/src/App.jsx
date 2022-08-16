import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <Counter start={100} interval={1000} />
      <Counter start={-50} interval={500} />
      <Counter start={-300} interval={100} />
    </>
  );
};

export default App;

// <div className="counter">17</div>
