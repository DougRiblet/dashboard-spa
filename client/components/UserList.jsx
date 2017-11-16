import React from 'react';
import PropTypes from 'prop-types'

const UserList = ({users, handleListItemClick}) => {
  return (
    <ul>
      {
        users.map(function(user){
          return (
            <li onClick={() => handleListItemClick(user.id)}>{user.name}</li>
          )
        })
      }
    </ul>
  )
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  handleListItemClick: PropTypes.func
};

export default UserList;

// export default class UserList extends React.Component {
//   render () {
//     return (
//       <div>
//       </div>
//     )
//   }
// }