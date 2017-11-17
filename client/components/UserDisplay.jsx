import React from 'react';

const UserDisplay = ({ user, setMode }) => (
  <div id='user-display'>
    <div id='user-photo'>
      <img
        src={user.photoURL}
        alt={user.fullName}
      />
    </div>
    <div id='user-text'>
      <h2>{user.fullName}</h2>
      <h4>{user.blurb}</h4>
    </div>
    <div id='user-buttons'>
      <button
        id='editUserButton'
        onClick={() => setMode('edit')}
      >Edit This User</button>
    </div>
  </div>
);

export default UserDisplay;
