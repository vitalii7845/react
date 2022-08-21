import React from 'react';
import Online from './Online';
import Offline from './Offline';

const Status = ({ isOnline }) => {
  // if (isOnline) {
  //   return <Online />;
  // }
  // return <Offline />;

  return isOnline ? <Online /> : <Offline />;
};

export default Status;
