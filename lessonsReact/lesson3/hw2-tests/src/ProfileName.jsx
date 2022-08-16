import React from 'react';

const ProfileName = props => {
  return (
    <>
      <div className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</div>
    </>
  );
};

export default ProfileName;
