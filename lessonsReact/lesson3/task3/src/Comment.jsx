import React from 'react';
import './comment.scss';
import moment from 'moment';
import UserInfo from './UserInfo.jsx';

const formatDate = date => moment(date).format('DD MMM YYYY');

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo author={userInfo} />
      {/* <div className="user-info">
        <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} />
        <div className="user-info__name">{props.user.name}</div>
      </div> */}
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
