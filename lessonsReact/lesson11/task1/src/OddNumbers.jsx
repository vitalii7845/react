import React from 'react';

class OddNumbers extends React.Component {
  shouldComponentUpdate(nextProps) {
    // this.props.number = 70
    // nextProps.number = 71
    // return nextProps.number % 2 !== 0;
    return nextProps.number % 2 === 1;
  }
  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

export default OddNumbers;
