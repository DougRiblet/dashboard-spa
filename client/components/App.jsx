import React from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserDisplay from './UserDisplay';
import Welcome from './Welcome';
import UserAddNew from './UserAddNew';
import UserEdit from './UserEdit';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mode: 'welcome',
      welcomeMessage: 'Please select user to display, or add a new user',
      current: '',
      users: [],
    };
    this.setMode = this.setMode.bind(this);
    this.generateMainPane = this.generateMainPane.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);
    this.retrieveAllUsers = this.retrieveAllUsers.bind(this);
    this.addUser = this.addUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    this.retrieveAllUsers();
  }

  setMode(input) {
    this.setState({ mode: input });
  }

  handleListItemClick(id) {
    console.log("clickID: ", id);
    this.setState({ mode: 'display', current: id });
  }

  generateMainPane() {
    if (this.state.mode === 'welcome') {
      return (
        <Welcome welcomeMessage={this.state.welcomeMessage} />
      );
    }
    const currentUser = this.state.users.find(x => x._id === this.state.current);
    console.log("currentUser: ", currentUser)
    if (this.state.mode === 'display') {
      return (
        <UserDisplay user={currentUser} />
      );
    } else if (this.state.mode === 'addnew') {
      return (
        <UserAddNew user={currentUser} />
      );
    } else if (this.state.mode === 'edit') {
      return (
        <UserEdit user={currentUser} />
      );
    }
  }

  // BEGIN DATABASE CALLS

  retrieveAllUsers() {
    axios.get('http://localhost:8000/allUsers')
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addUser(data) {
    axios.post('http://localhost:8000/newUser', data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateUser(data) {
    axios.post(`http://localhost:8000/updateUser/${data._id}`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteUser(id) {
    axios.delete(`http://localhost:8000/deleteUser/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // END DATABASE CALLS

  render() {
    return (
      <div id='container'>
        <div id='user-list'>
          <UserList
            users={this.state.users}
            handleListItemClick={this.handleListItemClick}
          />
        </div>
        <div id='main-pane'>
          { this.generateMainPane() }
        </div>
      </div>
    );
  }
}
