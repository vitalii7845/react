import React from 'react';
import Dialog from './Dialog';

class App extends React.Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    // const elem = <p>Some text</p>;
    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>
          Show dialog
        </button>
        <Dialog isOpen={this.state.isOpen} onClose={this.hideDialog} title="some title">
          <p>Some text</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
