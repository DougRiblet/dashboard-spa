import React from 'react';

export default class UserAddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      photoURL: '',
      blurb: ''
    }
    this.handleChangeFN = this.handleChangeFN.bind(this);
    this.handleChangePU = this.handleChangePU.bind(this);
    this.handleChangeBL = this.handleChangeBL.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChangeFN(event) {
    this.setState({fullName: event.target.value});
  }

  handleChangePU(event) {
    this.setState({photoURL: event.target.value});
  }
  
  handleChangeBL(event) {
    this.setState({blurb: event.target.value});
  }

  render () {
    return (
      <div className='formEdit'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Full Name:
            <input
              type='text'
              value={this.state.fullName}
              onChange={this.handleChangeFN}
            />
          </label>
          <br/>
          <label>
            Photo URL:
            <input
              type='text'
              value={this.state.fullName}
              onChange={this.handleChangePU}
            />
          </label>
          <br/>
          <label>
            Personal Blurb:
            <input
              type='text'
              value={this.state.fullName}
              onChange={this.handleChangeBL}
            />
          </label>
          <input type='submit' value='Submit' className='submitButton' />
        </form>
      </div>
    )
  }
}
