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
