import React from 'react';
import PropTypes from 'prop-types';

class Numbers extends React.PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   if (this.props.number === nextProps.number && this.props.title === nextProps.title) {
  //     return false;
  //   }
  //   return true;
  // } = > ne potribno kolu e PureComponent

  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

// userData = { name: 'Tom', age: 17 } PureComponent ne vidlove po sulci
// npm i -S prop-types

Numbers.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number.isRequired, // obovyazkove
};

Numbers.defaultProps = {
  title: 'Some number',
};

export default Numbers;
