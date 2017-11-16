import React from 'react';
import PropTypes from 'prop-types';

const UserList = ({ users, handleListItemClick }) => (
  <ul>
    {
      users.map(user => (
          <li onClick={() => handleListItemClick(user.id)}>{user.name}</li>
        )
      )
    }
  </ul>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleListItemClick: PropTypes.func.isRequired,
};

export default UserList;
