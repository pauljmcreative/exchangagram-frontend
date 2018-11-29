import React, { Component } from 'react';
import UsersAPI from '../../models/UsersAPI';
import ErrorMessages from '../ErrorMessages';
import jwt_decode from 'jwt-decode';
import '../../styles/SignUpForm.css';

class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    username: '',
    password: '',
  }
  renderError(field) {
    if (field.touched && field.error) {
      return (
        <span className="SignUpForm__error-text">
          {field.error}
        </span>
      );
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSignupSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }
    UsersAPI.signup(userData)
      .then(res => {
        console.log(res);
        localStorage.setItem('egt', res.data.token);
        const decoded = jwt_decode(res.data.token);
        // console.log(decoded);
        this.props.setUser(decoded);
      })
  }


  render() {
    console.log(this.props);
    return (
      <form className="SignUpForm__root">
        <fieldset>
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            placeholder="Name"
            className="SignUpForm__input"
          />
        </fieldset>
        <fieldset>
          <input
            onChange={this.handleChange}
            name="email"
            type="email"
            placeholder="Email"
            className="SignUpForm__input"
          />
        </fieldset>
        <fieldset>
          <input
            onChange={this.handleChange}
            name="username"
            type="text"
            placeholder="Username"
            className="SignUpForm__input"
          />
        </fieldset>
        <fieldset>
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Create Password"
            className="SignUpForm__input"
          />
        </fieldset>
        <button
          onClick={this.handleSignupSubmit}
          className="SignUpForm__button"
          type="submit">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw SignUpForm__spinner" />
        </button>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username.length < 4) {
    errors.username = 'Username is too short (minimum 3 characters)';
  } else if (values.username.length > 30) {
    errors.username = 'Username is too long (maximum 30 characters)';
  } else if (!/^[A-Z0-9_-]{3,30}$/i.test(values.username)) {
    errors.username = 'Username should be one word (- and _ allowed)'
  } // Add uniqueness

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password is too short (minimum 8 characters)';
  }

  return errors;
}

export default SignUpForm;