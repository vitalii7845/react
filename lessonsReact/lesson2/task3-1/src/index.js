import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

// const renderSeconds = time => {
//   const rootElement = document.querySelector('#root');

//   const seconds = new Date(time).getSeconds();
//   const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
//   const textColor = seconds % 2 !== 0 ? '#fff' : '#000';

//   const styles = {
//     backgroundColor,
//     color: textColor,
//   };

//   const element = (
//     <div className="seconds" style={styles}>
//       Now is {seconds}
//     </div>
//   );

//   ReactDOM.render(element, rootElement);
// };
// renderSeconds(new Date());
// setInterval(() => renderSeconds(new Date()), 1000);

// v2-works______
const getTimer = () => {
  const rootElement = document.querySelector('#root');

  const seconds = new Date().getSeconds();

  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';

  const textColor = seconds % 2 !== 0 ? '#fff' : '#000';

  const timerStyle = {
    backgroundColor,
    color: textColor,
  };

  const element = (
    <div className="seconds" style={timerStyle}>
      Now is {seconds}
    </div>
  );

  ReactDOM.render(element, rootElement);
};

setInterval(getTimer, 1000);
