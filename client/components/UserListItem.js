import React from 'react';
import PropTypes from 'prop-types';

const UserListItem = ({ user, handleClick }) => {
  const passClick = (e) => {
    handleClick(user._id);
  }
  return (
    <li onClick={passClick}>
      {user.fullName}
    </li>
  );
}

UserListItem.propTypes = {
  user: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default UserListItem;
