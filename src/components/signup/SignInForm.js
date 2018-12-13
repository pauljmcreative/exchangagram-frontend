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
    errors: {},
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
    if (this.validate(signinData)) {
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
          this.handleIncorrectInputs();
        })
    }
  }

  validate = (values) => {
    let errors = {};
    let formIsValid = true;

    if (!values.username) {
      formIsValid = false;
      errors.username = '*Please enter your username.';
    } else if (values.username.length < 2) {
      formIsValid = false;
      errors.username = '*Please re-enter your username.';
    } else if (values.username.length > 30) {
      formIsValid = false;
      errors.username = '*Please re-enter your username.';
    } else if (!/^[A-Z0-9_-]{3,30}$/i.test(values.username)) {
      formIsValid = false;
      errors.username = '*Please re-enter your username.'
    } // Add uniqueness

    if (!values.password) {
      formIsValid = false;
      errors.password = '*Password is required';
    } else if (values.password.length < 8) {
      formIsValid = false;
      errors.password = '*Please re-enter password';
    }
    this.setState({
      errors: errors
    })
    return formIsValid;
  }

  handleIncorrectInputs = () => {
    this.setState({
      errors: { invalidCredentials: 'Incorrect username or password' }
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
          <div className="errorMsg">{this.state.errors.username}</div>
          <div className="errorMsg">{this.state.errors.invalidCredentials}</div>
        </fieldset>
        <fieldset>
          <input
            onChange={this.handleSigninChange}
            name="password"
            type="password"
            placeholder="Password"
            className="SignInForm__input"
          />
          <div className="errorMsg">{this.state.errors.password}</div>
          <div className="errorMsg">{this.state.errors.invalidCredentials}</div>
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