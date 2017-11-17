import React from 'react';
import UserListItem from './UserListItem'

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleNewUserButton = this.handleNewUserButton.bind(this);
  }

  handleClick(str) {
    this.props.handleListItemClick(str);
  }

  handleNewUserButton(){
    this.props.setMode('addnew');
  }

  render() {
    return (
      <div>
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
        <button
          id='addUserButton'
          onClick={this.handleNewUserButton}
        >Add New User</button>
      </div>
    );
  }
}
