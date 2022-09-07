import React from 'react';

class Expand extends React.Component {
  state = {
    display: false,
  };

  visibleDisplay = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    const content =
      this.state.display === true ? (
        <div className="expand__content">{this.props.children}</div>
      ) : null;
    const stateDisplay = this.state.display === true ? '︽' : '︾';
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.visibleDisplay}>
            <i className="fas fa-chevron">{stateDisplay}</i>
          </button>
        </div>
        {content}
      </div>
    );
  }
}

export default Expand;
