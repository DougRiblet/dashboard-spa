import React from 'react';

export default class UserAddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      photoURL: '',
      blurb: '',
    };
    this.handleChangeFN = this.handleChangeFN.bind(this);
    this.handleChangePU = this.handleChangePU.bind(this);
    this.handleChangeBL = this.handleChangeBL.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addUser({
      fullName: this.state.fullName,
      photoURL: this.state.photoURL,
      blurb: this.state.blurb,
    })
  }

  handleChangeFN(event) {
    this.setState({ fullName: event.target.value });
  }

  handleChangePU(event) {
    this.setState({ photoURL: event.target.value });
  }

  handleChangeBL(event) {
    this.setState({ blurb: event.target.value });
  }

  render() {
    return (
      <div className='formEdit'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='full-name'>
            Full Name:
            <br />
            <input
              id='full-name'
              type='text'
              value={this.state.fullName}
              onChange={this.handleChangeFN}
            />
          </label>
          <br />
          <label htmlFor='photo-URL'>
            Photo URL:
            <br />
            <input
              id='photo-URL'
              type='text'
              size='50'
              value={this.state.photoURL}
              onChange={this.handleChangePU}
            />
          </label>
          <br />
          <label htmlFor='personal-blurb'>
            Personal Blurb:
            <br />
            <input
              id='personal-blurb'
              type='text'
              size='50'
              value={this.state.blurb}
              onChange={this.handleChangeBL}
            />
          </label>
          <br />
          <input type='submit' value='Submit' className='submitButton' />
        </form>
      </div>
    );
  }
}
