import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

const TemperatureInput = ({ onTemperatureChange, temperature, scale }) => {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={event => onTemperatureChange(event.target.value)} />
    </fieldset>
  );
};

export default TemperatureInput;
