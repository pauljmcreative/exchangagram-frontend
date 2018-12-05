import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import '../../styles/SignInForm.css';
import UsersAPI from '../../models/UsersAPI';
import setAuthToken from '../../utils/setAuthToken';

class SignInForm extends Component {
  state = {
    username: '',
    password: '',
  }

  handleSigninChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSigninSubmit = (e) => {
    e.preventDefault();
    const signinData = {
      username: this.state.username,
      password: this.state.password,
    };

    UsersAPI.signin(signinData)
      .then(res => {
        localStorage.setItem('egt', res.data.token);
        const decoded = jwt_decode(res.data.token);
        setAuthToken(res.data.token);
        // console.log('decoded>>', decoded);
        this.props.setUser(decoded);
      })
      .then(() => this.props.history.push('/home/feed'))
      .catch(err => {
        console.log(err)
      })

  }

  render() {
    return (
      <form className="SignInForm__root">
        <fieldset>
          <input
            onChange={this.handleSigninChange}
            name="username"
            type="text"
            placeholder="Username"
            className="SignInForm__input"
          />
        </fieldset>
        <fieldset>
          <input
            onChange={this.handleSigninChange}
            name="password"
            type="password"
            placeholder="Password"
            className="SignInForm__input"
          />
        </fieldset>
        <button
          onClick={this.handleSigninSubmit}
          className="SignInForm__button"
          type="submit">
          Submit
        </button>
      </form>
    );
  }
}


export default withRouter(SignInForm);