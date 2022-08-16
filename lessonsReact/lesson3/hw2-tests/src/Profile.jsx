import React from 'react';
import moment from 'moment';
import './profile.scss';
import ProfileName from './ProfileName';

const Profile = props => {
  const birthDate = moment(new Date(props.userData.birthDate)).format('DD MMM YY');
  return (
    <div className="profile">
      <ProfileName userData={props.userData} />
      <div className="profile__birth">{`Was born ${birthDate} in ${props.userData.birthPlace}`}</div>
    </div>
  );
};

export default Profile;
