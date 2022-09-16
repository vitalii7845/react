import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <button className="button" onClick={() => setToggle(!toggle)}>
        {toggle ? 'hide' : 'show'}
      </button>
      <div className="clock__wrapper">
        {toggle && (
          <>
            <Clock location="London" offset={0} />
            <Clock location="Kyiv" offset={2} />
            <Clock location="New York" offset={-5} />
          </>
        )}
      </div>
    </>
  );
};
export default App;
