import React from 'react';
import Avatar from './Avatar';

const UserInfo = props => {
  return (
    <div className="user-info">
      <Avatar avatarUrl={props.user.avatarUrl} name={props.user.name} />
      {/* <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} /> */}
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
};

export default UserInfo;
