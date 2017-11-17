import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from './UserListItem'

const UserList = ({ users, handleListItemClick }) => (
  <ul>
    {
      users.map(user => (
        <UserListItem
          handleListItemClick={() => handleListItemClick()}
          user={user}
          key={user._id}
        />
      ))
    }
  </ul>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleListItemClick: PropTypes.func.isRequired,
};

export default UserList;
