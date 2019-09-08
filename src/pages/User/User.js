/* eslint-disable react/prop-types */
import React from 'react';
import './User.css';

const User = props => {

  return (
    <div>
      User {props.match.params.id}
    </div>
  );
}

export default User;
