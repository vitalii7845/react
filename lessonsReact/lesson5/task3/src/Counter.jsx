import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    this.decrement = this.decrement.bind(this); // => + do 1 sposobu ne vtratutu content
    // this.increment = this.increment.bind(this);
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  } // => 1 sposib ne vtratutu content

  // increment() {
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  // }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }; // => 2 sposib

  reset() {
    this.setState({
      counter: 0,
    });
  } // => 3 sposib

  render() {
    return (
      <div className="counter">
        <button data-action="decrease" className="counter__button" onClick={this.decrement}>
          -
        </button>
        <span className="counter__value" onClick={() => this.reset()}>
          {this.state.counter}
        </span>
        <button data-action="increase" className="counter__button" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
