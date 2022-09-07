import React from 'react';
import Expand from './Expand';

class App extends React.Component {
  render() {
    const childElement = (
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
    );
    return (
      <div className="app">
        <Expand title={'Some title'}>{childElement}</Expand>
      </div>
    );
  }
}

export default App;
