import React, { Component } from 'react';

class Toggler extends Component {
  constructor() {
    super();
    this.state = {
      togglerStatus: 'OFF',
    };
  }

  setButtonStatus = () => {
    this.setState({
      togglerStatus: this.state.togglerStatus === 'OFF' ? 'ON' : 'OFF',
    });
  };

  render() {
    return (
      <>
        <div className="toggler" onClick={this.setButtonStatus}>
          {this.state.togglerStatus}
        </div>
      </>
    );
  }
}

export default Toggler;
