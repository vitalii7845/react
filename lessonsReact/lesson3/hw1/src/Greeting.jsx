import React from 'react';
import moment from 'moment';

const Greeting = proops => {
  const userAge = moment().diff(moment(proops.birthDate), 'Years');
  return (
    <div className="greeting">
      {`My name is ${proops.firstName} ${proops.lastName}. I'm ${userAge} years old`}
    </div>
  );
};

export default Greeting;
