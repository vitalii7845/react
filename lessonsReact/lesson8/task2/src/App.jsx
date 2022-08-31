import React from 'react';
import Clock from './Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div className="box">
        <button onClick={this.toggle}>Toggle</button>
        <div>{this.state.visible && <Clock location="London" offset={0} />}</div>
        <div>{this.state.visible && <Clock location="Kyiv" offset={2} />}</div>
        <div>{this.state.visible && <Clock location="New York" offset={-5} />}</div>
      </div>
    );
  }
}

export default App;
