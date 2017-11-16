import React from 'react';
import PropTypes from 'prop-types'

const UserDisplay = ({user}) => {
  return (
    <div id='user-display'>
      <div id='user-photo'>
        <img src='{user.photoURL}' />
      </div>
      <div id='user-text'>
        <h2>{user.fullName}</h2>
        <h4>{user.blurb}</h4>
      </div>
    </div> 
  )
}

UserDisplay.propTypes = {
  user: PropTypes.object
};

export default UserDisplay;
