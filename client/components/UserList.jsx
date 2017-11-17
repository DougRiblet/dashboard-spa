import React from 'react';
import UserListItem from './UserListItem'

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(str) {
    console.log("clickSTR: ", str);
    this.props.handleListItemClick(str);
  }

  render() {
    return (
      <ul>
        {
          this.props.users.map(user => (
            <UserListItem
              handleClick={this.handleClick}
              user={user}
              key={user._id}
            />
          ))
        }
      </ul>
    );
  }
}
