import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textColorName: '',
    };
  }

  getButtonColor = color => {
    this.setState({
      textColorName: color,
    });
  };

  resetColorName = () => {
    this.setState({
      textColorName: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.textColorName}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.getButtonColor('Coral')}
            onMouseLeave={this.resetColorName}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.getButtonColor('Aqua')}
            onMouseLeave={this.resetColorName}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.getButtonColor('Bisque')}
            onMouseLeave={this.resetColorName}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
