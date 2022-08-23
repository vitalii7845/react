import React from 'react';

const NumbersList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map(num => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
};

export default NumbersList;
