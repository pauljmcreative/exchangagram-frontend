import React, { Component } from 'react';
import ErrorMessages from '../ErrorMessages';
import '../../styles/SignUpForm.css';

class SignUpForm extends Component {
  renderError(field) {
    if (field.touched && field.error) {
      return (
        <span className="SignUpForm__error-text">
          {field.error}
        </span>
      );
    }
  }

  render() {

    return (
      <form className="SignUpForm__root">
        <fieldset>
          <input
            type="email"
            placeholder="Email"
            className="SignUpForm__input"
          />
        </fieldset>
        <fieldset>
          <input
            type="text"
            placeholder="Username"
            className="SignUpForm__input"
          />
        </fieldset>
        <fieldset>
          <input
            type="password"
            placeholder="Create Password"
            className="SignUpForm__input"
          />
        </fieldset>
        <button
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