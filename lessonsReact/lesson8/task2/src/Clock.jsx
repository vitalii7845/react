import React from 'react';
import moment from 'moment';

const setOffset = offset => {
  return moment().utcOffset(offset).format('h:mm:ss a');
};

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: setOffset(this.props.offset),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: setOffset(this.props.offset),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;
