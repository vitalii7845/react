import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onToggleStatus);
    window.addEventListener('offline', this.onToggleStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.showConnectStatus);
    window.removeEventListener('offline', this.showConnectStatus);
  }

  showConnectStatus = e => {
    this.setState({
      status: e.type,
    });
  };

  render() {
    const changeStatus = this.state.status === 'offline' ? 'status_offline' : '';
    return <div className={`status ${changeStatus}`}>{this.state.status}</div>;
  }
}

export default ConnectionStatus;

// import React, { Component } from 'react';

// class ConnectionStatus extends Component {
//   state = {
//     status: true,
//   };

//   componentDidMount() {
//     window.addEventListener('online', this.handleStatus);
//     window.addEventListener('offline', this.handleStatus);
//   }

//   handleStatus = e => {
//     const status = e.target.navigator.onLine;
//     this.setState({
//       status,
//     });
//   };

//   componentWillUnmount() {
//     window.removeEventListener('online', this.handleStatus);
//     window.removeEventListener('offline', this.handleStatus);
//   }

//   render() {
//     const classStyle = this.state.status === true ? 'status' : 'status status_offline';
//     const statusText = this.state.status === true ? 'online' : 'offline';
//     return <div className={classStyle}>{statusText}</div>;
//   }
// }
// export default ConnectionStatus;


//
import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.showConnectStatus);
    window.addEventListener('offline', this.showConnectStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.showConnectStatus);
    window.removeEventListener('offline', this.showConnectStatus);
  }

  showConnectStatus = event => {
    this.setState({
      status: event.type,
    });
  };

  render() {
    const corectStyle = this.state.status === 'online' ? '' : 'status_offline';
    const textStatus = this.state.status === 'online' ? 'online' : 'offline';
    return <div className={`status ${corectStyle}`}>{textStatus}</div>;
  }
}

export default ConnectionStatus;