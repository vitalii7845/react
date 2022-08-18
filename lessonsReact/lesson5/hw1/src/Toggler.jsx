import React, { Component } from 'react';

class Toggler extends Component {
  constructor() {
    super();
    this.state = {
      togglerStatus: 'Off',
    };
  }

  setButtonStatus = () => {
    this.setState({
      togglerStatus: this.state.togglerStatus === 'Off' ? 'On' : 'Off',
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
