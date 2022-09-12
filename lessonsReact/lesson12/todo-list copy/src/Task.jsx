import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({ id, text, done, onChange, onDelete }) => {
  return (
    <li className={classNames('list-item', { 'list-item_done': done })}>
      <input
        className="list-item__checkbox"
        type="checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
