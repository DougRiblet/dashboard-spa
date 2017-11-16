import React from 'react';

export default class UserEdit extends React.Component {
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

  componentDidMount() {
    this.setState({
      fullName: this.props.user.fullName,
      photoURL: this.props.user.photoURL,
      blurb: this.props.user.blurb,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
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
            <input
              id='photo-URL'
              type='text'
              value={this.state.photoURL}
              onChange={this.handleChangePU}
            />
          </label>
          <br />
          <label htmlFor='personal-blurb'>
            Personal Blurb:
            <input
              id='personal-blurb'
              type='text'
              value={this.state.blurb}
              onChange={this.handleChangeBL}
            />
          </label>
          <input type='submit' value='Submit' className='submitButton' />
        </form>
      </div>
    );
  }
}
