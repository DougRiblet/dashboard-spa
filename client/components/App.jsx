import React from 'react';
import UserList from './UserList';
import UserDisplay from './UserDisplay';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <div id="user-list">
          <UserList />
        </div>
        <div id="user-display">
          <UserDisplay />
        </div>
      </div>
    )
  }
}