import React from 'react';

const Spinner = ({ size }) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };
  return <span style={style} className="spinner"></span>;
};

export default Spinner;
