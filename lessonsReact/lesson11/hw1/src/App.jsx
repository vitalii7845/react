import React from 'react';
import Expand from './Expand';

class App extends React.Component {
  state = {
    isOpen: false,
  };

  changeDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const element = (
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
    );
    return (
      <div className="app">
        <Expand title="some title" isOpen={this.state.isOpen} onClose={this.changeDialog}>
          {element}
        </Expand>
      </div>
    );
  }
}

export default App;
